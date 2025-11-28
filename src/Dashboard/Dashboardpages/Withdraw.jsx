import React, { useState, useEffect } from "react";

export default function Withdraw() {
    const [step, setStep] = useState(0); // NEW: password step
    const [card, setCard] = useState({ number: "", expiry: "", cvv: "" });
    const [unlockTime, setUnlockTime] = useState(null);
    const [remaining, setRemaining] = useState(0);

    const handleCardSubmit = (e) => {
        e.preventDefault();
        const twoWeeks = 14 * 24 * 60 * 60 * 1000;
        const target = Date.now() + twoWeeks;
        setUnlockTime(target);
        setStep(2);
    };

    useEffect(() => {
        if (!unlockTime) return;

        const interval = setInterval(() => {
            const diff = unlockTime - Date.now();
            setRemaining(diff > 0 ? diff : 0);
        }, 1000);

        return () => clearInterval(interval);
    }, [unlockTime]);

    const formatTime = (ms) => {
        if (ms <= 0) return "Ready";
        const days = Math.floor(ms / (1000 * 60 * 60 * 24));
        const hours = Math.floor((ms % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((ms % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((ms % (1000 * 60)) / 1000);
        return `${days}d ${hours}h ${minutes}m ${seconds}s`;
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
            <div className="bg-linear-to-b from-[#E0DEF7] to-[#E0DEF700]  rounded-2xl shadow-lg p-8 w-full max-w-md">

                {/* STEP 0 — PASSWORD */}
                {step === 0 && (
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            setStep(1);
                        }}
                        className="space-y-5"
                    >
                        <h2 className="text-2xl font-bold text-gray-800 text-center">Enter Password</h2>

                        <div>
                            <label className="block text-sm font-medium mb-1">Password</label>
                            <input
                                required
                                type="password"
                                className="w-full border border-gray-400 rounded-lg px-3 py-2"
                                placeholder="Enter your password"
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-[#7065F0] text-white py-3 rounded-lg text-lg font-semibold hover:bg-indigo-700 transition"
                        >
                            Continue
                        </button>
                    </form>
                )}

                {/* STEP 1 — CARD DETAILS */}
                {step === 1 && (
                    <form onSubmit={handleCardSubmit} className="space-y-5">
                        <h2 className="text-2xl font-bold text-gray-800 text-center">Enter Card Details</h2>

                        <div>
                            <label className="block text-sm font-medium mb-1">Card Number</label>
                            <input
                                required
                                className="w-full border border-gray-400 rounded-lg px-3 py-2"
                                placeholder="0000 0000 0000 0000"
                                value={card.number}
                                onChange={(e) => setCard({ ...card, number: e.target.value })}
                            />
                        </div>

                        <div className="flex gap-4">
                            <div className="flex-1">
                                <label className="block text-sm font-medium mb-1">Expiry</label>
                                <input
                                    required
                                    className="w-full border border-gray-400 rounded-lg px-3 py-2"
                                    placeholder="MM/YY"
                                    value={card.expiry}
                                    onChange={(e) => setCard({ ...card, expiry: e.target.value })}
                                />
                            </div>
                            <div className="flex-1">
                                <label className="block text-sm font-medium mb-1">CVV</label>
                                <input
                                    required
                                    className="w-full border border-gray-400 rounded-lg px-3 py-2"
                                    placeholder="123"
                                    value={card.cvv}
                                    onChange={(e) => setCard({ ...card, cvv: e.target.value })}
                                />
                            </div>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-[#7065F0] text-white py-3 rounded-lg text-lg font-semibold hover:bg-indigo-700 transition"
                        >
                            Continue
                        </button>
                    </form>
                )}

                {/* STEP 2 — TIMER / WITHDRAW */}
                {step === 2 && (
                    <div className="text-center space-y-3">
                        <h2 className="text-2xl font-bold text-gray-800">Withdrawal Locked</h2>
                        <p className="text-gray-500">You must wait 2 weeks before you can withdraw.</p>

                        <div className="text-[24px] font-bold text-[#7065F0]">{formatTime(remaining)}</div>

                        <button
                            disabled={remaining > 0}
                            className={`w-full py-3 rounded-lg text-lg font-semibold transition ${remaining > 0
                                ? "bg-gray-300 text-gray-600 cursor-not-allowed"
                                : "bg-green-600 text-white hover:bg-green-700"
                                }`}
                        >
                            Withdraw
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}
