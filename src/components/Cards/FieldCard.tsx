import {Link} from "react-router-dom";
import { BsFillPenFill } from "react-icons/bs";
import { FaUsers, FaToolbox } from "react-icons/fa6";

export default function FieldCard(props) {

    function handleClick() {
        const [lat, lng] = props.fieldLocation.split(',').map((coord) => parseFloat(coord.trim())); // Parse the string
        props.onFieldClick(lat, lng);
    }

    return (
        <div className="field-card" onClick={handleClick}>
            <div className="field-card-header">
                <img src="../../../public/download.jpeg" alt="" className="field-card-img"/>
            </div>
            <div className="field-card-body">
                <h1 className="custom-card-header">{props.fieldName}</h1>
                <h3 className="custom-card-header-md">{props.fieldSize} Sq.mt</h3>
                <h4 className="field-card-location">{props.fieldAddress}</h4>
                <label htmlFor="crop-name" className="card-label">crop</label>
                {props.cultivated ? (
                    <div>
                        <h1 className="field-card-crop-name">{props.cropName}</h1>
                        <p className="field-card-harvest-stat">{props.harvestStat}</p>
                    </div>
                ) : <h1 className="field-card-uncultivated">Uncultivated</h1>
                }
            </div>
            <div className="field-card-footer">
                <div className="field-card-footer-top">
                    {props.cultivated ? (
                        <div>
                            <div className="field-card-staff-count">
                                <FaUsers size={25} color={'gray'}/>
                                <h1 className="field-card-counts">{props.fieldStaff}</h1>
                            </div>
                            <div className="field-card-equipment-count">
                                <FaToolbox size={25} color={'gray'}/>
                                <h1 className="field-card-counts">{props.fieldEquipment}</h1>
                            </div>
                        </div>
                    ) : (
                        <div></div>
                    )}
                </div>
                <div className="field-card-footer-bottom">
                    <Link to="" className="card-update-btn field-update-btn"><BsFillPenFill color="green" size="18"/></Link>
                </div>
            </div>
        </div>
    )
}