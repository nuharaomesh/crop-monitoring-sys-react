import {Link, Outlet, useLocation} from "react-router-dom";
import Searchbar from "../Searchbar.tsx";
import FieldCard from "../Cards/FieldCard.tsx";
import FieldMap from "../FieldMap.tsx";

export default function FieldList() {

    const location = useLocation();

    return (
        <>
            <div className="field-container-header custom-layout">
                <div className="list-header-title">
                    <h1 className="list-title">Manage your fields</h1>
                    <Link to='/field/addField' className="custom-persist-btn">Add new</Link>
                </div>
            </div>
            <div className="field-container-body custom-layout">
                <div className="field-list-holder">
                    <div className="field-list-header">
                        <div className="field-list-title">
                            <h1 className="field-title">Current fields</h1>
                            <p className="field-sub-title">search the field you looking for</p>
                        </div>
                        <Searchbar/>
                    </div>
                    <div className="field-list-items custom-list-items">
                        <FieldCard/>
                    </div>
                </div>
                {location.pathname === "/field" && (
                    <div className="field-map-holder">
                        <FieldMap initialLat={6.9271} initialLng={79.8612} changeLocation={false}/>
                    </div>
                )}
            </div>
            <Outlet/>
        </>
    )
}