import CropCard from "../Cards/CropCard.tsx";
import { BsSearch } from "react-icons/bs";
import {Link, Outlet} from "react-router-dom";
import {useSelector} from "react-redux";

export default function CropList() {

    const crops = useSelector(state => state.crop)

    return (
        <section className="custom-layout crop-list">
            <div className="crop-list-header">
                <div className="crop-list-header-title">
                    <h1 className="crop-list-title">Manage your crops</h1>
                    <Link to='/crop/addCrop' className="custom-persist-btn">Add new</Link>
                </div>
                <p className="crop-list-sub-title">search the crop you looking for</p>
            </div>
            <div className="crop-list-body">
                <div className="crop-search-bar">
                    <form action="" className="custom-searchbar">
                        <input type="search" placeholder="Search" className="search-input focus:outline-none"/>
                        <button type="button" className="search-btn"><BsSearch color="gray"/></button>
                    </form>
                </div>
                <div className="crop-list-items">
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
    )
}