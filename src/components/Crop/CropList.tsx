import CropCard from "../Cards/CropCard.tsx";
import {Link, Outlet} from "react-router-dom";
import {useSelector} from "react-redux";
import Searchbar from "../Searchbar.tsx";

export default function CropList() {

    const crops = useSelector(state => state.crop)

    return (
        <>
            <section className="custom-layout crop-list">
                <div className="crop-list-header">
                    <div className="list-header-title">
                        <h1 className="list-title">Manage your crops</h1>
                        <Link to='/crop/addCrop' className="custom-persist-btn">Add new</Link>
                    </div>
                    <p className="list-sub-title">search the crop you looking for</p>
                </div>
                <div className="crop-list-body">
                    <div className="crop-searchbar">
                        <Searchbar/>
                    </div>
                    <div className="crop-list-items custom-list-items">
                        {crops.map(crop => (
                            <CropCard key={crop.cropCode}
                                      cropCode={crop.cropCode}
                                      cropImg={crop.cropImg}
                                      cropName={crop.cropName}
                                      cropScientificName={crop.cropScientificName}
                                      category={crop.category}
                                      cropSeason={crop.cropSeason}
                                      cropGrowthTime={crop.cropGrowthTime}
                            />
                        ))}
                    </div>
                </div>
                <Outlet/>
            </section>
            <section className="custom-layout crop-graphs">
                <h1>Graps</h1>
            </section>
        </>
    )
}