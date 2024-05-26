export default function GraphLoading() {
    return (
        <div className="flex flex-col text-slate-400 rounded-md border-2 border-slate-200 p-4 aspect-[13/5]">
            <div className="flex-1 animate-pulse space-y-20">
                <div className="h-5 bg-slate-200 rounded"></div>
                <div className="h-5 bg-slate-200 rounded"></div>
                <div className="h-5 bg-slate-200 rounded"></div>
                <div className="h-5 bg-slate-200 rounded"></div>
                <div className="h-5 bg-slate-200 rounded"></div>
            </div>
        </div>
    )
}