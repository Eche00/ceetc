import React from "react";

function Deposit() {
    return (
        <div className="min-h-screen bg-gray-100 py-10 px-4">
            <div className="max-w-5xl mx-auto space-y-8">

                {/* Page Title */}
                <h1 className="text-2xl font-semibold text-gray-800">
                    Fund Your Account
                </h1>

                {/* Main Card */}
                <div className="bg-white shadow-lg rounded-2xl p-6 md:p-8">

                    {/* Enter Amount */}
                    <h2 className="text-sm font-semibold text-gray-700 mb-2">
                        Enter Amount
                    </h2>

                    <input
                        type="number"
                        placeholder="Enter Amount"
                        className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-gray-700"
                    />

                    {/* Flex: Payment Methods + Total Deposit */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">

                        {/* Payment Methods */}
                        <div className="md:col-span-2 space-y-4">

                            <h3 className="text-sm font-semibold text-gray-700">
                                Choose payment method from the list below
                            </h3>

                            {/* Method Cards */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                                {/* USDT */}
                                <div className="flex items-center justify-between border rounded-xl p-4 bg-gray-50 hover:bg-gray-100 transition">
                                    <div className="flex items-center gap-3">
                                        <img
                                            src="https://cryptologos.cc/logos/tether-usdt-logo.png"
                                            alt="USDT"
                                            className="w-6 h-6"
                                        />
                                        <p className="font-medium text-gray-700">USDT</p>
                                    </div>

                                    <input type="radio" name="payment" className="w-4 h-4" />
                                </div>

                                {/* Ethereum */}
                                <div className="flex items-center justify-between border rounded-xl p-4 bg-gray-50 hover:bg-gray-100 transition">
                                    <div className="flex items-center gap-3">
                                        <img
                                            src="https://cryptologos.cc/logos/ethereum-eth-logo.png"
                                            alt="Ethereum"
                                            className="w-6 h-6"
                                        />
                                        <p className="font-medium text-gray-700">Ethereum</p>
                                    </div>

                                    <input type="radio" name="payment" className="w-4 h-4" />
                                </div>

                                {/* Bitcoin */}
                                <div className="flex items-center justify-between border rounded-xl p-4 bg-gray-50 hover:bg-gray-100 transition">
                                    <div className="flex items-center gap-3">
                                        <img
                                            src="https://cryptologos.cc/logos/bitcoin-btc-logo.png"
                                            alt="Bitcoin"
                                            className="w-6 h-6"
                                        />
                                        <p className="font-medium text-gray-700">Bitcoin</p>
                                    </div>

                                    <input type="radio" name="payment" className="w-4 h-4" />
                                </div>

                            </div>
                        </div>

                        {/* Total Deposit Box */}
                        <div className="border rounded-2xl bg-gray-50 p-5 flex flex-col justify-between">
                            <div>
                                <p className="text-xs font-medium text-gray-500">TOTAL DEPOSIT</p>
                                <h3 className="text-3xl font-bold text-gray-700 mt-2">$0.00</h3>
                            </div>

                            <button className="mt-6 text-[#7065F0] font-medium hover:underline text-sm flex items-center gap-1">
                                View deposit history →
                            </button>
                        </div>

                    </div>

                    {/* Proceed Button */}
                    <div className="mt-10">
                        <button className="w-full bg-[#7065F0] text-white py-3 rounded-xl text-lg font-medium hover:bg-[#5a54c6] transition">
                            Proceed to Payment
                        </button>
                    </div>

                </div>

            </div>
        </div>
    );
}

export default Deposit;
