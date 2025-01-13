import {Link, Outlet} from "react-router-dom";
import Searchbar from "../Searchbar.tsx";
import StaffCard from "../Cards/StaffCard.tsx";

export default function StaffList() {
    return (
        <section className="staff-list">
            <div className="staff-list-header">
                <div className="list-header-title">
                    <h1 className="list-title">Manage your staff</h1>
                    <Link to='/staff/addStaff' className="custom-persist-btn">Add new</Link>
                </div>
                <p className="list-sub-title">search your staff member</p>
            </div>
            <div className="staff-list-body">
                <div className="staff-searchbar">
                    <Searchbar/>
                </div>
                <div className="staff-list-items">
                    <StaffCard/>
                </div>
            </div>
            <Outlet/>
        </section>
    )
}