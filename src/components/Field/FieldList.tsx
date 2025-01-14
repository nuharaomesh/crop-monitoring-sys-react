import {Link, Outlet} from "react-router-dom";
import Searchbar from "../Searchbar.tsx";

export default function FieldList() {
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
                    <div className="field-list-items">

                    </div>
                </div>
                <div className="field-map-holder">

                </div>
            </div>
            <Outlet/>
        </>
    )
}