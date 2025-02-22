import { Calendar } from "../components/ui/calendar"
import {useEffect, useState} from "react";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "../components/ui/table"

import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "../components/ui/card"
import {
    ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "../components/ui/chart"
import {TableContainer} from "@mui/material";
import CropModel from "../models/Crop.ts";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch} from "../store/Store.ts";
import {getAllCrops} from "../reducers/CropSlice.ts";
const chartData = [
    { month: "January", desktop: 186, mobile: 80 },
    { month: "February", desktop: 305, mobile: 200 },
    { month: "March", desktop: 237, mobile: 120 },
    { month: "April", desktop: 73, mobile: 190 },
    { month: "May", desktop: 209, mobile: 130 },
    { month: "June", desktop: 214, mobile: 140 },
    { month: "July", desktop: 214, mobile: 140 },
    { month: "August", desktop: 214, mobile: 140 },
    { month: "September", desktop: 54, mobile: 140 },
    { month: "October", desktop: 24, mobile: 140 },
    { month: "November", desktop: 14, mobile: 140 },
    { month: "December", desktop: 214, mobile: 140 },
]
const chartConfig = {
    desktop: {
        label: "Desktop",
        color: "#2563eb",
    },
    mobile: {
        label: "Mobile",
        color: "#60a5fa",
    },
} satisfies ChartConfig

export default function Dashboard() {

    const [date, setDate] = useState<Date | undefined>(new Date())
    const dispatch = useDispatch<AppDispatch>()
    useEffect(() => {
        dispatch(getAllCrops())
    }, []);
    const crops = useSelector(state => state.crop.cropList)
    
    return (
        <main className="main-border dashboard-container">
            <div className="dashboard-left">
                <div className="graph-and-progress">

                    <div className="dashboard-graph">
                        <div>
                            <Card>
                                <CardHeader>
                                    <CardTitle>Bar Chart - Multiple</CardTitle>
                                    <CardDescription>January - June 2024</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <ChartContainer config={chartConfig} style={{ height: 220, width: '100%'}}>
                                        <BarChart accessibilityLayer data={chartData} height={100}>
                                            <CartesianGrid vertical={false} />
                                            <XAxis
                                                dataKey="month"
                                                tickLine={false}
                                                tickMargin={10}
                                                axisLine={false}
                                                tickFormatter={(value) => value.slice(0, 3)}
                                            />
                                            <ChartTooltip
                                                cursor={false}
                                                content={<ChartTooltipContent indicator="dashed" />}
                                            />
                                            <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
                                            <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
                                        </BarChart>
                                    </ChartContainer>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                    <div className="custom-calender custom-layout">
                        <div className="w-fit">
                            <Calendar
                                mode="single"
                                selected={date}
                                onSelect={setDate}
                                className="rounded-md"
                            />
                        </div>
                    </div>
                </div>
                <div className="dashboard-task custom-layout">
                    <TableContainer style={{maxHeight: 490}}>
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead className="w-[100px]">Crop name</TableHead>
                                    <TableHead>Growth time</TableHead>
                                    <TableHead>Category</TableHead>
                                    <TableHead className="text-right">Market price</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {crops.map((c: CropModel, index: number) => (
                                    <TableRow key={index}>
                                        <TableCell className="font-medium">{c.cropName}</TableCell>
                                        <TableCell>{c.cropGrowthTime}</TableCell>
                                        <TableCell>{c.category}</TableCell>
                                        <TableCell className="text-right text-green-500">$ {c.price} </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>
            </div>
            <div className="dashboard-right">
                <div className="dashboard-calender custom-layout">
                    chat box
                </div>
                <div className="business-progress custom-layout">
                    circle analyzes
                </div>
                <div className="dashboard-right-bottom">
                    <div className="monthly-task custom-layout">
                        <h1 className="card-title !text-20p !text-gray-100 mb-7">Per month</h1>
                        <div className="monthly-task-header">
                            <div className="projects-count-stat">
                                <h1 id="count-stat" className="list-title !text-gray-100">9+</h1>
                                <label htmlFor="count-stat" className="card-label !text-gray-100">Projects</label>
                            </div>
                            <div className="project-month-stat">

                            </div>
                        </div>
                        <hr className="border border-gray-600"/>
                        <div className="monthly-task-body mt-6">
                            <div className="projects-count-stat">
                                <h1 id="count-stat" className="list-title !text-gray-100">20+</h1>
                                <label htmlFor="count-stat" className="card-label !text-gray-100">Cultivations</label>
                            </div>
                            <div className="project-month-stat">

                            </div>
                        </div>
                    </div>
                    <div className="blank custom-layout">
                        whether
                    </div>
                </div>
            </div>
        </main>
    )
}