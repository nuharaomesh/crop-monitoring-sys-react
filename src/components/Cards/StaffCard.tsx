import {Link} from "react-router-dom";
import {BsFillPenFill} from "react-icons/bs";

export default function StaffCard(props) {
    return (
        <>
            <div className="staff-card relative group">
                <div className="staff-card-img w-12 h-12 flex-shrink-0 rounded-full overflow-hidden">
                    <img
                        src={props.img}
                        alt="Staff Profile"
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
                <div className="absolute right-2 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-300">
                    <Link to={`/staff/update/${props.staffID}`}
                        className="block bg-green-500 text-white text-sm py-2 px-4 rounded-lg shadow hover:bg-green-600">
                        <BsFillPenFill color="white" size="18" />
                    </Link>
                </div>
            </div>
        </>
    )
}