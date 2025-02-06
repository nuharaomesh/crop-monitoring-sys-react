import CropCard from "../Cards/CropCard.tsx";
import {Link, Outlet} from "react-router-dom";
import {useSelector} from "react-redux";
import Searchbar from "../Searchbar.tsx";
import {useEffect, useState} from "react";
import {Crop} from "../../models/Crop.ts";

export default function CropList() {

    const crops = useSelector(state => state.crop)
    const [searchValue, setSearchValue] = useState('')
    const [filteredCrop, setFilteredCrop] = useState<Crop[]>([])

    useEffect(() => {
        setFilteredCrop(
            crops.filter((c: Crop) =>
                c.cropName.toLowerCase().includes(searchValue)
            )
        )
    }, [searchValue]);

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
                        <Searchbar searchValue={setSearchValue}/>
                    </div>
                    <div className="crop-list-items custom-list-cards">
                        {!(searchValue === "") ?
                            (filteredCrop.map((c: Crop)=> (
                                <CropCard key={c.cropCode}
                                          cropCode={c.cropCode}
                                          cropImg={c.cropImg}
                                          cropName={c.cropName}
                                          cropScientificName={c.cropScientificName}
                                          category={c.category}
                                          cropSeason={c.cropSeason}
                                          cropGrowthTime={c.cropGrowthTime}
                                />
                            ))) : (
                                crops.map(crop => (
                                    <CropCard key={crop.cropCode}
                                              cropCode={crop.cropCode}
                                              cropImg={crop.cropImg}
                                              cropName={crop.cropName}
                                              cropScientificName={crop.cropScientificName}
                                              category={crop.category}
                                              cropSeason={crop.cropSeason}
                                              cropGrowthTime={crop.cropGrowthTime}
                                    />
                            )
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