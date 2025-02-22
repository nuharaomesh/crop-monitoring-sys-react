import StaffCard from "./Cards/StaffCard.tsx";
import {useDispatch, useSelector} from "react-redux";
import CropModel from "../models/Crop.ts";
import StaffModel from "../models/Staff.ts";
import CropCardRow from "./Cards/CropCardRow.tsx";
import {useEffect} from "react";
import {getAllCrops} from "../reducers/CropSlice.ts";
import {getAllStaffs} from "../reducers/StaffSlice.ts";
import {AppDispatch} from "../store/Store.ts";

export default function Modal(props) {

    const dispatch = useDispatch<AppDispatch>()
    useEffect(() => {
        props.modalType?.startsWith('crop') ? dispatch(getAllCrops()) : dispatch(getAllStaffs())
    }, []);
    const crops = useSelector(state => state.crop.cropList)
    const staffs = useSelector(state =>
        state.staff.staffList.filter((staff: StaffModel)=> !props.selectedStaff.includes(staff.staffID))
    )

    return (
        <div className="item-holder-modal">
            <div className="bg-white p-6 rounded-lg shadow-lg w-[600px]">
                <h2 className="text-xl font-semibold mb-4">{props.modalType?.startsWith('crop') ? 'Assign crop' : 'Assign staff'}</h2>
                <p className="mb-4">{props.modalType?.startsWith('crop') ? 'Add crop type' : 'Select staff members.'}</p>
                <div className="staff-crop-holder custom-list-row">
                    {props.modalType?.startsWith('crop') ?
                        (crops.map((c: CropModel) => (
                                <CropCardRow key={c.cropCode}
                                             crop={c}
                                             setCropCode={props.getCropCode}
                                             selectOnClose={props.selectOnClose}
                                />
                            ))
                        ) :
                        (staffs.map((s: StaffModel) => (
                            <StaffCard key={s.staffID}
                                       staffID={s.staffID}
                                       assignable={true}
                                       setStaffID={props.getStaffID}
                                       img={s.img}
                                       name={s.name}
                                       role={s.role}
                                       stat={s.status}
                                       phone={s.phone}
                                       email={s.email}
                            />
                        )))
                    }
                </div>
                <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600" onClick={props.closeModal}>
                    Close
                </button>
            </div>
        </div>
    )
}