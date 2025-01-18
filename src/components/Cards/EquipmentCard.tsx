import {Link} from "react-router-dom";
import {BsFillPenFill} from "react-icons/bs";

export default function EquipmentCard(props) {
    return (
        <>
            <div className="equipment-card relative group">
                <div className="flex flex-1 justify-between items-center">
                    <div className="equipment-card-name w-1/5">
                        <h1 className="text-sm font-semibold text-gray-800 truncate">{props.name}</h1>
                    </div>
                    <div className="equipment-card-type w-1/5">
                        <h1 className="text-sm text-gray-500 truncate">{props.type}</h1>
                    </div>
                    <div className="equipment-card-status w-1/5">
                        <h1 className="text-sm text-green-500 truncate">{props.status}</h1>
                    </div>
                    <div className="equipment-card-count w-1/5">
                        <h1 className="text-sm text-gray-500 truncate">{props.count}</h1>
                    </div>
                </div>
                <div
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-300">
                    <Link to={`/staff/updateEquipment/${props.equipmentID}`}
                          className="flex w-11 h-11 rounded-full bg-green-500 text-white text-sm py-2 px-4 shadow hover:bg-green-600 justify-center items-center">
                        <BsFillPenFill color="white" size="18"/>
                    </Link>
                </div>
            </div>
        </>
    )
}