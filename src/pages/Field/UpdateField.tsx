import FieldForm from "../../components/Field/FieldForm.tsx";
import {useNavigate, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import React, {useEffect, useState} from "react";
import FieldModel from "../../models/Field.ts";
import {updateField, deleteField} from "../../reducers/FieldSlice.ts";
import { AppDispatch } from "../../store/Store.ts";
import { base64ToFile } from "../../util/GenerateID.ts";
import Swal from "sweetalert2";

export default function UpdateField() {
    const navigate = useNavigate()
    const dispatch = useDispatch<AppDispatch>()
    const { id } = useParams<{id: string}>();

    const currentField = useSelector((state) =>
        state.field.fieldList.find((f: FieldModel)=> f.fieldCode === id)
    )

    const [currentLatitude, currentLongitude] = currentField.fieldLocation.split(',').map(coord => parseFloat(coord.trim()));

    const [fieldCode, setFieldCode] = useState(currentField.fieldCode)
    const [fieldName, setFieldName] = useState(currentField.fieldName)
    const [fieldAddress, setFieldAddress] = useState(currentField.fieldAddress)
    const [latitude, setLatitude] = useState(currentLatitude)
    const [longitude, setLongitude] = useState(currentLongitude)
    const [fieldSize, setFieldSize] = useState(currentField.fieldSize)
    const [fieldImg, setFieldImg] = useState<string | null>(currentField.fieldImg)
    const [isCultivated, setIsCultivated] = useState(currentField.isCultivated)

    useEffect(() => {
        if (currentField.img) {
            const file = base64ToFile(currentField.img, "image.jpg", "image/jpeg");
            setFieldImg(file)
        }
    }, [currentField.img]);

    function handleSubmit(event: React.SyntheticEvent) {
        event.preventDefault()
        if (!(fieldName === "" || fieldAddress === "" || latitude === "" || longitude === "" || fieldSize === "")) {
            const fieldLocation = `${latitude}, ${longitude}`
            const newField = new FieldModel(fieldCode, fieldName, fieldAddress, fieldLocation.toString(), fieldSize, fieldImg, isCultivated)
            dispatch(updateField({...newField}))
            setTimeout(() => {
                navigate('/field')
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
                dispatch(deleteField(currentField.fieldCode))
                navigate('/field')
            }
        });
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