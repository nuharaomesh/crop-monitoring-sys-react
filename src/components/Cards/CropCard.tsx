import { BsFillPenFill } from "react-icons/bs";
import {Link} from "react-router-dom";

export default function CropCard(props) {
    return (
        <div className="crop-card relative group">
            <div className="crop-card-header">
                <div className="crop-card-img-holder">
                    <img src={props.cropImg} alt="" className="crop-card-img"/>
                </div>
                <div
                    className="absolute right-8 top-1/4 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-300">
                    <Link to={`/crop/updateCrop/${props.cropCode}`}
                          className="flex w-11 h-11 rounded-full text-sm py-2 px-4 justify-center items-center card-update-btn crop-update-btn-pos">
                        <BsFillPenFill color="green" size="18"/>
                    </Link>
                </div>
            </div>
            <div className="crop-card-body">
                <h1 className="card-title">{props.cropName} <span
                    className="card-sub-title">( {props.cropScientificName} )</span></h1>
                <div>
                    <label className="card-label">category</label>
                    <h1 className="crop-card-cat">{props.category}</h1>
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