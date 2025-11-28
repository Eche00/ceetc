import React from "react";

function Profile() {
    return (
        <div className="min-h-screen bg-gray-100 p-6 md:p-10">
            {/* Page Header */}
            <h1 className="text-3xl font-semibold text-gray-900 mb-8">
                Account Settings
            </h1>

            {/* PROFILE CARD */}
            <div className="bg-white shadow-lg rounded-xl p-8 mb-10">
                {/* Top Section */}
                <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-10">
                    <div className="flex items-center gap-4">
                        <div className="w-20 h-20 rounded-full bg-blue-200 flex items-center justify-center text-2xl font-bold text-blue-700">
                            C
                        </div>
                        <div>
                            <h2 className="text-xl font-semibold text-gray-800">Customer Name</h2>
                            <p className="text-gray-500 text-sm">customer@gmail.com</p>
                        </div>
                    </div>

                    <button className="mt-4 md:mt-0 px-5 py-2 bg-[#7065F0] text-white rounded-lg hover:bg-[#5a54c6]">
                        Logout
                    </button>
                </div>

                {/* Tabs */}
                <div className="flex gap-6 border-b pb-4 mb-8">
                    <button className="px-5 py-2 bg-[#7065F0] text-white rounded-lg shadow-md">
                        Personal Settings
                    </button>


                </div>

                {/* FORM GRID */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                    {/* Fullname */}
                    <div>
                        <label className="text-sm font-medium text-gray-700">Full Name</label>
                        <input
                            type="text"
                            defaultValue="Customer"
                            className="w-full mt-1 p-3 border rounded-lg bg-gray-50 focus:ring-2 focus:ring-[#7065F0]"
                        />
                    </div>

                    {/* Email */}
                    <div>
                        <label className="text-sm font-medium text-gray-700">Email Address</label>
                        <input
                            type="email"
                            defaultValue="customer@gmail.com"
                            className="w-full mt-1 p-3 border rounded-lg bg-gray-50 focus:ring-2 focus:ring-[#7065F0]"
                        />
                    </div>

                    {/* Phone */}
                    <div>
                        <label className="text-sm font-medium text-gray-700">Phone Number</label>
                        <input
                            type="text"
                            defaultValue="2095156243"
                            className="w-full mt-1 p-3 border rounded-lg bg-gray-50 focus:ring-2 focus:ring-[#7065F0]"
                        />
                    </div>

                    {/* DOB */}
                    <div>
                        <label className="text-sm font-medium text-gray-700">Date of Birth</label>
                        <input
                            type="date"
                            className="w-full mt-1 p-3 border rounded-lg bg-gray-50 focus:ring-2 focus:ring-[#7065F0]"
                        />
                    </div>

                    {/* COUNTRY */}
                    <div>
                        <label className="text-sm font-medium text-gray-700">Country</label>
                        <select className="w-full mt-1 p-3 border rounded-lg bg-gray-50 focus:ring-2 focus:ring-[#7065F0]">
                            <option>United States of America</option>
                            <option>United Kingdom</option>
                            <option>Canada</option>
                            <option>Germany</option>
                            <option>France</option>
                            <option>Australia</option>
                            <option>United Arab Emirates</option>
                            <option>Singapore</option>
                            <option>South Africa</option>
                            <option>Netherlands</option>
                            <option>Switzerland</option>
                            <option>China</option>
                            <option>Japan</option>
                            <option>Brazil</option>
                            <option>India</option>
                            <option>Mexico</option>
                            <option>Italy</option>
                            <option>Spain</option>
                            <option>Saudi Arabia</option>
                            <option>Turkey</option>
                        </select>
                    </div>

                    {/* Address */}
                    <div className="md:col-span-2">
                        <label className="text-sm font-medium text-gray-700">Address</label>
                        <textarea
                            placeholder="Enter full address"
                            className="w-full mt-1 p-3 border rounded-lg bg-gray-50 focus:ring-2 focus:ring-[#7065F0] h-24"
                        />
                    </div>
                </div>

                {/* Update Button */}
                <div className="mt-10">
                    <button className="bg-[#7065F0] text-white px-8 py-3 rounded-lg shadow hover:bg-blue-700 transition">
                        Update Profile
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Profile;
