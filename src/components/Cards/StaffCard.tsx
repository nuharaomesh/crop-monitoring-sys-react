export default function StaffCard() {
    return (
        <>
            <div className="staff-card">
                <div className="staff-card-img w-12 h-12 flex-shrink-0 rounded-full overflow-hidden">
                    <img
                        src="../../../public/download.jpeg"
                        alt="Staff Profile"
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="flex flex-1 justify-between items-center">
                    <div className="staff-card-name w-1/5">
                        <h1 className="text-sm font-semibold text-gray-800 truncate">Omesh Nuhara</h1>
                    </div>
                    <div className="staff-card-role w-1/5">
                        <h1 className="text-sm text-gray-500 truncate">Labor</h1>
                    </div>
                    <div className="staff-card-status w-1/5">
                        <h1 className="text-sm text-green-500 truncate">Active</h1>
                    </div>
                    <div className="staff-card-phone w-1/5">
                        <h1 className="text-sm text-gray-500 truncate">0987654321</h1>
                    </div>
                    <div className="staff-card-email w-1/5">
                        <h1 className="text-sm text-gray-500 truncate">omesh@email.com</h1>
                    </div>
                </div>
            </div>
        </>
    )
}