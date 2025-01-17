import { memo, useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

interface FieldMapProps {
    initialLat: number;
    initialLng: number;
    changeLocation: boolean;
    onLocationChange?: (lat: number, lng: number, address: string) => void;
}

const FieldMap = memo(function FieldMap({ initialLat, initialLng, onLocationChange, changeLocation }: FieldMapProps) {
    const mapRef = useRef<HTMLDivElement>(null);
    const mapInstanceRef = useRef<L.Map | null>(null);
    const markerRef = useRef<L.Marker | null>(null);

    // Fetch address from latitude and longitude
    const fetchAddress = async (lat: number, lng: number): Promise<string> => {
        const apiUrl = `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lng}&format=jsonv2`;
        try {
            const response = await fetch(apiUrl);
            if (!response.ok) throw new Error('Failed to fetch address');
            const data = await response.json();

            // Extract the address components
            const fullAddress = data.display_name || 'Address not found';
            const addressParts = fullAddress.split(',').map((part: string) => part.trim());

            // Return the second segment or fallback
            return addressParts[1] || 'Unknown location';
        } catch (error) {
            console.error('Error fetching address:', error);
            return 'Error fetching address';
        }
    };

    useEffect(() => {
        if (mapRef.current) {
            const map = L.map(mapRef.current).setView([initialLat, initialLng], 15);
            mapInstanceRef.current = map;

            // Add tile layer
            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '© OpenStreetMap contributors',
            }).addTo(map);

            // Add a marker
            const marker = L.marker([initialLat, initialLng]).addTo(map);
            markerRef.current = marker;

            if (changeLocation) {
                // Update location on map click
                map.on('click', async (e: L.LeafletMouseEvent) => {
                    const { lat, lng } = e.latlng;
                    if (markerRef.current) {
                        markerRef.current.setLatLng([lat, lng]);
                    } else {
                        markerRef.current = L.marker([lat, lng]).addTo(map);
                    }

                    // Fetch address and pass it to the callback
                    const address = await fetchAddress(lat, lng);
                    if (onLocationChange) {
                        onLocationChange(lat, lng, address);
                    }
                });
            }
        }

        // Cleanup map on unmount
        return () => {
            if (mapInstanceRef.current) {
                mapInstanceRef.current.remove();
            }
        };
    }, [initialLat, initialLng, onLocationChange, changeLocation]);

    return <div id="field_map" className="field-map" ref={mapRef} />;
});

export default FieldMap;
