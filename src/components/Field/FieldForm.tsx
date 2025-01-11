import {useState} from "react";
import FieldMap from "../FieldMap.tsx";

export default function FieldForm() {

    const [lat, setLat] = useState(6.9271);
    const [lng, setLng] = useState(79.8612);

    const handleLocationChange = (newLat: number, newLng: number) => {
        console.log('New location:', newLat, newLng);
        setLat(newLat);
        setLng(newLng);
    }

    const [imagePreview, setImagePreview] = useState<string | null>(null);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            const previewUrl = URL.createObjectURL(file);
            setImagePreview(previewUrl);
        }
    };

    return (
        <div className="modal">
            <form action="" className="form-border">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title">Add a new field</h1>
                    </div>
                    <div className="modal-body">
                        <div className="flex justify-center">
                            {imagePreview ? (
                                <img src={imagePreview} alt="Added Field" className="item-image"/>
                            ) : (
                                <img src="/src/assets/images.png" alt="Added Field" id="addedFieldImg" className="item-image"/>
                            )}
                        </div>
                        <div>
                            <div className="form-group">
                            <label htmlFor="field_name" className="form-label">Field name</label>
                                <input type="text" id="field_name" className="form-control"
                                       placeholder="Enter your field name"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="field_image" className="form-label">Choose field image</label>
                                <input type="file" id="field_image" className="form-control file-input" onChange={handleFileChange}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="field_size" className="form-label">Field size</label>
                                <input type="text" id="field_size" className="form-control"
                                       placeholder="Size of field"/>
                            </div>
                        </div>
                        <div className="mt-6">
                            <div id="field_credential_location">
                                <div className="search-bar">
                                    <input type="search" placeholder="Search" className="search-input"
                                           aria-label="Search"/>
                                    <button type="button" className="search-button">
                                        <i className="fa-solid fa-magnifying-glass"></i>
                                    </button>
                                </div>
                                <div id="add_field_map" className="field-map">
                                    <FieldMap initialLat={lat} initialLng={lng} onLocationChange={handleLocationChange}/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button className="cancel-button">Cancel</button>
                        <button className="save-button">Save</button>
                    </div>
                </div>
            </form>
        </div>
    )
}