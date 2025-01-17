import VehicleForm from "../../components/Vehicle/VehicleForm.tsx";
import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {Vehicle} from "../../models/Vehicle.ts";
import generateID from "../../util/GenerateID.ts";
import {add_vehicle} from "../../reducers/VehicleSlice.ts";

export default function AddVehicle() {

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const [vehicleType, setVehicleType] = useState('')
    const [fuelType, setFuelType] = useState('')
    const [status, setStatus] = useState('')
    const [licenceNumber, setLicenceNumber] = useState('')
    const [remarks, setRemarks] = useState('')

    function handleSubmit(event: React.SyntheticEvent) {
        event.preventDefault()
        const genVehicleID = generateID("VEHICLE")
        const newVehicle = new Vehicle(genVehicleID, licenceNumber, vehicleType, fuelType, remarks, status)
        dispatch(add_vehicle({...newVehicle}))
        navigate('/staff')
    }

    function handleCancel(event: React.SyntheticEvent) {
        event.preventDefault()
        navigate('/staff')
    }

    return (
        <>
            <VehicleForm
                title={"Add a new vehicle"}
                setVehicleType={setVehicleType}
                setFuelType={setFuelType}
                setVehicleStatus={setStatus}
                setLicence={setLicenceNumber}
                setRemarks={setRemarks}
                handleCancel={handleCancel}
                handleSubmit={handleSubmit}
            >Save</VehicleForm>
        </>
    )
}