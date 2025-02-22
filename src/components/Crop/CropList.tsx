import CropCard from "../Cards/CropCard.tsx";
import {Link, Outlet} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import Searchbar from "../Searchbar.tsx";
import {useEffect, useState} from "react";
import CropModel from "../../models/Crop.ts";
import { PolarAngleAxis, PolarGrid, Radar, RadarChart } from "recharts"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "../ui/card"
import {
    ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "../ui/chart"
import { Bar, BarChart, CartesianGrid, LabelList, XAxis, YAxis } from "recharts"
import {getAllCropCount, getAllCrops} from "../../reducers/CropSlice.ts";
import { AppDispatch } from "../../store/Store.ts";

const chartData2 = [
    { month: "January", desktop: 186 },
    { month: "February", desktop: 305 },
    { month: "March", desktop: 237 },
    { month: "April", desktop: 73 },
    { month: "May", desktop: 209 },
    { month: "June", desktop: 114 },
]
const chartConfig2 = {
    desktop: {
        label: "Desktop",
        color: "#2563eb",
    },
    label: {
        color: "white",
    },
} satisfies ChartConfig

const chartData = [
    { cropCategory: "Cereal", count: 86 },
    { cropCategory: "Nuts", count: 305 },
    { cropCategory: "Fruits", count: 237 },
    { cropCategory: "April", count: 273 },
    { cropCategory: "May", count: 209 },
    { cropCategory: "June", count: 114 },
]
const chartConfig = {} satisfies ChartConfig

interface cropCategoryData {
    cropCategory: string,
    count: number
}

export default function CropList() {

    const [cropCategoryData, setCropCategoryData] = useState<cropCategoryData []>([])
    const cropCount = useSelector(state => state.crop.cropCountList)
    const crops = useSelector(state => state.crop.cropList)
    const [searchValue, setSearchValue] = useState('')
    const [filteredCrop, setFilteredCrop] = useState<CropModel[]>([])
    const dispatch = useDispatch<AppDispatch>()
    useEffect(() => {
        dispatch(getAllCrops())
        dispatch(getAllCropCount())
    }, [dispatch])
    useEffect(() => {
        setFilteredCrop(
            crops.filter((c: CropModel) =>
                c.cropName.toLowerCase().includes(searchValue)
            )
        )
    }, [searchValue, crops]);
    useEffect(() => {
        setCropCategoryData(
            cropCount.map(c => ({
                cropCategory: c.category,
                count: c._count.category,
            }))
        )
    }, [cropCount, dispatch]);

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
                            (filteredCrop.map((c: CropModel)=> (
                                <CropCard key={c.cropCode}
                                          cropCode={c.cropCode}
                                          cropImg={c.img}
                                          cropName={c.cropName}
                                          cropScientificName={c.cropScientificName}
                                          category={c.category}
                                          cropSeason={c.cropSeason}
                                          cropGrowthTime={c.cropGrowthTime}
                                />
                            ))) : (
                                crops.map((crop: CropModel) => (
                                    <CropCard key={crop.cropCode}
                                              cropCode={crop.cropCode}
                                              cropImg={crop.img}
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
            <section className="crop-graphs">
                <div className="crop-graphs-header custom-layout">
                    <Card>
                        <CardHeader className="items-center">
                            <CardTitle>Crop categories</CardTitle>
                            <CardDescription>
                                Showing most type of categories that you cultivate
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="pb-0">
                            <ChartContainer
                                config={chartConfig}
                                className="mx-auto aspect-square max-h-[250px]"
                            >
                                <RadarChart data={cropCategoryData}>
                                    <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
                                    <PolarAngleAxis dataKey="cropCategory" />
                                    <PolarGrid />
                                    <Radar
                                        dataKey="count"
                                        fill="var(--color-desktop)"
                                        fillOpacity={0.6}
                                        dot={{
                                            r: 4,
                                            fillOpacity: 1,
                                        }}
                                    />
                                </RadarChart>
                            </ChartContainer>
                        </CardContent>
                    </Card>
                </div>
                <div className="crop-graphs-body custom-layout">
                    crop market places prices
                    <Card>
                        <CardHeader>
                            <CardTitle>Bar Chart - Custom Label</CardTitle>
                            <CardDescription>January - June 2024</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <ChartContainer config={chartConfig2}>
                                <BarChart
                                    accessibilityLayer
                                    data={chartData2}
                                    layout="vertical"
                                    margin={{
                                        right: 16,
                                    }}
                                >
                                    <CartesianGrid horizontal={false} />
                                    <YAxis
                                        dataKey="month"
                                        type="category"
                                        tickLine={false}
                                        tickMargin={10}
                                        axisLine={false}
                                        tickFormatter={(value) => value.slice(0, 3)}
                                        hide
                                    />
                                    <XAxis dataKey="desktop" type="number" hide />
                                    <ChartTooltip
                                        cursor={false}
                                        content={<ChartTooltipContent indicator="line" />}
                                    />
                                    <Bar
                                        dataKey="desktop"
                                        layout="vertical"
                                        fill="var(--color-desktop)"
                                        radius={4}
                                    >
                                        <LabelList
                                            dataKey="month"
                                            position="insideLeft"
                                            offset={8}
                                            className="fill-[--color-label]"
                                            fontSize={12}
                                        />
                                        <LabelList
                                            dataKey="desktop"
                                            position="right"
                                            offset={8}
                                            className="fill-foreground"
                                            fontSize={12}
                                        />
                                    </Bar>
                                </BarChart>
                            </ChartContainer>
                        </CardContent>
                    </Card>
                </div>
            </section>
        </>
    )
}