export default function FieldLogCard(props) {
    return (
        <div className="log-card-row">
            <div className="flex flex-1 justify-between items-center">
                <div className="w-1/4">
                    <h1 className="text-sm font-semibold text-gray-800 truncate">{props.logCode}</h1>
                </div>
                <div className="w-1/4">
                    <h1 className="text-sm text-gray-500 truncate">{props.fieldCode}</h1>
                </div>
                <div className="w-1/4">
                    <h1 className="text-sm truncate">{props.observationDetails}</h1>
                </div>
                <div className="w-1/4">
                    <h1 className="text-sm text-gray-500 truncate">{props.date}</h1>
                </div>
            </div>
        </div>
    )
}