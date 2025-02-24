import {AiFillPushpin, AiOutlineExpand} from "react-icons/ai";
import {BiSolidMessageSquareAdd} from "react-icons/bi";
import StaffCard from "../Cards/StaffCard.tsx";
import Modal from "../Modal.tsx";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import CropModel from "../../models/Crop.ts";
import {FaArrowLeft, FaDeleteLeft} from "react-icons/fa6";
import Staff from "../../models/Staff.ts";
import {Cultivate} from "../../models/Cultivate.ts";
import {useNavigate, useParams} from "react-router-dom";
import {saveCultivation} from "../../reducers/CultivatedSlice.ts";
import FieldModel from "../../models/Field.ts";
import {AppDispatch, RootState} from "../../store/Store.ts";

export default function CultivateForm() {

    const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
    const [cropCode, setCropCode] = useState<string>('')
    const [staffs, setStaffs] = useState<string[]>([])
    const [isCropSelected, setIsCropSelected] = useState<boolean>(false)
    const [selectedModalType, setSelectedModalType] = useState<'staff' | 'crop'>('crop')
    const { id } = useParams<{id: string}>()
    const dispatch = useDispatch<AppDispatch>()
    const navigate = useNavigate()
    const selectedField = useSelector((state: RootState) =>
        state.field.fieldList.find((f: FieldModel)=> f.fieldCode === id)
    )
    const selectedCrop = useSelector((state: RootState) =>
        state.crop.cropList.find((c: CropModel) => c.cropCode === cropCode)
    )
    const filteredStaff = useSelector((state: RootState) =>
        state.staff.staffList.filter((staff: Staff) => staffs.includes(staff.staffID))
    )
    const [preFieldImg, setPreFieldImg] = useState("")
    const [preCropImg, setPreCropImg] = useState("")
    useEffect(() => {
        setPreFieldImg(`data:image/jpeg;base64,${selectedField?.img}`)
    }, [selectedField])
    useEffect(() => {
        setPreCropImg(`data:image/jpeg;base64,${selectedCrop?.img}`)
    }, [selectedCrop]);

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
        const newCultivate = new Cultivate(cropCode, String(id), staffs)
        console.log("cultivated:", newCultivate)
        dispatch(saveCultivation({...newCultivate}))
        navigate('/activity')
    }

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) =>
            event.key === 'Escape' && handleCloseModal();

        document.addEventListener('keydown', handleKeyDown);
        return () => document.removeEventListener('keydown', handleKeyDown);
    }, []);

    function handleBack() {
        navigate("/activity")
    }
    return (
        <section className="modal py-5">
            <div className={`modal-content cultivate-modal-content`}>
                <div className="cultivate-modal-content-body">
                    <button className="custom-back-btn" onClick={handleBack}><FaArrowLeft /></button>
                    <div className="field-details-holder">
                        <div className="field-details-img-holder">
                            <img src={preFieldImg} alt="" className="field-details-img"/>
                        </div>
                        <div className="field-details">
                            <h1 className="card-title">{selectedField?.fieldName}</h1>
                            <p className="uncult-card-size">{selectedField?.fieldSize} Sq.mt <AiOutlineExpand/></p>
                            <p className="uncult-card-address">{selectedField?.fieldAddress} <AiFillPushpin color={"red"}/></p>
                        </div>
                    </div>
                    <div className="crop-details-holder relative group">
                        <div className="crop-details-img-holder">
                            <img src={isCropSelected ? preCropImg : "../../../public/images.png" } alt="" className="crop-details-img"/>
                        </div>
                        <div className="crop-details">
                            <div>
                                {isCropSelected ? (
                                    <div>
                                        <h1 className="card-title">{selectedCrop?.cropName}</h1>
                                        <div>
                                            <label htmlFor="" className="card-label">Growth time</label>
                                            <p className="crop-card-time">{selectedCrop?.cropGrowthTime}</p>
                                        </div>
                                        <div className="flex gap-4">
                                            <div>
                                                <label htmlFor="" className="card-label">season</label>
                                                <p className="season-title">{selectedCrop?.cropSeason}</p>
                                            </div>
                                            <div>
                                                <label htmlFor="" className="card-label">category</label>
                                                <p className="crop-card-cat">{selectedCrop?.category}</p>
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
                                           img={s.img}
                                           name={s.name}
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