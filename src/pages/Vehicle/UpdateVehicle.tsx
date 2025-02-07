import VehicleForm from "../../components/Vehicle/VehicleForm.tsx";
import {useNavigate, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import React, {useState} from "react";
import Vehicle from "../../models/Vehicle.ts";
import {delete_vehicle, update_vehicle} from "../../reducers/VehicleSlice.ts";
import Swal from "sweetalert2";

export default function UpdateVehicle() {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { id } = useParams<{id: string}>()

    const currentVehicle = useSelector((state) =>
        state.vehicle.find((v: Vehicle) => v.vehicleID === id)
    )

    const [vehicleCode, setVehicleCode] = useState(currentVehicle?.vehicleID)
    const [vehicleType, setVehicleType] = useState(currentVehicle?.category)
    const [fuelType, setFuelType] = useState(currentVehicle?.fuelType)
    const [status, setStatus] = useState(currentVehicle?.status)
    const [licenceNumber, setLicenceNumber] = useState(currentVehicle?.licencePlate)
    const [remarks, setRemarks] = useState(currentVehicle?.remarks)

    function handleSubmit(event: React.SyntheticEvent) {
        event.preventDefault()
        if (!(licenceNumber === "" || vehicleType === "" || fuelType === "" || remarks === "" || status === "")) {
            const updatedVehicle = new Vehicle(vehicleCode, licenceNumber, vehicleType, fuelType, remarks, status, 10)
            dispatch(update_vehicle({...updatedVehicle}))
            navigate('/staff')
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
                dispatch(delete_vehicle({...currentVehicle}))
                navigate('/staff')
            }
        });
    }

    function handleCancel() {
        navigate('/staff')
    }

    return (
        <>
            <VehicleForm
                title={"Update the vehicle"}
                setVehicleType={setVehicleType}
                setFuelType={setFuelType}
                setVehicleStatus={setStatus}
                setLicence={setLicenceNumber}
                setRemarks={setRemarks}
                handleCancel={handleCancel}
                handleSave={handleSubmit}
                handleDelete={handleDelete}
                vehicle={currentVehicle}
            >Update</VehicleForm>
        </>
    )
}