import {Link} from "react-router-dom";
import Searchbar from "../Searchbar.tsx";
import VehicleCard from "../Cards/VehicleCard.tsx";
import {useDispatch, useSelector} from "react-redux";
import Vehicle from "../../models/Vehicle.ts";
import {useEffect, useState} from "react";
import { getAllVehicles } from "../../reducers/VehicleSlice.ts";
import { AppDispatch } from "../../store/Store.ts";

export default function VehicleList() {

    const dispatch = useDispatch<AppDispatch>()
    const vehicles = useSelector((state) => state.vehicle.vehicleList)
    useEffect(() => {
        dispatch(getAllVehicles())
    }, [dispatch])
    const [searchValue, setSearchValue] = useState("")
    const [filteredVehicle, setFilteredVehicle] = useState<[]>([])

    useEffect(() => {
        setFilteredVehicle(
            vehicles.filter((v: Vehicle) =>
                v.category.toLowerCase().includes(searchValue)
            )
        )
    }, [searchValue, vehicles]);

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
                                         licenseNumber={v.licensePlate}
                            />
                        ))
                    ) : (vehicles.map((vehicle: Vehicle) =>        
                        <VehicleCard key={vehicle.vehicleID}
                                     vehicleID={vehicle.vehicleID}
                                     vehicleType={vehicle.category}
                                     fuelType={vehicle.fuelType}
                                     status={vehicle.status}
                                     licenseNumber={vehicle.licensePlate}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}