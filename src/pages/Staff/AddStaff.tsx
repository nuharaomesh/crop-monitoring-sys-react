import StaffForm from "../../components/Staff/StaffForm.tsx";
import React, {useState} from "react";
import Staff from "../../models/Staff.ts";
import generateID from "../../util/GenerateID.ts";
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {add_staff} from "../../reducers/StaffSlice.ts";

export default function AddStaff() {

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const [firstname, setFirstname] = useState('')
    const [lastname, setLastname] = useState('')
    const [gender, setGender] = useState<"male" | "female">("male")
    const [staffImg, setStaffImg] = useState<string | null>("../../../public/images.png")
    const [dob, setDob] = useState('')
    const [joinedDate, setJoinedDate] = useState('')
    const [address, setAddress] = useState('')
    const [phone, setPhone] = useState(0)
    const [email, setEmail] = useState('')
    const [role, setRole] = useState('')
    const [status, setStatus] = useState<"Active" | "Not Available" | "Available">("Active")

    function handleSubmit(event: React.SyntheticEvent) {
        event.preventDefault()
        if (!(firstname === "" || lastname === "" || dob === "" || joinedDate === "" || address === "" || phone === 0 || email === "" || role === "" || status === undefined)) {
            const genStaffID = generateID("STAFF")
            const newStaff = new Staff(genStaffID, firstname, lastname, gender, email, role, address, joinedDate, dob, "", String(phone), staffImg, status, 10)
            dispatch(add_staff({...newStaff}))
            navigate('/staff')
        }
    }

    function handleCancel(event: React.SyntheticEvent) {
        event.preventDefault()
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
                setJoindeDate={setJoinedDate}
                setAddress={setAddress}
                setPhoneNo={setPhone}
                setEmail={setEmail}
                setStaffRole={setRole}
            >Save</StaffForm>
        </>
    )
}