import {AiFillPushpin, AiOutlineExpand} from "react-icons/ai";
import {Link} from "react-router-dom";
import {BsFillPenFill} from "react-icons/bs";

export default function UncultivatedCard(props) {
    return (
        <div className="uncult-card relative group">
            <div className="uncult-card-header">
                <img src={props.img} alt="" className="uncult-card-header-img"/>
            </div>
            <div className="uncult-card-body">
                <div className="uncult-card-name-holder">
                    <h1 className="uncult-card-name">{props.fieldName}</h1>
                </div>
                <div className="uncult-card-size-holder">
                    <h1 className="uncult-card-size">{props.fieldSize} Sq.mt <AiOutlineExpand/></h1>
                </div>
                <div className="uncult-card-address-holder">
                    <h1 className="uncult-card-address">{props.fieldAddress} <AiFillPushpin color={"red"}/></h1>
                </div>
                <div
                    className="absolute right-3 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-300">
                    <Link to={`/activity/addCultivate/${props.fieldCode}`}
                          className="w-12 h-12 flex bg-green-500 text-white text-sm py-2 px-4 rounded-full shadow hover:bg-green-600 justify-center items-center">
                        <BsFillPenFill color="white" size="18"/>
                    </Link>
                </div>
            </div>
        </div>
    )
}