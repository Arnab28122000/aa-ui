import Link from "next/link";
import { IoIosAnalytics } from "react-icons/io";
import { VscGraphLine } from "react-icons/vsc";

export default function AppBar(){
    return(
        <div className="flex w-full flex-row mb-5 max-h-[10vh] h-[8vh] w-full shadow-sm items-center justify-between">
            <Link href={"/"}>
            <div className="flex flex-row items-center">
                <div>
                    <IoIosAnalytics size={31} color="rgba(37, 99, 235, 0.9)"/>
                </div>
                <p className="text-xl sm:text-3xl ml-2 font-bold text-gray-600">AA
                <span className="text-xl sm:text-3xl font-bold text-blue-600"> Availability</span></p>
            </div>
            </Link>
            
            
            <div className="flex flex-row">
            
                <div className="ml-3 mr-2 text-md lg:text-lg font-[500] bg-gradient-to-r from-blue-700 to-indigo-500 via-pink-500 inline-block text-transparent bg-clip-text">
                    Timeseries
                </div>
                <p className="text-lg text-slate-600 font-[500]">Data</p>          
                <div className="ml-2">
                <VscGraphLine size={25} color="#808080"/>
                </div>  
            </div>
        </div>
    )
}