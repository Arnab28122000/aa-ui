import { NovuDataforAA } from "@/api/aa_metrics";
import LineChart from "../LineChart";
import { FC } from "react";
import GraphLoading from "../GraphLoading";

const Graph: FC<{
    aaGraph: string
}> = ({ aaGraph }) => {
    const aaTrendData = NovuDataforAA(aaGraph)

    if (aaTrendData.isError) {
        return (
            <div className='pl-10'>
                <div className="flex flex-col items-center justify-center text-slate-400 rounded-md border-2 border-slate-200 p-4 aspect-[13/5]">
                    Oops! Something Went Wrong. Please try refreshing or contact the owner
                </div>
            </div>
        )
    }
    return (
        <div className='pl-10'>
            {
                aaTrendData.isLoading ?
                    <GraphLoading/>
                    :
                    <LineChart aaName={aaGraph} data={aaTrendData.data!} />
            }
            <div className="flex items-center gap-4 mt-4">
                <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-[#0077b6]" />
                    <span className="text-sm text-gray-500 dark:text-gray-400">NA</span>
                </div>
                <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-[#ffa500]" />
                    <span className="text-sm text-gray-500 dark:text-gray-400">Testing Phase</span>
                </div>
                <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-[#008000]" />
                    <span className="text-sm text-gray-500 dark:text-gray-400">Live</span>
                </div>
            </div>
            <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
                The line graph displays the trend for the selected Account Aggregator.
            </p>
        </div>
    )
}

export default Graph;