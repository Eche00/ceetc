import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function CreateEscrow() {
    const [mode, setMode] = useState("normal"); // normal | house
    const [selectedProperty, setSelectedProperty] = useState(null);

    const [form, setForm] = useState({
        title: "",
        amount: "",
        buyer: "",
        seller: "",
        account: "",
        code: "",
        description: "",
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Escrow Created:", form);
        window.location.reload(); // refresh after submit
    };

    const handleHouseCreate = () => {
        console.log("House Escrow Created:", selectedProperty);
        window.location.reload();
    };

    const houses = [
        { id: 1, title: "3-Bedroom Duplex", price: "₦45,000,000" },
        { id: 2, title: "Luxury Apartment", price: "₦60,000,000" },
    ];

    return (
        <div className="min-h-screen bg-gray-100 flex justify-center items-center md:p-6">
            <div className="md:bg-white bg-gray-100  md:shadow-xl rounded-2xl p-8 w-full max-w-2xl sm:space-y-6 space-y-4">
                <h1 className="text-3xl font-extrabold text-gray-800 text-center">Create Escrow</h1>
                <p className="text-gray-500 text-center sm:text-sm text-xs">Choose the type of escrow you want to create.</p>

                {/* MODE SELECT BUTTONS */}
                <div className="flex items-center justify-center bg-gray-300  w-fit mx-auto p-2 rounded-lg gap-4">
                    <button
                        onClick={() => { setMode("normal"); setSelectedProperty(null); }}
                        className={`${mode === "normal" ? "bg-white  gap-2 w-fit px-5 h-12 text-[#7065F0] md:text-[18px] text-[10px] font-bold  border-2 border-[#E0DEF7] rounded-md cursor-pointer" : " gap-2 w-fit px-5 h-12 text-[#100A55] md:text-[18px] text-[10px] font-bold cursor-pointer"
                            }`}
                    >
                        Normal Escrow
                    </button>


                    <button
                        onClick={() => { setMode("house"); setSelectedProperty(null); }}
                        className={`${mode === "house" ? "bg-white  gap-2 w-fit px-5 h-12 text-[#7065F0] md:text-[18px] text-[10px] font-bold  border-2 border-[#E0DEF7] rounded-md cursor-pointer" : " gap-2 w-fit px-5 h-12 text-[#100A55] md:text-[18px] text-[10px] font-bold cursor-pointer"}`}
                    >
                        House Escrow
                    </button>
                </div>

                {/* NORMAL ESCROW FORM */}
                {mode === "normal" && (
                    <form onSubmit={handleSubmit} className="space-y-5  gap-5 mt-4">
                        <div className="col-span-2">
                            <label className="block text-sm font-medium mb-1">Escrow Title</label>
                            <input type="text" name="title" value={form.title} onChange={handleChange} required className="w-full border-2 border-gray-400 rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-500" placeholder="Project Payment, Item Purchase, etc" />
                        </div>

                        <section className=" flex sm:flex-row flex-col sm:justify-between gap-4 w-full">
                            <div className="flex-1">
                                <label className="flex-1 text-sm font-medium mb-1">Amount</label>
                                <input type="number" name="amount" value={form.amount} onChange={handleChange} required className="w-full border-2 border-gray-400 rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-500" placeholder="Enter escrow amount" />
                            </div>

                            <div className="flex-1">
                                <label className="flex-1 text-sm font-medium mb-1">Reciever Email</label>
                                <input type="email" name="seller" value={form.seller} onChange={handleChange} required className="w-full border-2 border-gray-400 rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-500" placeholder="Enter seller email" />
                            </div>
                        </section>
                        <section className=" flex sm:flex-row flex-col sm:justify-between gap-4 w-full">
                            <div className="flex-1">
                                <label className="flex-1 text-sm font-medium mb-1">Reciever Account</label>
                                <input type="number" name="account" value={form.account} onChange={handleChange} required className="w-full border-2 border-gray-400 rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-500" placeholder="Enter reciever account" />
                            </div>

                            <div className="flex-1">
                                <label className="flex-1 text-sm font-medium mb-1">Reciever Escrow Code</label>
                                <input type="email" name="seller" value={form.seller} onChange={handleChange} required className="w-full border-2 border-gray-400 rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-500" placeholder="Enter reciever code" />
                            </div>
                        </section>

                        <div className="col-span-2">
                            <label className="block  text-sm font-medium mb-1">Description</label>
                            <textarea name="description" value={form.description} onChange={handleChange} required className="w-full border-2 border-gray-400 rounded-lg px-4 py-2 h-24 focus:ring-2 focus:ring-indigo-500" placeholder="Explain the purpose of the escrow" />
                        </div>

                        <button type="submit" className="w-full bg-[#7065F0] text-white py-3 rounded-xl font-medium text-lg hover:bg-[#7065F0] col-span-2">Create Escrow</button>
                    </form>
                )}

                {/* HOUSE ESCROW MODE */}
                {mode === "house" && (
                    <div className="mt-6 space-y-4">
                        <h2 className="text-xl font-bold text-gray-800 text-center">Select a House</h2>
                        <p className="text-center text-gray-500 text-sm">Choose a property to continue.</p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {houses.map((house) => (
                                <div
                                    key={house.id}
                                    onClick={() => setSelectedProperty(house)}
                                    className={`border rounded-xl p-4 shadow transition cursor-pointer ${selectedProperty?.id === house.id ? "border-[#7065F0] shadow-lg" : "hover:shadow-lg"
                                        }`}
                                >
                                    <div className="bg-gray-200 h-32 w-full rounded-lg mb-3"></div>
                                    <h3 className="font-semibold text-gray-800">{house.title}</h3>
                                    <p className="text-gray-500 text-sm">{house.price}</p>
                                </div>
                            ))}
                        </div>

                        {/* CREATE BUTTON AFTER SELECTION */}
                        {selectedProperty && (
                            <div className="flex justify-center mt-4">
                                <button
                                    onClick={handleHouseCreate}
                                    className="bg-[#7065F0] text-white py-3 px-10 rounded-xl font-medium text-lg hover:bg-[#7065F0]"
                                >
                                    Create Escrow
                                </button>
                            </div>
                        )}

                        <section className="flex items-center justify-center mt-5">
                            <Link to="/properties" className="py-4 px-16 bg-[#7065F0] text-white rounded-lg text-[18px] font-bold cursor-pointer">More</Link>
                        </section>
                    </div>
                )}
            </div>
        </div>
    );
}