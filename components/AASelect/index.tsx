"use client"

import { useDebounce } from 'use-debounce';
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { useState } from 'react';
import { NovuDataforAA, SearchAccountAggregators } from '@/api/aa_metrics';
import LineChart from '../LineChart';

export default function AASelect() {
    const [aaName, setAAName] = useState('Setu AA')
    const [aaGraph, setAAGraph] = useState('Setu AA')
    const [showDropdown, setShowDropdown] = useState(false);
    const [debounceName] = useDebounce(aaName, 370);

    const searchQuery = SearchAccountAggregators(debounceName)
    const aaTrendData = NovuDataforAA(aaGraph)

    const handleInputChange = (e: any) => {
        setAAName(e.target.value);
        setShowDropdown(true);
        // if (e.target.value !== '') {
        //     setShowDropdown(true);
        // } else {
        //     setShowDropdown(false);
        // }
    };


    const handleItemClick = (name: string) => {
        setAAName(name);
        setAAGraph(name)
        setShowDropdown(false);
    };
    return (
        <div className="grid grid-cols-[370px_1fr] gap-6 py-10">
            <div>
            <p className='w-[90%] font-bold text-lg text-slate-600 pb-2'>Search Account Aggregators:</p>
                <div className="relative border-2 border-slate-300 rounded-md">
                    <input
                        className='w-[290px] h-10 px-2 text-slate-600 outline-0'
                        placeholder='Search AA names here'
                        value={aaName}
                        onChange={handleInputChange}
                        onFocus={() => showDropdown && setShowDropdown(true)}
                    />
                    <MdOutlineKeyboardArrowDown size={29} color='gray' className="absolute top-2 right-2" />
                    {
                        showDropdown && (
                            <div className="absolute w-full mt-1 bg-white rounded-md shadow-lg z-10">
                                <div className='bg-white w-full rounded-md bg-slate-100'>
                                    {
                                        searchQuery.isLoading
                                            ?
                                            <p className='w-full p-2 text-slate-600 outline-0 hover:font-[500] hover:cursor-pointer hover:text-slate-800'>Loading...</p>
                                            :
                                            (searchQuery.data || []).map((name, index) => (
                                                <div
                                                    key={index}
                                                    onClick={() => handleItemClick(name)}
                                                    className='w-full hover:bg-slate-100 p-2 text-slate-600 outline-0 cursor-pointer hover:font-[500] hover:text-slate-800'
                                                >
                                                    {name}
                                                </div>
                                            ))
                                    }
                                </div>
                            </div>
                        )
                    }
                </div>
                <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">View the trend for the selected name.</p>
            </div>
            <div className='pl-10'>
                {
                    aaTrendData.isLoading ?
                    <p className='text-slate-400'>Loading ...</p>
                    :
                    <LineChart data={aaTrendData.data!}/>
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
        </div>
    )
}