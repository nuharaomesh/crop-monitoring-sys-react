import {IoMdRefresh} from "react-icons/io";
import LogCard from "../components/Cards/LogCard.tsx";
import {useState} from "react";
import CropLogCard from "../components/Cards/CropLogCard.tsx";
import FieldLogCard from "../components/Cards/FieldLogCard.tsx";
import StaffLogCard from "../components/Cards/StaffLogCard.tsx";

export default function Insights() {

    const [logItems, setLogItems] = useState<[]>([])

    return (
        <main className="main-border custom-insight-border">
            <div className="custom-layout insight-left">
                <div className="insight-header">
                    <div className="action-list">
                        <div className="logs-item-selector">
                            <div className="custom-expand">
                                <input className="form-control custom-log-selector"
                                       list="jobRole"
                                       placeholder="Select job role"
                                       id="staff_role"
                                       defaultValue="Logs"
                                />
                                <datalist id="jobRole">
                                    <option value="Logs">Logs</option>
                                    <option value="Crop">Crop logs</option>
                                    <option value="Field">Field logs</option>
                                    <option value="Staff">Staff logs</option>
                                </datalist>
                            </div>
                        </div>
                        <div className="log-date-selector">
                            <input
                                type="date"
                                defaultValue="2025-01-31"
                                className="form-control !rounded-none text-gray-500"
                            />
                        </div>
                        <div className="log-refresh">
                            <button type="button"
                                    className="custom-refresh-btn"
                            >
                                <IoMdRefresh color="gray"/>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="insight-body">
                    <div className="logs-list-container">
                        <LogCard logCode={"98765234sdad"} detail={"Corn planted"} date={"2021-12-12"} observationDetail={"corn planted successfully"}/>
                        <CropLogCard logCode={"ajn2323j2ij"} cropCode={"aksdmk3n43j"} condition={"bad"} note={"corn got pest"} date={"2024-12-2"}/>
                        <FieldLogCard logCode={"ajn2323j2ij"} fieldCode={"aksdmk3n43j"} observationDetails={"field cultivated corn"} date={"2024-12-2"}/>
                        <StaffLogCard logCode={"ajn2323j2ij"} staffID={"aksdmk3n43j"} observationRole={"labor assign to the task"} date={"2024-12-2"}/>
                    </div>
                </div>
            </div>
            <div className="custom-layout insight-right">
                <div className="logs-details">
                    <div className="logs-details-header">
                        <h1 className="log-view-title ">Log view</h1>
                    </div>
                    <div className="logs-details-body">

                    </div>
                    <div className="logs-details-footer">

                    </div>
                </div>
            </div>
        </main>
    )
}