import {Link} from "react-router-dom";
import { BsFillPenFill } from "react-icons/bs";
import { FaUsers, FaToolbox } from "react-icons/fa6";

export default function FieldCard(props) {
    return (
        <div className="field-card">
            <div className="field-card-header">
                <img src="../../../public/download.jpeg" alt="" className="field-card-img"/>
            </div>
            <div className="field-card-body">
                <h1 className="custom-card-header">Grepod eagers</h1>
                <h3 className="custom-card-header-md">12 Sq.mt</h3>
                <h4 className="field-card-location">Location</h4>
                <label htmlFor="crop-name" className="card-label">crop</label>
                {/*<div>
                    <h1 className="field-card-crop-name">Wheat</h1>
                    <p className="field-card-harvest-stat">Ready for harvest</p>
                </div>*/}
                <h1 className="field-card-uncultivated">Uncultivated</h1>
            </div>
            <div className="field-card-footer">
                <div className="field-card-footer-top">
                    <div className="field-card-staff-count">
                        <FaUsers size={25} color={'gray'}/>
                        <h1 className="field-card-counts">10</h1>
                    </div>
                    <div className="field-card-equipment-count">
                        <FaToolbox size={25} color={'gray'}/>
                        <h1 className="field-card-counts">10</h1>
                    </div>
                </div>
                <div className="field-card-footer-bottom">
                    <Link to="" className="card-update-btn field-update-btn"><BsFillPenFill color="green" size="18"/></Link>
                </div>
            </div>
        </div>
    )
}