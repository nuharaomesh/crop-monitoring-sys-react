import CropForm from "../../components/Crop/CropForm.tsx";
import {useNavigate, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import React, {useState} from "react";
import CropModel from "../../models/Crop.ts";
import {updateCrop, deleteCrop} from "../../reducers/CropSlice.ts";
import Swal from "sweetalert2";
import { AppDispatch } from "../../store/Store.ts";
import {base64ToFile} from "../../util/GenerateID.ts";

export default function UpdateCrop() {

    const navigate = useNavigate()
    const dispatch = useDispatch<AppDispatch>()
    const { id } = useParams<{id: string}>();

    const currentCrop = useSelector((state) =>
        state.crop.cropList.find((c: CropModel)=> c.cropCode === id)
    )

    const [cropCode, setCropCode] = useState(currentCrop.cropCode)
    const [cropName, setCropName] = useState(currentCrop.cropName)
    const [cropScientificName, setCropScientificName] = useState(currentCrop.cropScientificName)
    const [cropImage, setCropImage] = useState<string | null | object>(base64ToFile(currentCrop.img, "image.jpg", "image/jpeg"));
    const [cropSeason, setCropSeason] = useState(currentCrop.cropSeason)
    const [cropCategories, setCropCategories] = useState(currentCrop.category)
    const [cropGrowthTime, setCropGrowthTime] = useState(currentCrop.cropGrowthTime)
    const [cropPrice, setCropPrice] = useState(currentCrop.price)

    function handleSubmit(event: React.SyntheticEvent) {
        event.preventDefault()
        console.log(typeof base64ToFile(currentCrop.img, "image.jpg", "image/jpeg"))
        if (!(cropName === "" || cropScientificName === "" || cropCategories === "" || cropSeason === "" || cropGrowthTime === "")) {
            const updatedCrop = new CropModel(cropCode, cropName, cropScientificName, cropCategories, cropSeason, cropGrowthTime, cropPrice, cropImage)
            console.log("crop", updatedCrop)
            dispatch(updateCrop({...updatedCrop}))
            setTimeout(() => {
                navigate('/crop')
            }, 301)
            return true
        }
    }

    function handleDelete(event: React.SyntheticEvent) {
        event.preventDefault()
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to undo this!",
            showCancelButton: true,
            confirmButtonColor: "#d33",
            cancelButtonColor: "white",
            confirmButtonText: "Yes, delete it!",
            cancelButtonText: "Cancel",
            width: "600px",
            customClass: {
                popup: "custom-popup",
                icon: "custom-icon",
                title: "custom-title",
                confirmButton: "custom-confirm-btn",
                cancelButton: "custom-cancel-btn"
            }
        }).then((result) => {
            if (result.isConfirmed) {
                dispatch(deleteCrop(currentCrop.cropCode))
                navigate('/crop')
            }
        });
    }

    function handleCancel() {
        navigate('/crop')
    }

    return (
        <>
            <CropForm handleSubmit={handleSubmit}
                      handleCancel={handleCancel}
                      handleDelete={handleDelete}
                      title="Update your Crop"
                      setCropName={setCropName}
                      setCropPrice={setCropPrice}
                      setCropScientificName={setCropScientificName}
                      setCropImage={setCropImage}
                      setCropSeason={setCropSeason}
                      setCropCategories={setCropCategories}
                      setCropGrowthTime={setCropGrowthTime}
                      crop={currentCrop}
            >Update</CropForm>
        </>
    )
}