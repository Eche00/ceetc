import React from "react";

function EscrowManagement() {
    const escrows = [
        {
            id: "ESC12345",
            type: "Normal Escrow",
            amount: "$150",
            buyer: "User A",
            seller: "User B",
            status: "Pending",
        },
        {
            id: "PROP99887",
            type: "Property Escrow",
            amount: "$3000",
            buyer: "John Doe",
            seller: "Real Estate Co.",
            status: "Pending",
        },
    ];

    return (
        <div className="min-h-screen bg-gray-100 py-10 px-4">
            <div className="max-w-6xl mx-auto">

                <h1 className="text-2xl font-semibold text-gray-800 mb-6">
                    Escrow Management
                </h1>

                <div className="bg-white shadow-lg rounded-2xl p-6">

                    <div className="overflow-x-auto">
                        <table className="w-full border-collapse text-sm">
                            <thead>
                                <tr className=" text-gray-600">
                                    <th className="py-3 px-4 text-left">Escrow ID</th>
                                    <th className="py-3 px-4 text-left">Type</th>
                                    <th className="py-3 px-4 text-left">Amount</th>
                                    <th className="py-3 px-4 text-left">Buyer</th>
                                    <th className="py-3 px-4 text-left">Seller</th>
                                    <th className="py-3 px-4 text-left">Status</th>
                                    <th className="py-3 px-4 text-left">Actions</th>
                                </tr>
                            </thead>

                            <tbody>
                                {escrows.map((e, i) => (
                                    <tr key={i} className="border-t border-gray-200 text-gray-500 hover:bg-gray-50">
                                        <td className="py-3 px-4">{e.id}</td>
                                        <td className="py-3 px-4">{e.type}</td>
                                        <td className="py-3 px-4">{e.amount}</td>
                                        <td className="py-3 px-4">{e.buyer}</td>
                                        <td className="py-3 px-4">{e.seller}</td>
                                        <td className="py-3 px-4">{e.status}</td>

                                        <td className="py-3 px-4 flex gap-2">
                                            <button className="px-3 py-1 bg-red-500 text-white rounded-lg text-xs hover:bg-red-600">
                                                Cancel
                                            </button>

                                            <button className="px-3 py-1 bg-green-600 text-white rounded-lg text-xs hover:bg-green-700">
                                                Mark as Paid
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default EscrowManagement;
