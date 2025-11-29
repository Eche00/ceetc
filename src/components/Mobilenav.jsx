import React, { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { auth } from '../lib/firebase';
import { onAuthStateChanged } from 'firebase/auth';

function Mobilenav() {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        })
        return () => unsubscribe();
    }, []);
    return (
        <div className='md:hidden flex flex-col gap-4 fixed top-20 left-0 w-full h-screen bg-[#E0DEF7] py-4'>

            {/* nav links */}
            <nav className='w-[90%] mx-auto flex flex-col  gap-4  text-[#100A55] text-[16px] font-medium'>
                <NavLink to="/" className={({ isActive }) => isActive ? "border-b-2 border-[#7065F0] text-[#7065F0]" : ""}>Home</NavLink>
                <NavLink to="/properties" className={({ isActive }) => isActive ? "border-b-2 border-[#7065F0] text-[#7065F0]" : ""}>Properties</NavLink>
                <NavLink to="/escrow" className={({ isActive }) => isActive ? "border-b-2 border-[#7065F0] text-[#7065F0]" : ""}>Escrow</NavLink>
            </nav>

            {/* Auth buttons */}
            {user ? <Link to="/dashboard/" className='  text-white rounded-lg text-[16px] w-full items-end justify-end pr-10'>
                <div className=" flex items-center justify-end gap-2">
                    {" "}
                    <hr className=" h-7 border border-gray-400 mm:flex hidden" />
                    <img
                        src="/logo.png"
                        alt=""
                        className=" w-8 h-8 object-cover rounded-full bg-black"
                    />
                    <p className="flex flex-col text-[#0A0A0A] md:text-[16px] text-2.5 font-medium ">
                        <span className=" text-[#737373]  md:text-[12px] text-[8px] font-normal ">
                            welcome,
                        </span>
                        {user.username || 'customer'}

                    </p>
                </div></Link>
                : <section className='flex  items-center justify-center gap-4 '>
                    <Link to="/login" className=' py-2 px-6 text-black rounded-lg text-[16px] border-2 border-[#7065F0]'>Login</Link>
                    <Link to="/signup" className=' py-2 px-6 bg-[#7065F0] text-white rounded-lg text-[16px]'>Sign up</Link>
                </section>}

        </div>
    )
}

export default Mobilenav