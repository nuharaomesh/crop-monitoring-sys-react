import {BiSolidMessageSquareAdd} from "react-icons/bi";
import {useEffect, useState} from "react";

export default function CropCardRow(props) {

    const [preImg, setPreImg] = useState("")
    useEffect(() => {
        setPreImg(`data:image/jpeg;base64,${props.crop.img}`)
    }, [])
    function assignCrop() {
        props.setCropCode(props.crop.cropCode)
        props.selectOnClose()
    }

    return (
        <div className="crop-card-row relative group">
            <div className="card-row-header">
                <img src={preImg}
                     alt="Staff Profile"
                     className="w-full h-full object-cover"
                />
            </div>
            <div className="card-row-body">
                <div className="staff-card-name w-1/5">
                    <h1 className="text-sm font-semibold text-gray-800 truncate">{props.crop.cropName}</h1>
                </div>
                <div className="staff-card-role w-1/5">
                    <h1 className="text-sm text-gray-500 truncate">{props.crop.cropSeason}</h1>
                </div>
                <div className="staff-card-role w-1/5">
                    <h1 className="text-sm text-gray-500 truncate">{props.crop.category}</h1>
                </div>
                <div className="staff-card-status w-1/5">
                    <h1 className="text-sm text-green-500 truncate">{props.crop.cropGrowthTime}</h1>
                </div>
            </div>
            <div className="absolute right-4 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-300">
                <button className="flex w-10 h-10 rounded-full bg-green-500 text-white text-sm py-2 px-2 shadow hover:bg-green-600 justify-center items-center"
                        onClick={assignCrop}
                >
                    <BiSolidMessageSquareAdd color="white" size={16}/>
                </button>
            </div>
        </div>
    )
}