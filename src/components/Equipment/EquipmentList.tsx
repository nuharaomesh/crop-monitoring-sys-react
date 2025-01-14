import {Link, Outlet} from "react-router-dom";
import Searchbar from "../Searchbar.tsx";
import EquipmentCard from "../Cards/EquipmentCard.tsx";

export default function EquipmentList() {
    return (
        <section className="equipment-list">
            <div className="equipment-list-header">
                <div className="list-header-title">
                    <h1 className="list-title">Manage your Equipments</h1>
                    <Link to='/staff/addVehicle' className="custom-persist-btn">Add new</Link>
                </div>
                <p className="list-sub-title">search your equipments</p>
            </div>
            <div className="list-body">
                <div className="equipment-searchbar">
                    <Searchbar/>
                </div>
                <div className="list-items equipment-list-h">
                    <EquipmentCard/>
                </div>
            </div>
            <Outlet/>
        </section>
    )
}