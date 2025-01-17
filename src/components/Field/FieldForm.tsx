import React, {useState} from "react";
import FieldMap from "../FieldMap.tsx";

export default function FieldForm(props) {

    const [lat, setLat] = useState(6.6755701454919105);
    const [lng, setLng] = useState(80.16122817993165);

    const handleLocationChange = (newLat: number, newLng: number, address: string) => {
        console.log(newLat, newLng)
        setLat(newLat);
        setLng(newLng);
        props.setLatitude(newLat)
        props.setLongitude(newLng)
        props.setFieldAddress(address)
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
                        <h1 className="modal-title">{props.title}</h1>
                    </div>
                    <div className="modal-body">
                        <div className="flex justify-center">
                            {imagePreview ? (
                                <img src={imagePreview} alt="Added Field" className="item-image"/>
                            ) : (
                                <img src="/images.png" alt="Added Field" id="addedFieldImg" className="item-image"/>
                            )}
                        </div>
                        <div>
                            <div className="form-group">
                            <label htmlFor="field_name" className="form-label">Field name</label>
                                <input type="text" id="field_name" className="form-control"
                                       placeholder="Enter your field name"
                                       onChange={(e) => props.setFieldName(e.target.value)}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="field_image" className="form-label">Choose field image</label>
                                <input type="file" id="field_image" className="form-control file-input" onChange={handleFileChange}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="field_size" className="form-label">Field size</label>
                                <input type="text" id="field_size" className="form-control"
                                       placeholder="Size of field"
                                       onChange={(e) => props.setFieldSize(e.target.value)}
                                />
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
                                <div id="add_field_map" className="field-map-container">
                                    <FieldMap initialLat={lat} initialLng={lng} onLocationChange={handleLocationChange} changeLocation={true}/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button onClick={props.handleCancel} className="cancel-button">Cancel</button>
                        <button onClick={props.handleSubmit} className="save-button">{props.children}</button>
                    </div>
                </div>
            </form>
        </div>
    )
}