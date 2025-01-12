import React, {useState} from "react";

export default function CropForm(props) {

    const [imagePreview, setImagePreview] = useState<string | null>(null);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            const previewUrl = URL.createObjectURL(file);
            setImagePreview(previewUrl);
            props.setCropImage(previewUrl)
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
                                <img src={imagePreview} alt="Crop Preview" className="item-image"/>
                            ) : (
                                <img src="../../../public/images.png" alt="Crop Image" className="item-image"/>
                            )}
                        </div>
                        <div>
                            <label htmlFor="crop_name" className="form-label">Crop Name</label>
                            <input type="text" className="form-control" id="crop_name" placeholder="Enter crop name" onChange={(e) => props.setCropName(e.target.value)}/>
                        </div>
                        <div>
                            <label htmlFor="crop_scientific_name" className="form-label">Scientific Name</label>
                            <input type="text" className="form-control" id="crop_scientific_name" placeholder="Scientific name" onChange={(e) => props.setCropScientificName(e.target.value)}/>
                        </div>
                        <div>
                            <label htmlFor="crop_image" className="form-label">Crop Image</label>
                            <input type="file" className="form-control file-input" id="crop_image" accept="image/*" onChange={handleFileChange}/>
                        </div>
                        <div>
                            <label htmlFor="crop_season" className="form-label">Crop Season</label>
                            <input className="form-control" list="cropSeasons" placeholder="Select Season" id="crop_season" onChange={(e) => props.setCropSeason(e.target.value)}/>
                            <datalist id="cropSeasons">
                                <option value="Spring"></option>
                                <option value="Summer"></option>
                                <option value="Fall"></option>
                            </datalist>
                        </div>
                        <div>
                            <label htmlFor="crop_category" className="form-label">Crop Category</label>
                            <input className="form-control" list="cropCategories" placeholder="Select Category" id="crop_category" onChange={(e) => props.setCropCategories(e.target.value)}/>
                            <datalist id="cropCategories">
                                <option value="Fruits"></option>
                                <option value="Vegetables"></option>
                                <option value="Grains"></option>
                            </datalist>
                        </div>
                        <div>
                            <label htmlFor="crop_growth_time" className="form-label">Growth Time</label>
                            <input className="form-control" list="cropGrowthTimes" placeholder="Select Growth Time" id="crop_growth_time" onChange={(e) => props.setCropGrowthTime(e.target.value)}/>
                            <datalist id="cropGrowthTimes">
                                <option value="Short-term"></option>
                                <option value="Medium-term"></option>
                                <option value="Long-term"></option>
                            </datalist>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button className="cancel-button" onClick={props.handleCancel}>Cancel</button>
                        <button className="save-button" onClick={props.handleSubmit}>{props.children}</button>
                    </div>
                </div>
            </form>
        </div>
    )
}