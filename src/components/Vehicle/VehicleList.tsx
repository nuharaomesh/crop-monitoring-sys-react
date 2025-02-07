import {Link, Outlet} from "react-router-dom";
import Searchbar from "../Searchbar.tsx";
import VehicleCard from "../Cards/VehicleCard.tsx";
import {useSelector} from "react-redux";
import Vehicle from "../../models/Vehicle.ts";
import {useEffect, useState} from "react";

export default function VehicleList() {

    const vehicles = useSelector(state => state.vehicle)
    const [searchValue, setSearchValue] = useState('')
    const [filteredVehicle, setFilteredVehicle] = useState<[]>([])

    useEffect(() => {
        setFilteredVehicle(
            vehicles.filter((v: Vehicle) =>
                v.category.toLowerCase().includes(searchValue)
            )
        )
    }, [searchValue]);

    return (
        <section className="vehicle-list">
            <div className="vehicle-list-header">
                <div className="list-header-title">
                    <h1 className="list-title">Manage your vehicle</h1>
                    <Link to='/staff/addVehicle' className="custom-persist-btn">Add new</Link>
                </div>
                <p className="list-sub-title">search your vehicles</p>
            </div>
            <div className="list-body">
                <div className="vehicle-searchbar">
                    <Searchbar searchValue={setSearchValue}/>
                </div>
                <div className="list-items vehicle-list-h">
                    {!(searchValue === "") ? (
                        filteredVehicle.map((v: Vehicle) => (
                            <VehicleCard key={v.vehicleID}
                                         vehicleID={v.vehicleID}
                                         vehicleType={v.category}
                                         fuelType={v.fuelType}
                                         status={v.status}
                                         licenceNumber={v.licencePlate}
                            />
                        ))
                    ) : (vehicles.map((vehicle: Vehicle) =>
                        <VehicleCard key={vehicle.vehicleID}
                                     vehicleID={vehicle.vehicleID}
                                     vehicleType={vehicle.category}
                                     fuelType={vehicle.fuelType}
                                     status={vehicle.status}
                                     licenceNumber={vehicle.licencePlate}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}