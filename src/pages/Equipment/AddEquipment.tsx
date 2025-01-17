import EquipmentForm from "../../components/Equipment/EquipmentForm.tsx";
import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import generateID from "../../util/GenerateID.ts";
import {Equipment} from "../../models/Equipment.ts";
import {add_equipment} from "../../reducers/EquipmentSlice.ts";

export default function AddEquipment() {

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const [equipmentName, setEquipmentName] = useState('')
    const [type, setType] = useState('')
    const [status, setStatus] = useState('')
    const [count, setCount] = useState(0)

    function handleSubmit(event: React.SyntheticEvent) {
        event.preventDefault()
        const genEquipmentID = generateID("EQUIPMENT")
        const newEquipment = new Equipment(genEquipmentID, "", equipmentName, type, status, count)
        dispatch(add_equipment({...newEquipment}))
        navigate('/staff')
    }

    function handleCancel(event: React.SyntheticEvent) {
        event.preventDefault()
        navigate('/staff')
    }

    return (
        <>
            <EquipmentForm
                title={"Add your new equipment"}
                setEquipment={setEquipmentName}
                setType={setType}
                setStatus={setStatus}
                setCount={setCount}
                handleCancel={handleCancel}
                handleSubmit={handleSubmit}
            >Save</EquipmentForm>
        </>
    )
}