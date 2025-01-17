import StaffList from "../../components/Staff/StaffList.tsx";
import VehicleList from "../../components/Vehicle/VehicleList.tsx";
import EquipmentList from "../../components/Equipment/EquipmentList.tsx";

export default function Staff() {
    return (
        <section className="main-border staff-container">
            <div className="staff-container-left">
                <div className="staff-content-header custom-layout"></div>
                <div className="staff-holder custom-layout">
                    <StaffList/>
                </div>
            </div>
            <div className="staff-container-right">
                <div className="vehicle-holder custom-layout">
                    <VehicleList/>
                </div>
                <div className="equipment-holder custom-layout">
                    <EquipmentList/>
                </div>
            </div>
        </section>
    )
}