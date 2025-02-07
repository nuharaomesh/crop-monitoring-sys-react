import {Link, Outlet} from "react-router-dom";
import Searchbar from "../Searchbar.tsx";
import StaffCard from "../Cards/StaffCard.tsx";
import {useSelector} from "react-redux";
import Staff from "../../models/Staff.ts";
import {RootState} from "../../store/Store.ts";
import {useEffect, useState} from "react";

export default function StaffList() {

    const [searchValue, setSearchValue] = useState("")
    const staffs: Staff[] = useSelector((state: RootState) => state.staff)
    const [filteredStaff, setFilteredStaff] = useState<Staff[]>([])

    useEffect(() => {
        setFilteredStaff(
            staffs.filter((s) =>
                s.firstname.toLowerCase().includes(searchValue)
            )
        )
    }, [searchValue]);

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
                    <Searchbar searchValue={setSearchValue}/>
                </div>
                <div className="list-items staff-list-h">
                    {!(searchValue === "") ? (
                        filteredStaff.map((s) => (
                            <StaffCard key={s.staffID}
                                       staffID={s.staffID}
                                       img={s.staffImg}
                                       name={`${s.firstname} ${s.lastname}`}
                                       role={s.role}
                                       stat={s.status}
                                       phone={s.phone}
                                       email={s.email}
                            />
                        ))
                    ) : (staffs.map((staff: Staff) => (
                        <StaffCard key={staff.staffID}
                                   staffID={staff.staffID}
                                   img={staff.staffImg}
                                   name={`${staff.firstname} ${staff.lastname}`}
                                   role={staff.role}
                                   stat={staff.status}
                                   phone={staff.phone}
                                   email={staff.email}
                        />
                    )))}
                </div>
            </div>
        </section>
    )
}