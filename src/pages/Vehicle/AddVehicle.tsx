import VehicleForm from "../../components/Vehicle/VehicleForm.tsx";
import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import Vehicle from "../../models/Vehicle.ts";
import generateID from "../../util/GenerateID.ts";
import {saveVehicle} from "../../reducers/VehicleSlice.ts";
import { AppDispatch } from "../../store/Store.ts";

export default function AddVehicle() {

    const navigate = useNavigate()
    const dispatch = useDispatch<AppDispatch>()

    const [vehicleType, setVehicleType] = useState('')
    const [fuelType, setFuelType] = useState('')
    const [status, setStatus] = useState('')
    const [licenseNumber, setLicenseNumber] = useState('')
    const [remarks, setRemarks] = useState('')

    function handleSubmit(event: React.SyntheticEvent) {
        event.preventDefault()
        if (!(licenseNumber === "" || vehicleType === "" || fuelType === "" || remarks === "" || status === "")) {
            const genVehicleID = generateID("VEHICLE")
            const newVehicle = new Vehicle(genVehicleID, licenseNumber, vehicleType, fuelType, remarks, status)
            dispatch(saveVehicle({...newVehicle}))
            setTimeout(() => {
                navigate('/staff')
            }, 301)
            return true
        }
    }

    function handleCancel() {
        navigate('/staff')
    }

    return (
        <>
            <VehicleForm
                title={"Add a new vehicle"}
                setVehicleType={setVehicleType}
                setFuelType={setFuelType}
                setVehicleStatus={setStatus}
                setLicense={setLicenseNumber}
                setRemarks={setRemarks}
                handleCancel={handleCancel}
                handleSave={handleSubmit}
            >Save</VehicleForm>
        </>
    )
}