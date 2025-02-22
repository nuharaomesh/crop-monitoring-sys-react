import FieldForm from "../../components/Field/FieldForm.tsx";
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import React, {useState} from "react";
import FieldModel from "../../models/Field.ts";
import {saveField} from "../../reducers/FieldSlice.ts";
import utility from "../../util/utility.ts";
import { AppDispatch } from "../../store/Store.ts";

export default function AddField() {

    const navigate = useNavigate()
    const dispatch = useDispatch<AppDispatch>()

    const [fieldName, setFieldName] = useState('')
    const [fieldAddress, setFieldAddress] = useState('')
    const [latitude, setLatitude] = useState(0)
    const [longitude, setLongitude] = useState(0)
    const [fieldSize, setFieldSize] = useState('')
    const [fieldImg, setFieldImg] = useState<string | null>("../../../public/images.png")
    const [isCultivated, setIsCultivated] = useState(false)

    function handleSubmit(event: React.SyntheticEvent) {
        event.preventDefault()
        if (!(fieldName === "" || fieldAddress === "" || latitude === 0 || longitude === 0 || fieldSize === "")) {
            const genFieldCode = utility("FIELD")
            const fieldLocation = `${latitude}, ${longitude}`
            const newField = new FieldModel(genFieldCode, fieldName, fieldAddress, fieldLocation.toString(), fieldSize, fieldImg, isCultivated)
            dispatch(saveField({...newField}))
            setTimeout(() => {
                navigate('/field')
            }, 301)
            return true
        }
    }

    function handleCancel(event: React.SyntheticEvent) {
        event.preventDefault()
        navigate('/field')
    }

    return (
        <>
            <FieldForm
                handleCancel={handleCancel}
                handleSubmit={handleSubmit}
                setFieldName={setFieldName}
                setFieldAddress={setFieldAddress}
                setLatitude={setLatitude}
                setLongitude={setLongitude}
                setFieldSize={setFieldSize}
                setFieldImg={setFieldImg}
                title="Add a new Field"
            >Save</FieldForm>
        </>
    )
}