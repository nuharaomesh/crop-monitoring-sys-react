import React, {useEffect, useState} from "react";
import FieldMap from "../FieldMap.tsx";
import {MdOutlineDeleteOutline} from "react-icons/md";
import * as Yup from "yup";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {TiWarning} from "react-icons/ti";

const validationSchema = Yup.object({
    field_name: Yup.string().required("Field name is required"),
    field_size: Yup.string().required("Field size is required"),
});

export default function FieldForm(props) {

    const [isVisible, setIsVisible] = useState(false)
    const [existImg, setExistImg] = useState("")
    useEffect(() => {
        setTimeout(() => {
            setIsVisible(true)
        }, 10)
    }, []);

    const [lat, setLat] = useState(props.title.startsWith("Update") ? props.currentLat : 6.6755701454919105);
    const [lng, setLng] = useState(props.title.startsWith("Update") ? props.currentLng : 80.16122817993165);

    const handleLocationChange = (newLat: number, newLng: number, address: string) => {
        console.log(address)
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
            props.setFieldImg(file)
            console.log("file",file);
        }
    };

    function handleCancelClick(e) {
        setIsVisible(false)
        setTimeout(() => {
            if (props.handleCancel) {
                props.handleCancel(e)
            }
        }, 300);
    }

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(validationSchema),
    });
    const onSubmit = () => console.log();

    function handleInnerSubmit(e) {
        setTimeout(() => {
            if (props.handleSubmit) {
                handleSubmit(onSubmit)()
                if (props.handleSubmit(e)) {
                    setIsVisible(false)
                }
            }
        }, 300);
    }

    useEffect(() => {
        if (props.title.startsWith("Update")) {
            setExistImg(`data:image/jpeg;base64,${props.field.img}`)
        }
    }, [])

    return (
        <div className="modal">
            <form onSubmit={handleSubmit(onSubmit)} className="form-border">
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
                                <img src={imagePreview} alt="Added Field" className="item-image"/>
                            ) : (
                                <img src={props.title?.startsWith("Update") ? existImg : "../../../public/images.png"} alt="Added Field" id="addedFieldImg" className="item-image"/>
                            )}
                        </div>
                        <div>
                            <div className="form-group">
                            <label htmlFor="field_name" className="form-label">Field name</label>
                                <input type="text" id="field_name" className="form-control"
                                       placeholder="Enter your field name"
                                       {...register("field_name")}
                                       onChange={(e) => props.setFieldName(e.target.value)}
                                       defaultValue={props.title?.startsWith("Update") ? props.field.fieldName : props.fieldName}
                                />
                                {errors.field_name?.message && <p className="form-error">{errors.field_name?.message} <TiWarning color="red" /></p>}
                            </div>
                            <div className="form-group">
                                <label htmlFor="field_image" className="form-label">Choose field image</label>
                                <input type="file" id="field_image" className="form-control file-input" onChange={handleFileChange}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="field_size" className="form-label">Field size</label>
                                <input type="text" id="field_size" className="form-control"
                                       placeholder="Size of field"
                                       {...register("field_size")}
                                       onChange={(e) => props.setFieldSize(e.target.value)}
                                       defaultValue={props.title?.startsWith("Update") ? props.field.fieldSize : props.fieldSize}
                                />
                                {errors.field_size?.message && <p className="form-error">{errors.field_size?.message} <TiWarning color="red" /></p>}
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
                        <button onClick={handleCancelClick} className="cancel-button">Cancel</button>
                        <button onClick={handleInnerSubmit} className="save-button">{props.children}</button>
                    </div>
                </div>
            </form>
        </div>
    )
}