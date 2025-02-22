import StaffForm from "../../components/Staff/StaffForm.tsx";
import React, {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import Staff from "../../models/Staff.ts";
import {updateStaff, deleteStaff} from "../../reducers/StaffSlice.ts";
import Swal from 'sweetalert2';
import {AppDispatch} from "../../store/Store.ts";
import { base64ToFile } from "../../util/utility.ts";

export default function UpdateStaff() {

    const navigate = useNavigate()
    const dispatch = useDispatch<AppDispatch>()
    const { id } = useParams<{id: string}>()

    const currentStaff = useSelector((state) =>
        state.staff.staffList.find((s: Staff) => s.staffID === id)
    )
    const [staffID, setStaffID] = useState(currentStaff.staffID)
    const [firstname, setFirstname] = useState("")
    const [lastname, setLastname] = useState("")
    useEffect(() => {
        const [newFirstname, newLastname] = currentStaff.name.split(" ")
        setFirstname(newFirstname)
        setLastname(newLastname)
    }, [])
    const [gender, setGender] = useState<"male" | "female">(currentStaff.gender)
    const [staffImg, setStaffImg] = useState<string | null | object>(base64ToFile(currentStaff.img, "image.jpg", "image/jpeg"))
    const [dob, setDob] = useState(currentStaff.dob)
    const [joinedDate, setJoinedDate] = useState(currentStaff.joinedDate)
    const [address, setAddress] = useState(currentStaff.address)
    const [phone, setPhone] = useState(currentStaff.phone)
    const [email, setEmail] = useState(currentStaff.email)
    const [role, setRole] = useState(currentStaff.role)
    const [status, setStatus] = useState<"ACTIVE" | "NOT_AVAILABLE" | "AVAILABLE">("ACTIVE")

    function handleSubmit(event: React.SyntheticEvent) {
        event.preventDefault()
        if (!(firstname === "" || lastname === "" || dob === "" || joinedDate === "" || address === "" || phone === 0 || email === "" || role === "")) {
            const name = firstname + " " + lastname
            const updatedStaff = new Staff(staffID, name, gender, email, role, address, joinedDate, dob, "", phone, staffImg, status)
            dispatch(updateStaff({...updatedStaff}))
            setTimeout(() => {
                navigate('/staff')
            }, 301)
            return true
        }
    }

    function handleDelete(event) {
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
                dispatch(deleteStaff(currentStaff.staffID));
                navigate('/staff');
            }
        });
    }

    function handleCancel() {
        navigate('/staff')
    }

    return (
        <>
            <StaffForm
                title={"Update your staff member"}
                handleSubmit={handleSubmit}
                handleCancel={handleCancel}
                setFirstname={setFirstname}
                setLastname={setLastname}
                setSelectedFieldType={setGender}
                setStaffImage={setStaffImg}
                setDob={setDob}
                setJoinedDate={setJoinedDate}
                setAddress={setAddress}
                setPhoneNo={setPhone}
                setEmail={setEmail}
                setStaffRole={setRole}
                staff={currentStaff}
                handleDelete={handleDelete}
            >Update</StaffForm>
        </>
    )
}