import CropForm from "../../components/Crop/CropForm.tsx";
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import React, {useState} from "react";
import {Crop} from "../../models/Crop.ts";
import {add_crop} from "../../reducers/CropSlice.ts";

export default function AddCrop() {

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const [cropCode, setCropCode] = useState('')
    const [cropName, setCropName] = useState('')
    const [cropScientificName, setCropScientificName] = useState('')
    const [cropImage, setCropImage] = useState<string | null>(null);
    const [cropSeason, setCropSeason] = useState('')
    const [cropCategories, setCropCategories] = useState('')
    const [cropGrowthTime, setCropGrowthTime] = useState('')

    function handleSubmit(event: React.SyntheticEvent) {
        event.preventDefault()
        setCropCode(`${Date.now()}-${Math.random().toString(36).substr(2, 9)}`)
        console.log(cropCode)
        const newCrop = new Crop(cropCode, cropName, cropScientificName, cropCategories, cropSeason, cropGrowthTime, cropImage)
        dispatch(add_crop({...newCrop}))
        navigate('/crop')
    }

    function handleCancel() {
        navigate('/crop')
    }

    return (
        <>
            <CropForm handleSubmit={handleSubmit}
                      handleCancle={handleCancel}
                      title="Add your new Crop"
                      setCropName={setCropName}
                      setCropScientificName={setCropScientificName}
                      setCropImage={setCropImage}
                      setCropSeason={setCropSeason}
                      setCropCategories={setCropCategories}
                      setCropGrowthTime={setCropGrowthTime}
            >Save crop</CropForm>
        </>
    )
}