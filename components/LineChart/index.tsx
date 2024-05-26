"use client"

import { INovuAATrend } from "@/api/aa_metrics"
import { ResponsiveLine } from "@nivo/line"
import { FC } from "react"

interface ILineChart{
    data: INovuAATrend,
    aaName: string
}

const LineChart: FC<ILineChart> = ({ data, aaName}) => {
    return (
        <div className="flex flex-col rounded-md border-2 border-slate-200 p-4">
            <p className="text-slate-500 font-[500] text-xl mr-4"><span className="text-blue-500 font-bold mr-1">{aaName}</span>Availability Trend</p>
        <div className="aspect-[13/5]">
      <ResponsiveLine
        data={data.data}
        margin={{ top: 10, right: 10, bottom: 40, left: 40 }}
        xScale={{
          type: "point",
        }}
        yScale={{
          type: "linear",
        }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
            tickSize: 0,
            tickPadding: 16,
            tickRotation: 0,
            legend: 'Date',
            legendOffset: 36,
            legendPosition: 'middle',
        }}
        axisLeft={{
            tickSize: 0,
            tickValues: 15,
            tickPadding: 10,
            tickRotation: 0,
            legend: 'Number of Entities',
            legendOffset: -35,
            legendPosition: 'middle',
        }}
        colors={["#0077b6", "#ffa500", "#008000"]}
        pointSize={6}
        useMesh={true}
        gridYValues={6}
        theme={{
          tooltip: {
            chip: {
              borderRadius: "9999px",
            },
            container: {
              fontSize: "12px",
              textTransform: "capitalize",
              color: '#000',
              borderRadius: "6px",
            },
          },
          grid: {
            line: {
              stroke: "#f3f4f6",
            },
          },
        }}
        role="application"
      />
      </div>
    </div>
    )
}

export default LineChart