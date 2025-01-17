import {Link, Outlet, useLocation} from "react-router-dom";
import Searchbar from "../Searchbar.tsx";
import FieldCard from "../Cards/FieldCard.tsx";
import FieldMap from "../FieldMap.tsx";
import {useSelector} from "react-redux";
import {useState} from "react";

export default function FieldList() {

    const location = useLocation();
    const fields = useSelector(state =>
        state.field.filter((field) => !field.isCultivated)
    )
    const cultivated = useSelector(state => state.cultivate)
    const [selectedFieldType, setSelectedFieldType] = useState<"cultivated" | "uncultivated">("uncultivated");
    const handleSelectionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedFieldType(event.target.value as "cultivated" | "uncultivated");
    };
    const [mapLat, setMapLat] = useState(6.9271);
    const [mapLng, setMapLng] = useState(79.8612);

    function handleFieldClick(lat: number, lng: number) {
        setMapLat(lat);
        setMapLng(lng);
    }

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
                        <div className="flex gap-4">
                            <Searchbar/>
                            <div className="flex items-center space-x-4">
                                <label className="flex items-center space-x-2">
                                    <input type="radio" name="fieldType" value="cultivated" className="form-radio h-5 w-5 text-indigo-600 focus:ring-indigo-500" checked={selectedFieldType === "cultivated"}
                                        onChange={handleSelectionChange}
                                    />
                                    <span className="text-gray-700">Cultivated</span>
                                </label>
                                <label className="flex items-center space-x-2">
                                    <input type="radio" name="fieldType" value="uncultivated" className="form-radio h-5 w-5 text-indigo-600 focus:ring-indigo-500" checked={selectedFieldType === "uncultivated"}
                                        onChange={handleSelectionChange}
                                    />
                                    <span className="text-gray-700">Uncultivated</span>
                                </label>
                            </div>
                        </div>
                    </div>

                    <div className="field-list-items custom-list-row">
                        {selectedFieldType === "uncultivated" ?
                            (fields.map(field => (
                                <FieldCard key={field.fieldCode}
                                           fieldCode={field.fieldCode}
                                           fieldImg={field.fieldImg}
                                           fieldName={field.fieldName}
                                           fieldSize={field.fieldSize}
                                           fieldAddress={field.fieldAddress}
                                           cultivated={false}
                                           onFieldClick={handleFieldClick}
                                           fieldLocation={field.fieldLocation}
                                />
                            ))) :
                            (cultivated.map(cultivate => (
                                <FieldCard key={cultivate.fieldCode}
                                           fieldCode={cultivate.fieldCode}
                                           fieldImg={cultivate.fieldImg}
                                           fieldName={cultivate.fieldName}
                                           fieldSize={cultivate.fieldSize}
                                           fieldAddress={cultivate.fieldAddress}
                                           cultivated={true}
                                />
                            )))
                        }
                    </div>
                </div>
                {location.pathname === "/field" && (
                    <div className="field-map-holder">
                        <FieldMap initialLat={mapLat} initialLng={mapLng} changeLocation={false}/>
                    </div>
                )}
            </div>
            <Outlet/>
        </>
    )
}