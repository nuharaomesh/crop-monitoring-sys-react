import UncultivatedFieldList from "../components/Field/UncultivatedFieldList.tsx";
import {Outlet} from "react-router-dom";

import { TrendingUp } from "lucide-react"
import { CartesianGrid, Line, LineChart, XAxis } from "recharts"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "../components/ui/card"
import {
    ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "../components/ui/chart"
const chartData = [
    { month: "January", desktop: 186, mobile: 80 },
    { month: "February", desktop: 305, mobile: 200 },
    { month: "March", desktop: 237, mobile: 120 },
    { month: "April", desktop: 73, mobile: 190 },
    { month: "May", desktop: 209, mobile: 130 },
    { month: "June", desktop: 214, mobile: 140 },
    { month: "July", desktop: 214, mobile: 140 },
    { month: "August", desktop: 124, mobile: 240 },
    { month: "September", desktop: 124, mobile: 240 },
    { month: "October", desktop: 164, mobile: 240 },
    { month: "November", desktop: 54, mobile: 240 },
    { month: "December", desktop: 404, mobile: 240 },
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

export default function Activity() {
    return (
        <section className="main-border activity-container">
            <div className="unCultivated-fields custom-layout">
                <UncultivatedFieldList/>
            </div>
            <div className="activity-details">
                <div className="activity-more">
                    <div className="blank-2 custom-layout">

                    </div>
                    <div className="used-props-details custom-layout">

                    </div>
                </div>
                <div className="cultivated-fields custom-layout">
                    <div>
                        <Card>
                            <CardHeader>
                                <CardTitle>Line Chart - Dots</CardTitle>
                                <CardDescription>January - June 2024</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <ChartContainer config={chartConfig}>
                                    <LineChart
                                        accessibilityLayer
                                        data={chartData}
                                        margin={{
                                            left: 12,
                                            right: 12,
                                        }}
                                    >
                                        <CartesianGrid vertical={false} />
                                        <XAxis
                                            dataKey="month"
                                            tickLine={false}
                                            axisLine={false}
                                            tickMargin={8}
                                            tickFormatter={(value) => value.slice(0, 3)}
                                        />
                                        <ChartTooltip
                                            cursor={false}
                                            content={<ChartTooltipContent hideLabel />}
                                        />
                                        <Line
                                            dataKey="desktop"
                                            type="natural"
                                            stroke="var(--color-desktop)"
                                            strokeWidth={2}
                                            dot={{
                                                fill: "var(--color-desktop)",
                                            }}
                                            activeDot={{
                                                r: 6,
                                            }}
                                        />
                                    </LineChart>
                                </ChartContainer>
                            </CardContent>
                            <CardFooter className="flex-col items-start gap-2 text-sm">
                                <div className="flex gap-2 font-medium leading-none">
                                    Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
                                </div>
                            </CardFooter>
                        </Card>
                    </div>
                </div>
            </div>
            <Outlet/>
        </section>
    )
}