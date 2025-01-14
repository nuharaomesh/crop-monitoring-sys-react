export default function VehicleCard() {
    return (
        <>
            <div className="vehicle-card">
                <div className="flex flex-1 justify-between items-center">
                    <div className="vehicle-card-type w-1/5">
                        <h1 className="text-sm font-semibold text-gray-800 truncate">Van</h1>
                    </div>
                    <div className="vehicle-card-fuel-type w-1/5">
                        <h1 className="text-sm text-gray-500 truncate">Petrol</h1>
                    </div>
                    <div className="vehicle-card-status w-1/5">
                        <h1 className="text-sm text-green-500 truncate">Available</h1>
                    </div>
                    <div className="vehicle-card-licence-no w-1/5">
                        <h1 className="text-sm text-gray-500 truncate">0987654321</h1>
                    </div>
                </div>
            </div>
        </>
    )
}