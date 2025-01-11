import { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

interface FieldMapProps {
    initialLat: number;
    initialLng: number;
    onLocationChange?: (lat: number, lng: number) => void;
}

export default function FieldMap({ initialLat, initialLng, onLocationChange }: FieldMapProps) {
    const mapRef = useRef<HTMLDivElement>(null);
    const mapInstanceRef = useRef<L.Map | null>(null);
    const markerRef = useRef<L.Marker | null>(null);

    useEffect(() => {
        if (mapRef.current) {
            const map = L.map(mapRef.current).setView([initialLat, initialLng], 15);
            mapInstanceRef.current = map;

            // Add tile layer
            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

            // Add a marker
            const marker = L.marker([initialLat, initialLng]).addTo(map);
            markerRef.current = marker;

            // Update location on map click
            map.on('click', (e: L.LeafletMouseEvent) => {
                const { lat, lng } = e.latlng;
                if (markerRef.current) {
                    markerRef.current.setLatLng([lat, lng]);
                } else {
                    markerRef.current = L.marker([lat, lng]).addTo(map);
                }
                if (onLocationChange) {
                    onLocationChange(lat, lng);
                }
            });
        }

        // Cleanup map on unmount
        return () => {
            if (mapInstanceRef.current) {
                mapInstanceRef.current.remove();
            }
        };
    }, [initialLat, initialLng, onLocationChange]);

    return <div id="field_map" className="field-map" ref={mapRef} />;
}