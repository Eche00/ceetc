import React, { useState } from "react";
import { searchproperty } from "../../utils/svg";

function Transactions() {
    const [activeTab, setActiveTab] = useState("deposit");

    // Dummy transactions
    const dummyData = {
        deposit: [
            { amount: "$200", mode: "USDT", status: "Completed", date: "2025-01-12" },
            { amount: "$50", mode: "Bitcoin", status: "Pending", date: "2025-01-20" },
        ],
        withdrawal: [
            { amount: "$100", mode: "Bank Transfer", status: "Completed", date: "2025-02-03" },
        ],
        escrow_fund: [
            { amount: "$80", mode: "Wallet → Escrow", status: "Success", date: "2025-03-04" },
        ],
        debit_escrow: [
            { amount: "$120", mode: "Escrow Charge", status: "Debited", date: "2025-03-09" },
        ],
    };

    const rows = dummyData[activeTab] || [];

    return (
        <div className="min-h-screen bg-gray-100 py-10 px-4">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-2xl font-semibold text-gray-800 mb-6">Transaction Records</h1>

                <div className="bg-white shadow-lg rounded-2xl p-6">

                    {/* Tabs */}
                    <div className="flex flex-wrap gap-3 mb-6">
                        {[
                            { id: "deposit", label: "Deposit" },
                            { id: "withdrawal", label: "Withdrawal" },
                            { id: "escrow_fund", label: "Fund Escrow" },
                            { id: "debit_escrow", label: "Escrow Debit" },
                        ].map(tab => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`px-4 py-2 rounded-lg text-sm font-medium transition ${activeTab === tab.id
                                    ? "bg-[#7065F0] text-white"
                                    : "bg-gray-200 text-gray-600 hover:bg-gray-300"
                                    }`}
                            >
                                {tab.label}
                            </button>
                        ))}
                    </div>

                    {/* Table Controls */}
                    <div className="flex justify-between items-center mb-4">
                        <div className="md:flex hidden items-center gap-2">
                            <span className="text-gray-700 text-sm">Show</span>
                            <select className="border rounded-lg px-2 py-1 text-sm">
                                <option>5</option>
                                <option>10</option>
                                <option>20</option>
                            </select>
                            <span className="text-gray-700 text-sm">entries</span>
                        </div>

                        <div className=' max-w-[352px] w-full flex items-center gap-4 rounded-lg p-3 bg-[#F0EFFB] border-[1.5px] border-[#E0DEF7]'>
                            {searchproperty} <input type="text" placeholder='Search...' className='flex-1 placeholder:text-gra-700  outline-none' />
                        </div>
                    </div>

                    {/* Table */}
                    <div className="overflow-x-auto">
                        <table className="w-full border-collapse text-sm">
                            <thead>
                                <tr className="bg-gray-50 text-gray-600">
                                    <th className="py-3 px-4 text-left">Amount</th>
                                    <th className="py-3 px-4 text-left">Payment Mode</th>
                                    <th className="py-3 px-4 text-left">Status</th>
                                    <th className="py-3 px-4 text-left">Date Created</th>
                                </tr>
                            </thead>

                            <tbody>
                                {rows.length === 0 ? (
                                    <tr>
                                        <td
                                            colSpan="4"
                                            className="text-center py-6 text-gray-500"
                                        >
                                            No data available in table
                                        </td>
                                    </tr>
                                ) : (
                                    rows.map((t, index) => (
                                        <tr key={index} className="border-t border-gray-200">
                                            <td className="py-3 px-4">{t.amount}</td>
                                            <td className="py-3 px-4">{t.mode}</td>
                                            <td className="py-3 px-4">{t.status}</td>
                                            <td className="py-3 px-4">{t.date}</td>
                                        </tr>
                                    ))
                                )}
                            </tbody>
                        </table>
                    </div>

                    {/* Pagination */}
                    <div className="flex justify-end items-center gap-2 mt-4">
                        <button className="px-4 py-2 bg-gray-200 text-gray-600 rounded-lg hover:bg-gray-300">
                            Previous
                        </button>
                        <button className="px-4 py-2 bg-gray-200 text-gray-600 rounded-lg hover:bg-gray-300">
                            Next
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Transactions;
