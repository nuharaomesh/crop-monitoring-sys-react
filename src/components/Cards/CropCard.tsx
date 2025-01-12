import { BsFillPenFill } from "react-icons/bs";

export default function CropCard() {
    return (
        <div className="crop-card">
            <div className="crop-card-header">
                <img src="../../../public/download.jpeg" alt="" className="crop-card-img"/>
                <button className="card-update-btn crop-update-btn-pos"><BsFillPenFill color="green" size="18" /></button>
            </div>
            <div className="crop-card-body">
                <h1 className="card-title">Triticum <span className="card-sub-title">( wheat )</span></h1>
                <div>
                    <label className="card-label">category</label>
                    <h1 className="font-semibold text-green-600 text-20p">Cereal grasses</h1>
                </div>
                <div className="flex gap-4">
                    <div>
                        <label className="card-label">season</label>
                        <h1 className="season-title">Rabi season</h1>
                    </div>
                    <div className="">
                        <label className="card-label">time</label>
                        <h1 className="crop-card-time">100 - 120 days</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}