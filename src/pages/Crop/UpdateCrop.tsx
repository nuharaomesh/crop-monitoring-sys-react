import CropForm from "../../components/Crop/CropForm.tsx";
import {useNavigate, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import React, {useState} from "react";
import {Crop} from "../../models/Crop.ts";
import { update_crop } from "../../reducers/CropSlice.ts";

export default function UpdateCrop() {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { id } = useParams<{id: string}>();

    const currentCrop = useSelector((state) =>
        state.crop.find((c: Crop)=> c.cropCode === id)
    )

    const [cropCode, setCropCode] = useState(currentCrop.cropCode)
    const [cropName, setCropName] = useState(currentCrop.cropName)
    const [cropScientificName, setCropScientificName] = useState(currentCrop.cropScientificName)
    const [cropImage, setCropImage] = useState<string | null>(currentCrop.cropImg);
    const [cropSeason, setCropSeason] = useState(currentCrop.cropSeason)
    const [cropCategories, setCropCategories] = useState(currentCrop.category)
    const [cropGrowthTime, setCropGrowthTime] = useState(currentCrop.cropGrowthTime)

    function handleSubmit(event: React.SyntheticEvent) {
        event.preventDefault()
        const updatedCrop = new Crop(cropCode, cropName, cropScientificName, cropCategories, cropSeason, cropGrowthTime, cropImage)
        dispatch(update_crop({...updatedCrop}))
        navigate('/crop')
    }

    function handleCancel(event: React.SyntheticEvent) {
        event.preventDefault()
        navigate('/crop')
    }

    return (
        <>
            <CropForm handleSubmit={handleSubmit}
                      handleCancel={handleCancel}
                      title="Update your Crop"
                      setCropName={setCropName}
                      setCropScientificName={setCropScientificName}
                      setCropImage={setCropImage}
                      setCropSeason={setCropSeason}
                      setCropCategories={setCropCategories}
                      setCropGrowthTime={setCropGrowthTime}
                      crop={currentCrop}
            >Update crop</CropForm>
        </>
    )
}