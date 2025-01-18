import React, {useEffect, useState} from "react";
import {MdOutlineDeleteOutline} from "react-icons/md";

export default function CropForm(props) {
    const [isVisible, setIsVisible] = useState(false)
    const [imagePreview, setImagePreview] = useState<string | null>(null)

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0]
        if (file) {
            const previewUrl = URL.createObjectURL(file)
            setImagePreview(previewUrl)
            props.setCropImage(previewUrl)
        }
    };

    const handleOpen = () => {
        setTimeout(() => {
            setIsVisible(true)
        }, 10)
    };

    useEffect(() => {
        handleOpen()
    }, []);

    function handleCancelClick() {
        setIsVisible(false)
        setTimeout(() => {
            if (props.handleCancel) {
                props.handleCancel()
            }
        }, 300);
    }

    return (
        <div className="modal">
            <form className="form-border">
                <div className={`modal-content modal-animation ${
                    isVisible
                        ? 'scale-100 opacity-100'
                        : 'scale-0 opacity-0'
                }`}>
                    <div className="modal-header">
                        <h1 className="modal-title">{props.title}</h1>
                        {props.title.startsWith("Update") ?
                            <button type="button" className="delete-button" onClick={props.handleDelete}><MdOutlineDeleteOutline size={20}/></button>
                            :
                            ""
                        }
                    </div>

                    <div className="modal-body">
                        <div className="flex justify-center">
                            {imagePreview ? (
                                <img src={imagePreview} alt="Crop Preview" className="item-image"/>
                            ) : (
                                <img src={props.title?.startsWith("Update") ? props.crop.cropImg : "../../../public/images.png"} alt="Crop Image" className="item-image"
                                />
                            )}
                        </div>
                        <div>
                            <label htmlFor="crop_name" className="form-label">Crop Name</label>
                            <input type="text" className="form-control" id="crop_name"
                                   placeholder="Enter crop name"
                                   onChange={(e) => props.setCropName(e.target.value)}
                                   defaultValue={props.title?.startsWith("Update") ? props.crop.cropName : props.cropName}
                            />
                        </div>
                        <div>
                            <label htmlFor="crop_scientific_name" className="form-label">Scientific Name</label>
                            <input type="text" className="form-control" id="crop_scientific_name"
                                   defaultValue={props.title?.startsWith("Update") ? props.crop.cropScientificName : props.cropScientificName}
                                   placeholder="Scientific name"
                                   onChange={(e) => props.setCropScientificName(e.target.value)}/>
                        </div>
                        <div>
                            <label htmlFor="crop_image" className="form-label">Crop Image</label>
                            <input type="file" className="form-control file-input" id="crop_image" accept="image/*"
                                   onChange={handleFileChange}/>
                        </div>
                        <div>
                            <label htmlFor="crop_season" className="form-label">Crop Season</label>
                            <input className="form-control" list="cropSeasons" placeholder="Select Season" id="crop_season"
                                   defaultValue={props.title?.startsWith("Update") ? props.crop.cropSeason : props.cropSeason}
                                   onChange={(e) => props.setCropSeason(e.target.value)}/>
                            <datalist id="cropSeasons">
                                <option value="Spring"></option>
                                <option value="Summer"></option>
                                <option value="Fall"></option>
                            </datalist>
                        </div>
                        <div>
                            <label htmlFor="crop_category" className="form-label">Crop Category</label>
                            <input className="form-control" list="cropCategories" placeholder="Select Category" id="crop_category"
                                   defaultValue={props.title?.startsWith("Update") ? props.crop.category : props.category}
                                   onChange={(e) => props.setCropCategories(e.target.value)}/>
                            <datalist id="cropCategories">
                                <option value="Fruits"></option>
                                <option value="Vegetables"></option>
                                <option value="Grains"></option>
                            </datalist>
                        </div>
                        <div>
                            <label htmlFor="crop_growth_time" className="form-label">Growth Time</label>
                            <input className="form-control" list="cropGrowthTimes" placeholder="Select Growth Time" id="crop_growth_time"
                                   defaultValue={props.title?.startsWith("Update") ? props.crop.cropGrowthTime : props.cropGrowthTime}
                                   onChange={(e) => props.setCropGrowthTime(e.target.value)}/>
                            <datalist id="cropGrowthTimes">
                                <option value="Short-term"></option>
                                <option value="Medium-term"></option>
                                <option value="Long-term"></option>
                            </datalist>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="cancel-button" onClick={handleCancelClick}>Cancel</button>
                        <button type="button" className="save-button" onClick={props.handleSubmit}>{props.children}</button>
                    </div>
                </div>
            </form>
        </div>
    )
}