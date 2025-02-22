import StaffForm from "../../components/Staff/StaffForm.tsx";
import React, {useState} from "react";
import Staff from "../../models/Staff.ts";
import generateID from "../../util/GenerateID.ts";
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {saveStaff} from "../../reducers/StaffSlice.ts";
import {AppDispatch} from "../../store/Store.ts";

export default function AddStaff() {

    const navigate = useNavigate()
    const dispatch = useDispatch<AppDispatch>()

    const [firstname, setFirstname] = useState('')
    const [lastname, setLastname] = useState('')
    const [gender, setGender] = useState<"MALE" | "FEMALE">("MALE")
    const [staffImg, setStaffImg] = useState<string | null>("../../../public/images.png")
    const [dob, setDob] = useState('')
    const [joinedDate, setJoinedDate] = useState('')
    const [address, setAddress] = useState('')
    const [phone, setPhone] = useState("")
    const [email, setEmail] = useState('')
    const [role, setRole] = useState('')
    const [status, setStatus] = useState<"ACTIVE" | "Not NOT_AVAILABLE" | "AVAILABLE">("ACTIVE")

    function handleSubmit(event: React.SyntheticEvent) {
        event.preventDefault()
        if (!(firstname === "" || lastname === "" || dob === "" || joinedDate === "" || address === "" || phone === "" || email === "" || role === "")) {
            const genStaffID = generateID("STAFF")
            const newStaff = new Staff(genStaffID, `${firstname + " " + lastname}`, gender, email, role, address, joinedDate, dob, "ACTIVE", Number(phone), staffImg, status)
            dispatch(saveStaff({...newStaff}))
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
            <StaffForm
                title={"Add a new Staff member"}
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
            >Save</StaffForm>
        </>
    )
}