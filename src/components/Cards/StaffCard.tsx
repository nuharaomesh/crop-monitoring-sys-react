import {Link} from "react-router-dom";
import {BsFillPenFill} from "react-icons/bs";
import {FaDeleteLeft} from "react-icons/fa6";
import {BiSolidMessageSquareAdd} from "react-icons/bi";
import { useEffect, useState } from "react";

export default function StaffCard(props) {

    let content
    const [preImg, setPreImg] = useState(`data:image/jpeg;base64,${props.img}`)

    function assignStaff() {
        props.setStaffID(props.staffID)
    }

    function removeStaff() {
        props.removeStaff(props.staffID)
    }

    useEffect(() => {
        setPreImg(`data:image/jpeg;base64,${props.img}`)
    }, [])

    if (props.assignable) {
        content = <button type="button" className="staff-add-btn" onClick={assignStaff}><BiSolidMessageSquareAdd size="16" color="white"/></button>
    } else if (props.removeble) {
        content = <button type="button" className="remove-btn" onClick={removeStaff}><FaDeleteLeft size="16" color="white"/></button>
    } else {
        content = <Link to={`/staff/updateStaff/${props.staffID}`}
                        className="flex w-11 h-11 rounded-full bg-green-500 text-white text-sm py-2 px-4 shadow hover:bg-green-600 justify-center items-center">
                        <BsFillPenFill color="white" size="18" />
                    </Link>
    }

    return (
        <div className="staff-card relative group">
            <div className="staff-card-img w-12 h-12 flex-shrink-0 rounded-full overflow-hidden">
                <img
                    src={preImg}
                    alt="Staff img"
                    className="w-full h-full object-cover"
                />
            </div>
            <div className="flex flex-1 justify-between items-center">
                <div className="staff-card-name w-1/5">
                    <h1 className="text-sm font-semibold text-gray-800 truncate">{props.name}</h1>
                </div>
                <div className="staff-card-role w-1/5">
                    <h1 className="text-sm text-gray-500 truncate">{props.role}</h1>
                </div>
                <div className="staff-card-status w-1/5">
                    <h1 className="text-sm text-green-500 truncate">{props.stat}</h1>
                </div>
                <div className="staff-card-phone w-1/5">
                    <h1 className="text-sm text-gray-500 truncate">{props.phone}</h1>
                </div>
                <div className="staff-card-email w-1/5">
                    <h1 className="text-sm text-gray-500 truncate">{props.email}</h1>
                </div>
            </div>
            <div
                className="absolute right-4 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-300">
                {content}
            </div>
        </div>
    )
}