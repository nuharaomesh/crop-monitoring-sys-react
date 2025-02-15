import {Link} from "react-router-dom";
import {useState} from "react";

export default function Sidebar() {

    const [activeItem, setActiveItem] = useState("dashboard");

    const getItemClasses = (item:string) =>
        activeItem === item
            ? "w-12 rounded-[4px] bg-[#011f4b] text-white text-12p px-4 py-2 hover:bg-[#003766] font-semibold"
            : "w-12 rounded-[4px] px-4 py-2 hover:bg-gray-200 text-12p font-semibold text-slate-700";

    const [isDropdownOpen, setIsDropdownOpen] = useState(false)

    return (
        <>
            <img src="../../public/icon.png" alt="" className="w-full h-32 object-cover pointer-events-none"/>
            <nav>
                <ul>
                    <li><Link to="/" className={`${getItemClasses("dashboard")} block h-full w-full`} onClick={() => setActiveItem("dashboard")}>Dashboard</Link></li>
                    <li><Link to="/activity" className={`${getItemClasses("activity")} block h-full w-full`} onClick={() => setActiveItem("activity")}>Activity</Link></li>
                    <li className="rounded">
                        <button onClick={() => setIsDropdownOpen(!isDropdownOpen)} className="block w-full text-left py-2 px-4 rounded font-semibold text-slate-700">Management
                            <span className="float-right">
                                {isDropdownOpen ? "▲" : "▼"}
                            </span>
                        </button>
                        {isDropdownOpen && (
                            <ul className={` left-full mt-2 w-48 item-expand ${
                                isDropdownOpen ? "max-h-48" : "max-h-0"
                            }`} >
                                <li><Link to="/field" className={`${getItemClasses("field")} block h-full w-full`} onClick={() => setActiveItem("field")}>Field</Link></li>
                                <li><Link to="/crop" className={`${getItemClasses("crop")} block h-full w-full`} onClick={() => setActiveItem("crop")}>Crop</Link></li>
                                <li><Link to="/staff" className={`${getItemClasses("staff")} block h-full w-full`} onClick={() => setActiveItem("staff")}>Staff</Link></li>
                            </ul>
                        )}
                    </li>
                    <li><Link to="/insights" className={`${getItemClasses("insight")} block h-full w-full`} onClick={() => setActiveItem("insight")}>Insights</Link></li>
                </ul>
            </nav>
        </>
    )
}