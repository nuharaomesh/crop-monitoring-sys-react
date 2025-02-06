import CropForm from "../../components/Crop/CropForm.tsx";
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import React, {useState} from "react";
import {Crop} from "../../models/Crop.ts";
import {add_crop} from "../../reducers/CropSlice.ts";
import generateID from "../../util/GenerateID.ts";

export default function AddCrop() {

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const [cropName, setCropName] = useState('')
    const [cropScientificName, setCropScientificName] = useState('')
    const [cropImage, setCropImage] = useState<string | null>("../../../public/images.png");
    const [cropSeason, setCropSeason] = useState('')
    const [cropCategories, setCropCategories] = useState('')
    const [cropGrowthTime, setCropGrowthTime] = useState('')

    function handleSubmit(event: React.SyntheticEvent) {
        event.preventDefault()
        const genCropCode = generateID("CROP")
        const newCrop = new Crop(genCropCode, cropName, cropScientificName, cropCategories, cropSeason, cropGrowthTime, cropImage)
        dispatch(add_crop({...newCrop}))
        navigate('/crop')
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
                      setCropImage={setCropImage}
                      setCropSeason={setCropSeason}
                      setCropCategories={setCropCategories}
                      setCropGrowthTime={setCropGrowthTime}
            >Save</CropForm>
        </>
    )
}