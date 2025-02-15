import {Link} from "react-router-dom";
import Searchbar from "../Searchbar.tsx";
import StaffCard from "../Cards/StaffCard.tsx";
import {useDispatch, useSelector} from "react-redux";
import Staff from "../../models/Staff.ts";
import {AppDispatch, RootState} from "../../store/Store.ts";
import {useEffect, useState} from "react";
import { getAllStaffs } from "../../reducers/StaffSlice.ts";

export default function StaffList() {

    const dispatch = useDispatch<AppDispatch>()
    const [searchValue, setSearchValue] = useState("")
    const staffs: Staff[] = useSelector(state => state.staff)
    const [filteredStaff, setFilteredStaff] = useState<Staff[]>([])

    useEffect(() => {
        dispatch(getAllStaffs())
    }, [])
    
    useEffect(() => {
        setFilteredStaff(
            staffs.filter((s) =>
                s.name.toLowerCase().includes(searchValue)
            )
        )
    }, [searchValue, staffs]);

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
                                       img={s.img}
                                       name={s.name}
                                       role={s.role}
                                       stat={s.status}
                                       phone={s.phone}
                                       email={s.email}
                            />
                        ))
                    ) : (staffs.map((staff: Staff) => (
                        <StaffCard key={staff.staffID}
                                   staffID={staff.staffID}
                                   img={staff.img}
                                   name={staff.name}
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