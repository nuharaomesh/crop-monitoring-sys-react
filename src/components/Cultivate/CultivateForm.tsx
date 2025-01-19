import {AiFillPushpin, AiOutlineExpand} from "react-icons/ai";
import {BiSolidMessageSquareAdd} from "react-icons/bi";
import StaffCard from "../Cards/StaffCard.tsx";
import Modal from "../Modal.tsx";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Crop} from "../../models/Crop.ts";
import {FaDeleteLeft} from "react-icons/fa6";
import {Staff} from "../../models/Staff.ts";
import {Cultivate} from "../../models/Cultivate.ts";
import {useNavigate, useParams} from "react-router-dom";
import generateID from "../../util/GenerateID.ts";
import {add_cultivation} from "../../reducers/CultivatedSlice.ts";

export default function CultivateForm() {

    const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
    const [cropCode, setCropCode] = useState<string>('')
    const [staffs, setStaffs] = useState<string[]>([])
    const [isCropSelected, setIsCropSelected] = useState<boolean>(false)
    const [selectedModalType, setSelectedModalType] = useState<'staff' | 'crop'>('crop')
    const { id } = useParams<{id: string}>()
    const selectedCrop = useSelector(state =>
        state.crop.find((c: Crop) => c.cropCode === cropCode)
    )
    const filteredStaff = useSelector((state) =>
        state.staff.filter((staff: Staff) => staffs.includes(staff.staffID))
    )
    const dispatch = useDispatch()
    const navigate = useNavigate()

    function assignStaff(id: string) {
        setStaffs([...staffs, id])
    }

    function removeStaff(id: string) {
        setStaffs(staffs.filter((staff) => staff !== id));
    }

    function handleSelectOnClose() {
        setIsCropSelected(true)
        handleCloseModal()
    }

    function handleOpenCropModal() {
        setSelectedModalType('crop')
        setIsModalOpen(true)
    }

    function handleOpenStaffModal() {
        setSelectedModalType('staff')
        setIsModalOpen(true)
    }

    function handleCloseModal() {
        setIsModalOpen(false)
    }

    function handleSubmit() {
        const genCultivateID = generateID('CULTIVATE')
        const newCultivate = new Cultivate(genCultivateID, cropCode, String(id), staffs)
        dispatch(add_cultivation({...newCultivate}))
        navigate('/activity')
    }

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) =>
            event.key === 'Escape' && handleCloseModal();

        document.addEventListener('keydown', handleKeyDown);
        return () => document.removeEventListener('keydown', handleKeyDown);
    }, []);

    return (
        <section className="modal py-5">
            <div className={`modal-content cultivate-modal-content`}>
                <div className="cultivate-modal-content-body">
                    <div className="field-details-holder">
                        <div className="field-details-img-holder">
                            <img src="../../../public/download.jpeg" alt="" className="field-details-img"/>
                        </div>
                        <div className="field-details">
                            <h1 className="card-title">Grepo egers</h1>
                            <p className="uncult-card-size">12 Sq.mt <AiOutlineExpand/></p>
                            <p className="uncult-card-address">Horana <AiFillPushpin color={"red"}/></p>
                        </div>
                    </div>
                    <div className="crop-details-holder relative group">
                        <div className="crop-details-img-holder">
                            <img src={isCropSelected ? selectedCrop.cropImg : "../../../public/images.png" } alt="" className="crop-details-img"/>
                        </div>
                        <div className="crop-details">
                            <div>
                                {isCropSelected ? (
                                    <div>
                                        <h1 className="card-title">{selectedCrop.cropName}</h1>
                                        <div>
                                            <label htmlFor="" className="card-label">Growth time</label>
                                            <p className="crop-card-time">{selectedCrop.cropGrowthTime}</p>
                                        </div>
                                        <div className="flex gap-4">
                                            <div>
                                                <label htmlFor="" className="card-label">season</label>
                                                <p className="season-title">{selectedCrop.cropSeason}</p>
                                            </div>
                                            <div>
                                                <label htmlFor="" className="card-label">category</label>
                                                <p className="crop-card-cat">{selectedCrop.category}</p>
                                            </div>
                                        </div>
                                    </div>
                                ) : ( <div>Crop not selected!</div> )}
                            </div>
                        </div>
                        <div className="crop-details-btn-holder crop-details-btn-animation">
                            {!isCropSelected ? (
                                <button type="button" className="crop-add-btn" onClick={handleOpenCropModal}>
                                    <BiSolidMessageSquareAdd color={'white'} size={20}/>
                                </button>
                            ) : (
                                <button type="button" className="remove-btn" onClick={() => {setIsCropSelected(false)}}>
                                    <FaDeleteLeft color={'white'} size={20}/>
                                </button>
                            )}
                        </div>
                    </div>
                    <div className="staff-details-holder">
                        <div className="staff-details-header relative group">
                        <div className="staff-details-title-holder">
                                <h1 className="staff-details-title">Assign staff members</h1>
                            </div>
                            <div className="staff-details-btn-holder">
                                <button type="button" className="staff-add-btn" onClick={handleOpenStaffModal}>
                                    <BiSolidMessageSquareAdd color={'white'} size={20}/></button>
                            </div>
                        </div>
                        <div className="staff-details-list">
                            {filteredStaff.map((s) => (
                                <StaffCard key={s.staffID}
                                           removeble={true}
                                           staffID={s.staffID}
                                           img={s.staffImg}
                                           name={`${s.firstname} ${s.lastname}`}
                                           role={s.role}
                                           stat={s.status}
                                           phone={s.phone}
                                           email={s.email}
                                           removeStaff={removeStaff}
                                />
                            ))}
                        </div>
                    </div>
                    <div className="proceed-btn-holder">
                        <button type="button" onClick={handleSubmit} className="proceed-btn">Proceed</button>
                    </div>
                </div>
            </div>
            {isModalOpen && (
                <Modal closeModal={handleCloseModal}
                       selectOnClose={handleSelectOnClose}
                       modalType={selectedModalType}
                       getCropCode={setCropCode}
                       getStaffID={assignStaff}
                       selectedStaff={staffs}
                />
            )}
        </section>
    )
}