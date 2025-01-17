import StaffForm from "../../components/Staff/StaffForm.tsx";
import React, {useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {Staff} from "../../models/Staff.ts";
import {delete_staff, update_staff} from "../../reducers/StaffSlice.ts";

export default function UpdateStaff() {

    const navigate = useNavigate()
    const dispatch = useDispatch()
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
        const updatedStaff = new Staff(staffID, firstname, lastname, gender, email, role, address, joinedDate, dob, "", String(phone), staffImg, status)
        dispatch(update_staff({...updatedStaff}))
        navigate('/staff')
    }

    function handleDelete(event) {
        event.preventDefault()
        dispatch(delete_staff({...currentStaff}))
        navigate('/staff')
    }

    function handleCancel(event: React.SyntheticEvent) {
        event.preventDefault()
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
                setJoindeDate={setJoinedDate}
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