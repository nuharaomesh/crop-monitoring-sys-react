import {Link} from "react-router-dom";
import {BsFillPenFill} from "react-icons/bs";

export default function VehicleCard(props) {
    return (
        <>
            <div className="vehicle-card relative group">
                <div className="flex flex-1 justify-between items-center">
                    <div className="vehicle-card-type w-1/5">
                        <h1 className="text-sm font-semibold text-gray-800 truncate">{props.vehicleType}</h1>
                    </div>
                    <div className="vehicle-card-fuel-type w-1/5">
                        <h1 className="text-sm text-gray-500 truncate">{props.fuelType}</h1>
                    </div>
                    <div className="vehicle-card-status w-1/5">
                        <h1 className="text-sm text-green-500 truncate">{props.status}</h1>
                    </div>
                    <div className="vehicle-card-licence-no w-1/5">
                        <h1 className="text-sm text-gray-500 truncate">{props.licenceNumber}</h1>
                    </div>
                </div>
                <div
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-300">
                    <Link to={`/staff/updateVehicle/${props.vehicleID}`}
                          className="block bg-green-500 text-white text-sm py-2 px-4 rounded-lg shadow hover:bg-green-600">
                        <BsFillPenFill color="white" size="18"/>
                    </Link>
                </div>
            </div>
        </>
    )
}