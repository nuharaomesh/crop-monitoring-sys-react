import CropForm from "../../components/Crop/CropForm.tsx";
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import React, {useState} from "react";
import CropModel from "../../models/Crop.ts";
import {saveCrop} from "../../reducers/CropSlice.ts";
import generateID from "../../util/GenerateID.ts";
import { AppDispatch } from "../../store/Store.ts";

export default function AddCrop() {

    const navigate = useNavigate()
    const dispatch = useDispatch<AppDispatch>()

    const [cropName, setCropName] = useState('')
    const [cropScientificName, setCropScientificName] = useState('')
    const [cropImage, setCropImage] = useState<string | null>("../../../public/images.png");
    const [cropSeason, setCropSeason] = useState('')
    const [cropCategories, setCropCategories] = useState('')
    const [cropPrice, setCropPrice] = useState(0)
    const [cropGrowthTime, setCropGrowthTime] = useState('')

    function handleSubmit(event: React.SyntheticEvent) {
        event.preventDefault()
        if (!(cropName === "" || cropScientificName === "" || cropCategories === "" || cropSeason === "" || cropGrowthTime === "")) {
            const genCropCode = generateID("CROP")
            const newCrop = new CropModel(genCropCode, cropName, cropScientificName, cropCategories, cropSeason, cropGrowthTime, cropPrice, cropImage)
            dispatch(saveCrop({...newCrop}))
            setTimeout(() => {
                navigate('/crop')
            }, 301)
            return true
        }
    }

    function handleCancel() {
        navigate('/crop')
    }

    return (
        <>
            <CropForm handleSubmit={handleSubmit}
                      handleCancel={handleCancel}
                      title="Add your new Crop"
                      setCropName={setCropName}
                      setCropScientificName={setCropScientificName}
                      setCropPrice={setCropPrice}
                      setCropImage={setCropImage}
                      setCropSeason={setCropSeason}
                      setCropCategories={setCropCategories}
                      setCropGrowthTime={setCropGrowthTime}
            >Save</CropForm>
        </>
    )
}