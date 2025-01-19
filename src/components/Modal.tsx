import StaffCard from "./Cards/StaffCard.tsx";
import {useSelector} from "react-redux";
import {Crop} from "../models/Crop.ts";
import {Staff} from "../models/Staff.ts";
import CropCardRow from "./Cards/CropCardRow.tsx";

export default function Modal(props) {

    const crops = useSelector(state => state.crop)
    const staffs = useSelector(state =>
        state.staff.filter((staff: Staff)=> !props.selectedStaff.includes(staff.staffID))
    )

    return (
        <div className="item-holder-modal">
            <div className="bg-white p-6 rounded-lg shadow-lg w-[600px]">
                <h2 className="text-xl font-semibold mb-4">{props.modalType?.startsWith('crop') ? 'Assign crop' : 'Assign staff'}</h2>
                <p className="mb-4">{props.modalType?.startsWith('crop') ? 'Add crop type' : 'Select staff members.'}</p>
                <div className="staff-crop-holder custom-list-row">
                    {props.modalType?.startsWith('crop') ?
                        (crops.map((c: Crop) => (
                                <CropCardRow key={c.cropCode}
                                             crop={c}
                                             setCropCode={props.getCropCode}
                                             selectOnClose={props.selectOnClose}
                                />
                            ))
                        ) :
                        (staffs.map((s: Staff) => (
                            <StaffCard key={s.staffID}
                                       staffID={s.staffID}
                                       assignable={true}
                                       setStaffID={props.getStaffID}
                                       img={s.staffImg}
                                       name={`${s.firstname} ${s.lastname}`}
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