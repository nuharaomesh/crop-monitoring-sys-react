import EquipmentForm from "../../components/Equipment/EquipmentForm.tsx";
import {useNavigate, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import React, {useState} from "react";
import {Equipment} from "../../models/Equipment.ts";
import {delete_equipment, update_equipment} from "../../reducers/EquipmentSlice.ts";

export default function UpdateEquipment() {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { id } = useParams<{id: string}>()

    const currentEquipment = useSelector((state) =>
        state.equipment.find((e: Equipment) => e.equipmentID === id)
    )

    const [equipmentID, setEquipmentID] = useState(currentEquipment.equipmentID)
    const [equipmentName, setEquipmentName] = useState(currentEquipment.name)
    const [type, setType] = useState(currentEquipment.type)
    const [status, setStatus] = useState(currentEquipment.availableStat)
    const [count, setCount] = useState(currentEquipment.count)

    function handleSubmit(event: React.SyntheticEvent) {
        event.preventDefault()
        const updatedEquipment = new Equipment(equipmentID, "", equipmentName, type, status, count)
        dispatch(update_equipment({...updatedEquipment}))
        navigate('/staff')
    }

    function handleDelete(event: React.SyntheticEvent) {
        event.preventDefault()
        dispatch(delete_equipment({...currentEquipment}))
        navigate('/staff')
    }

    function handleCancel(event: React.SyntheticEvent) {
        event.preventDefault()
        navigate('/staff')
    }

    return (
        <>
            <EquipmentForm
                title={"Update your equipment"}
                setEquipment={setEquipmentName}
                setType={setType}
                setStatus={setStatus}
                setCount={setCount}
                handleCancel={handleCancel}
                handleSubmit={handleSubmit}
                handleDelete={handleDelete}
                equipment={currentEquipment}
            >Update</EquipmentForm>
        </>
    )
}