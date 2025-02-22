export default function CropLogCard(props) {
    return (
        <div className="log-card-row">
            <div className="flex flex-1 justify-between items-center">
                <div className="w-1/5">
                    <h1 className="text-sm font-semibold text-gray-800 truncate">{props.logCode}</h1>
                </div>
                <div className="w-1/5">
                    <h1 className="text-sm text-gray-500 truncate">{props.cropCode}</h1>
                </div>
                <div className="w-1/5">
                    <h1 className={`text-sm truncate
                        ${props.condition === "bad" ? 'text-red-500' : 'text-green-500'}`}
                    >{props.condition}</h1>
                </div>
                <div className="w-1/5">
                    <h1 className="text-sm truncate">{props.note}</h1>
                </div>
                <div className="w-1/5">
                    <h1 className="text-sm text-gray-500 truncate">{props.date}</h1>
                </div>
            </div>
        </div>
    )
}