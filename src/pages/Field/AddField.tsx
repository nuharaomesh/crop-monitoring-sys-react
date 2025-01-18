import FieldForm from "../../components/Field/FieldForm.tsx";
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import React, {useState} from "react";
import {Field} from "../../models/Field.ts";
import {add_field} from "../../reducers/FieldSlice.ts";
import generateID from "../../util/GenerateID.ts";

export default function AddField() {

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const [fieldName, setFieldName] = useState('')
    const [fieldAddress, setFieldAddress] = useState('')
    const [latitude, setLatitude] = useState(0)
    const [longitude, setLongitude] = useState(0)
    const [fieldSize, setFieldSize] = useState('')
    const [fieldImg, setFieldImg] = useState<string | null>(null)
    const [isCultivated, setIsCultivated] = useState(false)

    function handleSubmit(event: React.SyntheticEvent) {
        event.preventDefault()
        const genFieldCode = generateID("FIELD")
        const fieldLocation = `${latitude}, ${longitude}`
        const newField = new Field(genFieldCode, fieldName, fieldAddress, fieldLocation.toString(), fieldSize, fieldImg, isCultivated)
        dispatch(add_field({...newField}))
        navigate('/field')
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