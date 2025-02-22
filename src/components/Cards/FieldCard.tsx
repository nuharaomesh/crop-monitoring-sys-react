import {Link} from "react-router-dom";
import { BsFillPenFill } from "react-icons/bs";
// import { FaUsers, FaToolbox } from "react-icons/fa6";
import { useEffect, useState } from "react";
import {useSelector} from "react-redux";
import FieldModel from "../../models/Field.ts";
import CropModel from "../../models/Crop.ts";

export default function FieldCard(props) {

    const [preImg, setPreImg] = useState("")
    const field = useSelector(state =>
        state.field.fieldList.find((f: FieldModel)=> f.fieldCode === props.cultivateData?.fieldCode)
    )
    const crop = useSelector(state =>
        state.crop.cropList.find((c: CropModel)=> c.cropCode === props.cultivateData?.cropCode)
    )
    useEffect(() => {
        setPreImg(`data:image/jpeg;base64,${!props.cultivated ? props.fieldImg : field.img}`)
    }, [])
    function handleClick() {
        const location = props.cultivated ? field.fieldLocation : props.fieldLocation
        const [lat, lng] = location.split(',').map((coord) => parseFloat(coord.trim())); // Parse the string
        props.onFieldClick(lat, lng);
    }

    return (
        <div className="field-card" onClick={handleClick}>
            <div className="field-card-header">
                <img src={preImg} alt="" className="field-card-img"/>
            </div>
            <div className="field-card-body">
                <h1 className="custom-card-header">{!props.cultivated ? props.fieldName : field.fieldName}</h1>
                <h3 className="custom-card-header-md">{!props.cultivated ? props.fieldSize : field.fieldSize} Sq.mt</h3>
                <h4 className="field-card-location">{!props.cultivated ? props.fieldAddress : field.fieldAddress}</h4>
                <label htmlFor="crop-name" className="card-label">crop</label>
                {props.cultivated ? (
                    <div className="flex gap-2">
                        <h1 className="field-card-crop-name">{crop?.cropName}</h1>
                        <p className="field-card-harvest-stat">{crop?.cropGrowthTime}</p>
                    </div>
                ) : <h1 className="field-card-uncultivated">Uncultivated</h1>
                }
            </div>
            <div className="field-card-footer">
                <div className="field-card-footer-top">
                    {/*{props.cultivated ? (
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
                    )}*/}
                </div>
                <div className="field-card-footer-bottom">
                    <Link to={`/field/updateField/${props.fieldCode}`} className="card-update-btn field-update-btn"><BsFillPenFill color="green" size="18"/></Link>
                </div>
            </div>
        </div>
    )
}