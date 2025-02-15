import StaffList from "../../components/Staff/StaffList.tsx";
import VehicleList from "../../components/Vehicle/VehicleList.tsx";
import * as React from "react"
import { Label, Pie, PieChart } from "recharts"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "../../components/ui/card"
import {
    ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "../../components/ui/chart"
import {useDispatch, useSelector} from "react-redux";
import StaffModel from "../../models/Staff.ts";
import {useEffect, useState} from "react";
import {AppDispatch, RootState} from "../../store/Store.ts";
import {Outlet} from "react-router-dom";
import { getAllVehicles, getVehicleCount } from "../../reducers/VehicleSlice.ts";

const chartConfig = {} satisfies ChartConfig
interface vehicleGraphData {
    vehicle: string
    count: number
    fill: string
}
interface staffGraphData {
    staff: string
    count: number
    fill: string
}

export default function Staff() {

    const dispatch = useDispatch<AppDispatch>()    
    useEffect(() => {
        dispatch(getVehicleCount())
    }, [dispatch])

    const [vehicleGraphData, setVehicleGraphData] = useState<vehicleGraphData []>([])
    const [staffGraphData, setStaffGraphData] = useState<staffGraphData []>([])
    const vehicles = useSelector((state: RootState) => state.vehicle.vehicleCountList)
    const vehicleList = useSelector(state => state.vehicle.vehicleList)
    const staffs: StaffModel[] = useSelector((state: RootState): StaffModel[] => state.staff)

    useEffect(() => {    
        setVehicleGraphData(
            vehicles.map((v , index: number)=> ({
                vehicle: v.category,
                count: v._count.category,
                fill: `${index % 2 === 0 ? "#2563eb" : "#60a5fa" }`
                
            }))
        )
        setStaffGraphData(
            staffs.map((s: StaffModel, index: number)=> ({
                staff: s.role,
                count: 10,
                fill: `${index % 2 === 0 ? "#2563eb" : "#60a5fa" }`
            }))
        )
    }, [staffs, vehicles, vehicleList, dispatch]);

    const totalVehicleCount = React.useMemo(() => {
        return vehicleGraphData.reduce((acc, curr) => acc + curr.count, 0)
    }, [vehicleGraphData])

    const totalStaffCount = React.useMemo(() => {
        return staffGraphData.reduce((acc, curr) => acc + curr.count, 0)
    }, [staffGraphData])

    return (
        <section className="main-border staff-container">
            <div className="staff-container-left">
                <div className="staff-holder custom-layout">
                    <StaffList/>
                </div>
            </div>
            <div className="staff-container-right">
                <div className="staff-content-header custom-layout">
                    <div className="staff-detail">
                        <Card className="flex flex-col">
                            <CardHeader className="items-center pb-0">
                                <CardTitle>Staff status</CardTitle>
                                <CardDescription>{new Date().getFullYear()}</CardDescription>
                            </CardHeader>
                            <CardContent className="flex-1 pb-0">
                                <ChartContainer
                                    config={chartConfig}
                                    className="mx-auto aspect-square max-h-[250px]"
                                >
                                    <PieChart>
                                        <ChartTooltip
                                            cursor={false}
                                            content={<ChartTooltipContent hideLabel />}
                                        />
                                        <Pie
                                            data={staffGraphData}
                                            dataKey="count"
                                            nameKey="staff"
                                            innerRadius={60}
                                            strokeWidth={5}
                                        >
                                            <Label
                                                content={({ viewBox }) => {
                                                    if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                                                        return (
                                                            <text
                                                                x={viewBox.cx}
                                                                y={viewBox.cy}
                                                                textAnchor="middle"
                                                                dominantBaseline="middle"
                                                            >
                                                                <tspan
                                                                    x={viewBox.cx}
                                                                    y={viewBox.cy}
                                                                    className="fill-foreground text-3xl font-bold"
                                                                >
                                                                    {totalStaffCount.toLocaleString()}
                                                                </tspan>
                                                                <tspan
                                                                    x={viewBox.cx}
                                                                    y={(viewBox.cy || 0) + 24}
                                                                    className="fill-muted-foreground"
                                                                >
                                                                    Staff
                                                                </tspan>
                                                            </text>
                                                        )
                                                    }
                                                }}
                                            />
                                        </Pie>
                                    </PieChart>
                                </ChartContainer>
                            </CardContent>
                        </Card>
                    </div>
                    <div className="vehicle-detail">
                        <Card className="flex flex-col">
                            <CardHeader className="items-center pb-0">
                                <CardTitle>Vehicle Status</CardTitle>
                                <CardDescription>{new Date().getFullYear()}</CardDescription>
                            </CardHeader>
                            <CardContent className="flex-1 pb-0">
                                <ChartContainer
                                    config={chartConfig}
                                    className="mx-auto aspect-square max-h-[250px]"
                                >
                                    <PieChart>
                                        <ChartTooltip
                                            cursor={false}
                                            content={<ChartTooltipContent hideLabel />}
                                        />
                                        <Pie
                                            data={vehicleGraphData}
                                            dataKey="count"
                                            nameKey="vehicle"
                                            innerRadius={60}
                                            strokeWidth={5}
                                        >
                                            <Label
                                                content={({ viewBox }) => {
                                                    if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                                                        return (
                                                            <text
                                                                x={viewBox.cx}
                                                                y={viewBox.cy}
                                                                textAnchor="middle"
                                                                dominantBaseline="middle"
                                                            >
                                                                <tspan
                                                                    x={viewBox.cx}
                                                                    y={viewBox.cy}
                                                                    className="fill-foreground text-3xl font-bold"
                                                                >
                                                                    {totalVehicleCount.toLocaleString()}
                                                                </tspan>
                                                                <tspan
                                                                    x={viewBox.cx}
                                                                    y={(viewBox.cy || 0) + 24}
                                                                    className="fill-muted-foreground"
                                                                >
                                                                    Vehicles
                                                                </tspan>
                                                            </text>
                                                        )
                                                    }
                                                }}
                                            />
                                        </Pie>
                                    </PieChart>
                                </ChartContainer>
                            </CardContent>
                        </Card>
                    </div>
                </div>
                <div className="vehicle-holder custom-layout">
                    <VehicleList/>
                </div>
            </div>
            <Outlet/>
        </section>
    )
}