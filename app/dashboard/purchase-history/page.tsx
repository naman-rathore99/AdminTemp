"use client"
import React, { useState } from 'react'
import { FaFilter, FaRedo } from 'react-icons/fa';

const History = () => {
    const [date, setDate] = useState<string>('14 Feb 2019');
    const [orderType, setOrderType] = useState<string>('All');
    const [orderStatus, setOrderStatus] = useState<string>('All');

    const resetFilters = () => {
        setDate('14 Feb 2019');
        setOrderType('All');
        setOrderStatus('All');
    };

    return (
        <div>
            <div className='w-full'>
                <div className='mb-4 text-white text-2xl'>
                    <h1>Purchase History</h1>
                </div>
                <div className="flex w-full items-center">

                    <div className="flex items-center gap-4 mb-6 justify-between bg-white shadow-md p-4 rounded-md">
                        <div className="flex items-center gap-4 text-gray-600 ">
                            <FaFilter className="text-lg" />
                            <span className="text-sm font-medium">Filter By</span>
                        </div>

                        <div className="relative">
                            <select
                                value={date}
                                onChange={(e) => setDate(e.target.value)}
                                className=" p-2 text-sm outline-none"
                            >
                                <option value="14 Feb 2019">14 Feb 2019</option>
                                <option value="15 Feb 2019">15 Feb 2019</option>
                            </select>
                        </div>

                        <div className="relative">
                            <select
                                value={orderType}
                                onChange={(e) => setOrderType(e.target.value)}
                                className=" p-2 text-sm outline-none"
                            >
                                <option value="All">Order Type</option>
                                <option value="Online">Online</option>
                                <option value="In-Store">In-Store</option>
                            </select>
                        </div>

                        {/* Order Status Dropdown */}
                        <div className="relative">
                            <select
                                value={orderStatus}
                                onChange={(e) => setOrderStatus(e.target.value)}
                                className=" p-2 text-sm outline-none"
                            >
                                <option value="All">Order Status</option>
                                <option value="Pending">Pending</option>
                                <option value="Delivered">Delivered</option>
                            </select>
                        </div>

                        {/* Reset Filter */}
                        <button
                            onClick={resetFilters}
                            className="flex items-center gap-1 text-red-500 text-sm hover:text-red-700 transition"
                        >
                            <FaRedo className="text-sm" />
                            <span>Reset Filter</span>
                        </button>
                    </div>
                </div>
                <div className="flex max-h-screen w-full items-center justify-center bg-white">
                    <div className="p-6 overflow-scroll w-full px-0">
                        <table className="w-full min-w-max table-auto text-left">
                            <thead>
                                <tr>
                                    <th className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4">
                                        <p className="block antialiased font-sans text-sm text-blue-gray-900 font-normal leading-none opacity-70">User Name</p>
                                    </th>
                                    <th className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4">
                                        <p className="block antialiased font-sans text-sm text-blue-gray-900 font-normal leading-none opacity-70">Name</p>
                                    </th>
                                    <th className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4">
                                        <p className="block antialiased font-sans text-sm text-blue-gray-900 font-normal leading-none opacity-70">Payment method</p>
                                    </th>
                                    <th className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4">
                                        <p className="block antialiased font-sans text-sm text-blue-gray-900 font-normal leading-none opacity-70">Date</p>
                                    </th>
                                    <th className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4">
                                        <p className="block antialiased font-sans text-sm text-blue-gray-900 font-normal leading-none opacity-70">Amount</p>
                                    </th>
                                    <th className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4">
                                        <p className="block antialiased font-sans text-sm text-blue-gray-900 font-normal leading-none opacity-70">Status</p>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>

                                    <td className="p-4">
                                        <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal">watsonandrw</p>
                                    </td>
                                    <td className="p-4">
                                        <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal">Andrew Watson</p>
                                    </td>
                                    <td className="p-4">
                                        <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal">Card</p>
                                    </td>
                                    <td className="p-4">
                                        <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal">24 dec</p>
                                    </td>
                                    <td className="p-4">
                                        <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal">$1,000</p>
                                    </td>
                                    <td className="p-4">
                                        <div className="w-max">
                                            <div className="relative grid items-center font-sans font-bold uppercase whitespace-nowrap select-none bg-red-500/20 text-red-900 py-2 px-6 text-xs rounded-md" style={{ opacity: 1 }}>
                                                <span className="">cancelled</span>
                                            </div>
                                        </div>
                                    </td>


                                </tr>
                                <tr>

                                    <td className="p-4">
                                        <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal">watsonandrw</p>
                                    </td>
                                    <td className="p-4">
                                        <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal">Andrew Watson</p>
                                    </td>
                                    <td className="p-4">
                                        <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal">Card</p>
                                    </td>
                                    <td className="p-4">
                                        <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal">24 dec</p>
                                    </td>
                                    <td className="p-4">
                                        <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal">$1,000</p>
                                    </td>
                                    <td className="p-4">
                                        <div className="w-max">
                                            <div className="relative grid items-center font-sans font-bold uppercase whitespace-nowrap select-none bg-red-500/20 text-red-900 py-2 px-6 text-xs rounded-md" style={{ opacity: 1 }}>
                                                <span className="">cancelled</span>
                                            </div>
                                        </div>
                                    </td>


                                </tr>
                                <tr>

                                    <td className="p-4">
                                        <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal">watsonandrw</p>
                                    </td>
                                    <td className="p-4">
                                        <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal">Andrew Watson</p>
                                    </td>
                                    <td className="p-4">
                                        <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal">Card</p>
                                    </td>
                                    <td className="p-4">
                                        <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal">24 dec</p>
                                    </td>
                                    <td className="p-4">
                                        <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal">$1,000</p>
                                    </td>
                                    <td className="p-4">
                                        <div className="w-max">
                                            <div className="relative grid items-center font-sans font-bold uppercase whitespace-nowrap select-none bg-red-500/20 text-red-900 py-2 px-6 text-xs rounded-md" style={{ opacity: 1 }}>
                                                <span className="">cancelled</span>
                                            </div>
                                        </div>
                                    </td>


                                </tr>
                                <tr>

                                    <td className="p-4">
                                        <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal">watsonandrw</p>
                                    </td>
                                    <td className="p-4">
                                        <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal">Andrew Watson</p>
                                    </td>
                                    <td className="p-4">
                                        <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal">Card</p>
                                    </td>
                                    <td className="p-4">
                                        <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal">24 dec</p>
                                    </td>
                                    <td className="p-4">
                                        <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal">$1,000</p>
                                    </td>
                                    <td className="p-4">
                                        <div className="w-max">
                                            <div className="relative grid items-center font-sans font-bold uppercase whitespace-nowrap select-none bg-red-500/20 text-red-900 py-2 px-6 text-xs rounded-md" style={{ opacity: 1 }}>
                                                <span className="">cancelled</span>
                                            </div>
                                        </div>
                                    </td>


                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default History