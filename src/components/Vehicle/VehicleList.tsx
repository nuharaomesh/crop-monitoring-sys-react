import {Link, Outlet} from "react-router-dom";
import Searchbar from "../Searchbar.tsx";
import VehicleCard from "../Cards/VehicleCard.tsx";

export default function VehicleList() {
    return (
        <section className="vehicle-list">
            <div className="vehicle-list-header">
                <div className="list-header-title">
                    <h1 className="list-title">Manage your vehicle</h1>
                    <Link to='/staff/addVehicle' className="custom-persist-btn">Add new</Link>
                </div>
                <p className="list-sub-title">search your vehicles</p>
            </div>
            <div className="list-body">
                <div className="vehicle-searchbar">
                    <Searchbar/>
                </div>
                <div className="list-items vehicle-list-h">
                    <VehicleCard/>
                </div>
            </div>
            <Outlet/>
        </section>
    )
}