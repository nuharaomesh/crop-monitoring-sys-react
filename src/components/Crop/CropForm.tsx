import React, {useEffect, useState} from "react";
import {MdOutlineDeleteOutline} from "react-icons/md";
import {useForm} from "react-hook-form";
import * as Yup from "yup";
import {yupResolver} from "@hookform/resolvers/yup";
import {TiWarning} from "react-icons/ti";

const validationSchema = Yup.object({
    crop_name: Yup.string().required("Crop name is required"),
    crop_scientific_name: Yup.string().required("Crop scientific name is required"),
    crop_season: Yup.string().required("Crop season is required"),
    crop_category: Yup.string().required("Crop category is required"),
    crop_growth_time: Yup.string().required("Crop growth time is required"),
    crop_price: Yup.number().required("Crop price is required"),
});

export default function CropForm(props) {
    const [isVisible, setIsVisible] = useState(false)
    const [imagePreview, setImagePreview] = useState<string | null>(null)
    const [existImg, setExistImg] = useState("")
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(validationSchema),
    });
    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0]
        if (file) {
            const previewUrl = URL.createObjectURL(file)
            setImagePreview(previewUrl)
            console.log(typeof file)
            props.setCropImage(file)
        }
    };
    useEffect(() => {
        if (props.title.startsWith("Update"))
            setExistImg(`data:image/jpeg;base64,${props.crop.img}`)
    }, [])
    useEffect(() => {
        setTimeout(() => {
            setIsVisible(true)
        }, 10)
    }, []);

    function handleCancelClick() {
        setIsVisible(false)
        setTimeout(() => {
            if (props.handleCancel) {
                props.handleCancel()
            }
        }, 300);
    }

    const onsubmit = () => console.log()
    function handleSubmitClick(e) {
        setTimeout(() => {
            if (props.handleCancel) {
                handleSubmit(onsubmit)()
                if (props.handleSubmit(e)) {
                    setIsVisible(false)
                }
            }
        }, 300);
    }

    return (
        <div className="modal">
            <form className="form-border" onSubmit={handleSubmit(onsubmit)}>
                <div className={`modal-content modal-animation ${
                    isVisible
                        ? 'scale-100 opacity-100'
                        : 'scale-0 opacity-0'
                }`}>
                    <div className="modal-header">
                        <h1 className="modal-title">{props.title}</h1>
                        {props.title.startsWith("Update") &&
                            <button type="button" className="delete-button" onClick={props.handleDelete}><MdOutlineDeleteOutline size={20}/></button>
                        }
                    </div>

                    <div className="modal-body">
                        <div className="flex justify-center">
                            {imagePreview ? (
                                <img src={imagePreview} alt="Crop Preview" className="item-image"/>
                            ) : (
                                <img src={props.title?.startsWith("Update") ? existImg : "../../../public/images.png"}
                                     alt="Crop Image" className="item-image"
                                />
                            )}
                        </div>
                        <div>
                            <label htmlFor="crop_name" className="form-label">Crop Name</label>
                            <input type="text" className="form-control" id="crop_name"
                                   placeholder="Enter crop name"
                                   {...register("crop_name")}
                                   onChange={(e) => props.setCropName(e.target.value)}
                                   defaultValue={props.title?.startsWith("Update") ? props.crop.cropName : props.cropName}
                            />
                            {errors.crop_name?.message &&
                                <p className="form-error">{errors.crop_name?.message} <TiWarning color="red"/></p>}
                        </div>
                        <div>
                            <label htmlFor="crop_scientific_name" className="form-label">Scientific Name</label>
                            <input type="text" className="form-control" id="crop_scientific_name"
                                   {...register("crop_scientific_name")}
                                   placeholder="Scientific name"
                                   defaultValue={props.title?.startsWith("Update") ? props.crop.cropScientificName : props.cropScientificName}
                                   onChange={(e) => props.setCropScientificName(e.target.value)}/>
                            {errors.crop_scientific_name?.message &&
                                <p className="form-error">{errors.crop_scientific_name?.message} <TiWarning
                                    color="red"/></p>}
                        </div>
                        <div>
                            <label htmlFor="crop_image" className="form-label">Crop Image</label>
                            <input type="file" className="form-control file-input" id="crop_image" accept="image/*"
                                   onChange={handleFileChange}/>
                        </div>
                        <div>
                            <label htmlFor="crop_season" className="form-label">Crop Season</label>
                            <input className="form-control" list="cropSeasons" placeholder="Select Season"
                                   id="crop_season"
                                   {...register("crop_season")}
                                   defaultValue={props.title?.startsWith("Update") ? props.crop.cropSeason : props.cropSeason}
                                   onChange={(e) => props.setCropSeason(e.target.value)}/>
                            <datalist id="cropSeasons">
                                <option value="FALL">Fall</option>
                                <option value="WINTER">Winter</option>
                                <option value="SPRING">Spring</option>
                                <option value="SUMMER">Summer</option>
                            </datalist>
                            {errors.crop_season?.message &&
                                <p className="form-error">{errors.crop_season?.message} <TiWarning color="red"/></p>}
                        </div>
                        <div>
                            <label htmlFor="crop_category" className="form-label">Crop Category</label>
                            <input className="form-control" list="cropCategories" placeholder="Select Category"
                                   id="crop_category"
                                   {...register("crop_category")}
                                   defaultValue={props.title?.startsWith("Update") ? props.crop.category : props.category}
                                   onChange={(e) => props.setCropCategories(e.target.value)}/>
                            <datalist id="cropCategories">
                                <option value="Fruits"></option>
                                <option value="Vegetables"></option>
                                <option value="Grains"></option>
                            </datalist>
                            {errors.crop_category?.message &&
                                <p className="form-error">{errors.crop_category?.message} <TiWarning color="red"/></p>}
                        </div>
                        <div>
                            <label htmlFor="crop_price" className="form-label">Crop Price</label>
                            <input className="form-control" placeholder="Add a price"
                                   id="crop_price"
                                   {...register("crop_price")}
                                   defaultValue={props.title?.startsWith("Update") ? props.crop.price : props.price}
                                   onChange={(e) => props.setCropPrice(e.target.value)}/>
                            {errors.crop_price?.message &&
                                <p className="form-error">{errors.crop_price?.message} <TiWarning color="red"/></p>}
                        </div>
                        <div>
                            <label htmlFor="crop_growth_time" className="form-label">Growth Time</label>
                            <input className="form-control" list="cropGrowthTimes" placeholder="Select Growth Time"
                                   id="crop_growth_time"
                                   {...register("crop_growth_time")}
                                   defaultValue={props.title?.startsWith("Update") ? props.crop.cropGrowthTime : props.cropGrowthTime}
                                   onChange={(e) => props.setCropGrowthTime(e.target.value)}/>
                            <datalist id="cropGrowthTimes">
                                <option value="SHORT_TERM">Short-term</option>
                                <option value="LONG_TERM">Long-term</option>
                            </datalist>
                            {errors.crop_growth_time?.message &&
                                <p className="form-error">{errors.crop_growth_time?.message} <TiWarning color="red"/>
                                </p>}
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="cancel-button" onClick={handleCancelClick}>Cancel</button>
                        <button type="button" className="save-button"
                                onClick={handleSubmitClick}>{props.children}</button>
                    </div>
                </div>
            </form>
        </div>
    )
}