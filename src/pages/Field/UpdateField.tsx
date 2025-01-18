import FieldForm from "../../components/Field/FieldForm.tsx";
import {useNavigate, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import React, {useState} from "react";
import {Field} from "../../models/Field.ts";
import {delete_field, update_field} from "../../reducers/FieldSlice.ts";

export default function UpdateField() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { id } = useParams<{id: string}>();

    const currentField = useSelector((state) =>
        state.field.find((f: Field)=> f.fieldCode === id)
    )

    const [currentLatitude, currentLongitude] = currentField.fieldLocation.split(',').map(coord => parseFloat(coord.trim()));

    const [fieldCode, setFieldCode] = useState(currentField.fieldCode)
    const [fieldName, setFieldName] = useState(currentField.fieldName)
    const [fieldAddress, setFieldAddress] = useState(currentField.fieldSize)
    const [latitude, setLatitude] = useState(currentLatitude)
    const [longitude, setLongitude] = useState(currentLongitude)
    const [fieldSize, setFieldSize] = useState(currentField.fieldSize)
    const [fieldImg, setFieldImg] = useState<string | null>(currentField.fieldImg)
    const [isCultivated, setIsCultivated] = useState(currentField.isCultivated)

    function handleSubmit(event: React.SyntheticEvent) {
        event.preventDefault()
        const fieldLocation = `${latitude}, ${longitude}`
        const newField = new Field(fieldCode, fieldName, fieldAddress, fieldLocation.toString(), fieldSize, fieldImg, isCultivated)
        dispatch(update_field({...newField}))
        navigate('/field')
    }

    function handleDelete(event: React.SyntheticEvent) {
        event.preventDefault()
        dispatch(delete_field({...currentField}))
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
                handleDelete={handleDelete}
                setFieldName={setFieldName}
                setFieldAddress={setFieldAddress}
                setLatitude={setLatitude}
                setLongitude={setLongitude}
                setFieldSize={setFieldSize}
                setFieldImg={setFieldImg}
                currentLat={currentLatitude}
                currentLng={currentLongitude}
                field={currentField}
                title="Update a new Field"
            >Update</FieldForm>
        </>
    )
}