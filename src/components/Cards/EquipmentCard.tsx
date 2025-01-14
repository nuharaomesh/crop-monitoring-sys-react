export default function EquipmentCard() {
    return (
        <>
            <div className="equipment-card">
                <div className="flex flex-1 justify-between items-center">
                    <div className="equipment-card-name w-1/5">
                        <h1 className="text-sm font-semibold text-gray-800 truncate">Wheel barrow</h1>
                    </div>
                    <div className="equipment-card-type w-1/5">
                        <h1 className="text-sm text-gray-500 truncate">tool</h1>
                    </div>
                    <div className="equipment-card-status w-1/5">
                        <h1 className="text-sm text-green-500 truncate">Available</h1>
                    </div>
                    <div className="equipment-card-count w-1/5">
                        <h1 className="text-sm text-gray-500 truncate">10</h1>
                    </div>
                </div>
            </div>
        </>
    )
}