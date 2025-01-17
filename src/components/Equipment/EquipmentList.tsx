import {Link, Outlet} from "react-router-dom";
import Searchbar from "../Searchbar.tsx";
import EquipmentCard from "../Cards/EquipmentCard.tsx";
import {useSelector} from "react-redux";

export default function EquipmentList() {

    const equipments = useSelector(state => state.equipment)

    return (
        <section className="equipment-list">
            <div className="equipment-list-header">
                <div className="list-header-title">
                    <h1 className="list-title">Manage your Equipments</h1>
                    <Link to='/staff/addEquipment' className="custom-persist-btn">Add new</Link>
                </div>
                <p className="list-sub-title">search your equipments</p>
            </div>
            <div className="list-body">
                <div className="equipment-searchbar">
                    <Searchbar/>
                </div>
                <div className="list-items equipment-list-h">
                    {equipments.map(equipment =>
                        <EquipmentCard key={equipment.equipmentID}
                                       equipmentID={equipment.equipmentID}
                                       name={equipment.name}
                                       type={equipment.type}
                                       status={equipment.availableStat}
                                       count={equipment.count}
                        />
                    )}
                </div>
            </div>
            <Outlet/>
        </section>
    )
}