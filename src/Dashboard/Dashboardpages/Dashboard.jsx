import React from "react";
import { Link } from "react-router-dom";

function Dashboard() {
    return (
        <div className="min-h-screen bg-gray-100 py-10 px-4">
            <div className="max-w-6xl mx-auto space-y-8">

                {/* Header */}
                <h1 className="text-2xl font-semibold text-gray-800">
                    Welcome, customer!
                </h1>

                {/* Main Wallet Section */}
                <div className="bg-white rounded-2xl shadow p-6 space-y-6">

                    {/* Wallet Title */}
                    <p className="text-sm font-semibold text-gray-500">WALLETS</p>

                    {/* Wallets */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* General Wallet */}
                        <div className="bg-gray-50 rounded-xl p-5 shadow-sm border border-gray-200">
                            <h2 className="text-lg font-semibold text-gray-700 mb-2">General Wallet</h2>

                            <p className="text-3xl font-bold text-gray-900">$0.00</p>
                            <p className="text-green-600 text-xs mt-1 flex items-baseline justify-between">↑ Up by $0.00
                                <Link to="/dashboard/deposit" className=" px-4 py-2 bg-[#7065F0] text-white rounded-lg hover:bg-[#7065F0] transition">
                                    Deposit
                                </Link>
                            </p>


                        </div>
                        {/* Escrow Wallet */}
                        <div className="bg-gray-50 rounded-xl p-5 shadow-sm border border-gray-200">
                            <h2 className="text-lg font-semibold text-gray-700 mb-2">Escrow Wallet</h2>

                            <p className="text-3xl font-bold text-gray-900">$0.00</p>
                            <p className="text-green-600 text-xs mt-1 flex items-baseline justify-between">↑ Up by $0.00
                                <button className=" px-4 py-2 bg-[#7065F0] text-white rounded-lg hover:bg-[#7065F0] transition">
                                    Fund
                                </button>
                            </p>

                        </div>



                    </div>


                    {/* Small Stats Boxes */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">

                        {/* Total Deposit */}
                        <div className="bg-gray-50 rounded-xl p-5 border border-gray-200 shadow-sm">
                            <p className="text-xs font-medium text-gray-500">TOTAL DEPOSIT</p>
                            <h3 className="text-2xl font-bold text-gray-800 mt-2">$0.00</h3>
                        </div>

                        {/* Total Withdrawal */}
                        <div className="bg-gray-50 rounded-xl p-5 border border-gray-200 shadow-sm">
                            <p className="text-xs font-medium text-gray-500">TOTAL WITHDRAWAL</p>
                            <h3 className="text-2xl font-bold text-gray-800 mt-2">$0.00</h3>
                        </div>

                        {/* Total Debit */}
                        <div className="bg-gray-50 rounded-xl p-5 border border-gray-200 shadow-sm">
                            <p className="text-xs font-medium text-gray-500">TOTAL DEBIT</p>
                            <h3 className="text-2xl font-bold text-gray-800 mt-2">$0.00</h3>
                        </div>

                    </div>
                </div>

                {/* Active Escrow */}
                <div className="bg-white rounded-2xl shadow p-6">
                    <h2 className="font-semibold text-lg text-gray-700">Active Escrow</h2>
                    <div className="mt-4 border rounded-xl p-6 text-center text-gray-600">
                        You do not have an active escrow at the moment.
                        <div className="mt-4">
                            <Link to="/dashboard/create-escrow" className=" w-full bg-[#7065F0] text-white py-2 px-4 rounded-xl font-medium text-sm hover:bg-[#7065F0] ">Create Escrow</Link>
                        </div>
                    </div>
                </div>

                {/* Recent Transactions */}
                <div className="bg-white rounded-2xl shadow p-6">
                    <h2 className="font-semibold text-lg text-gray-700 mb-4">Recent Transactions</h2>

                    <div className='w-fit flex rounded-lg p-2 bg-[#F0EFFB] border-[1.5px] border-[#E0DEF7]'>
                        <button className='bg-white px-5 h-10 text-[#7065F0] text-[18px] font-bold  border-2 border-[#E0DEF7] rounded-md cursor-pointer'> Deposit</button>
                        <button className='px-5 h-10 text-[#100A55] text-[18px] font-bold cursor-pointer'> Withdrawal</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
