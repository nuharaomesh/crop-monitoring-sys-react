import UncultivatedFieldList from "../components/Field/UncultivatedFieldList.tsx";
import {Outlet} from "react-router-dom";

export default function Activity() {
    return (
        <section className="main-border activity-container">
            <div className="unCultivated-fields custom-layout">
                <UncultivatedFieldList/>
            </div>
            <div className="activity-details">
                <div className="activity-more">
                    <div className="blank-2 custom-layout">

                    </div>
                    <div className="used-props-details custom-layout">

                    </div>
                </div>
                <div className="cultivated-fields custom-layout">

                </div>
            </div>
            <Outlet/>
        </section>
    )
}