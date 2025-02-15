import StaffForm from "../../components/Staff/StaffForm.tsx";
import React, {useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import Staff from "../../models/Staff.ts";
import {updateStaff, deleteStaff} from "../../reducers/StaffSlice.ts";
import Swal from 'sweetalert2';
import {AppDispatch} from "../../store/Store.ts";

export default function UpdateStaff() {

    const navigate = useNavigate()
    const dispatch = useDispatch<AppDispatch>()
    const { id } = useParams<{id: string}>()

    const currentStaff = useSelector((state) =>
        state.staff.find((s: Staff) => s.staffID === id)
    )

    const [staffID, setStaffID] = useState(currentStaff.staffID)
    const [firstname, setFirstname] = useState(currentStaff.firstname)
    const [lastname, setLastname] = useState(currentStaff.lastname)
    const [gender, setGender] = useState<"male" | "female">(currentStaff.gender)
    const [staffImg, setStaffImg] = useState<string | null>(currentStaff.staffImg)
    const [dob, setDob] = useState(currentStaff.dob)
    const [joinedDate, setJoinedDate] = useState(currentStaff.joinedDate)
    const [address, setAddress] = useState(currentStaff.address)
    const [phone, setPhone] = useState(currentStaff.phone)
    const [email, setEmail] = useState(currentStaff.email)
    const [role, setRole] = useState(currentStaff.role)
    const [status, setStatus] = useState<"Active" | "Not Available" | "Available">("Active")

    function handleSubmit(event: React.SyntheticEvent) {
        event.preventDefault()
        if (!(firstname === "" || lastname === "" || dob === "" || joinedDate === "" || address === "" || phone === 0 || email === "" || role === "" || status === undefined)) {
            const updatedStaff = new Staff(staffID, firstname, lastname, gender, email, role, address, joinedDate, dob, "", String(phone), staffImg, status)
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