import { BsFillPenFill } from "react-icons/bs";
import {Link} from "react-router-dom";

export default function CropCard(props) {
    return (
        <div className="crop-card">
            <div className="crop-card-header">
                <img src={props.cropImg} alt="" className="crop-card-img"/>
                <Link to={`/crop/updateCrop/${props.cropCode}`} className="card-update-btn crop-update-btn-pos"><BsFillPenFill color="green" size="18" /></Link>
            </div>
            <div className="crop-card-body">
                <h1 className="card-title">{props.cropName} <span className="card-sub-title">( {props.cropScientificName} )</span></h1>
                <div>
                    <label className="card-label">category</label>
                    <h1 className="font-semibold text-green-600 text-20p">{props.category}</h1>
                </div>
                <div className="flex gap-4">
                    <div>
                        <label className="card-label">season</label>
                        <h1 className="season-title">{props.cropSeason}</h1>
                    </div>
                    <div className="">
                        <label className="card-label">time</label>
                        <h1 className="crop-card-time">{props.cropGrowthTime}</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}