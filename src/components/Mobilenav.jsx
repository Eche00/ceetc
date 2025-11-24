import React from 'react'
import { Link, NavLink } from 'react-router-dom'

function Mobilenav() {
    return (
        <div className='md:hidden flex flex-col gap-4 fixed top-20 left-0 w-full h-screen bg-[#E0DEF7] py-4'>

            {/* nav links */}
            <nav className='w-[90%] mx-auto flex flex-col  gap-4  text-[#100A55] text-[16px] font-medium'>
                <NavLink to="/" className={({ isActive }) => isActive ? "border-b-2 border-[#7065F0] text-[#7065F0]" : ""}>Home</NavLink>
                <NavLink to="/properties" className={({ isActive }) => isActive ? "border-b-2 border-[#7065F0] text-[#7065F0]" : ""}>Properties</NavLink>
                <NavLink to="/escrow" className={({ isActive }) => isActive ? "border-b-2 border-[#7065F0] text-[#7065F0]" : ""}>Escrow</NavLink>
            </nav>

            {/* Auth buttons */}
            <section className='flex  items-center justify-center gap-4 '>
                <Link to="/login" className=' py-2 px-6 text-black rounded-lg text-[16px] border-2 border-[#7065F0]'>Login</Link>
                <Link to="/signup" className=' py-2 px-6 bg-[#7065F0] text-white rounded-lg text-[16px]'>Sign up</Link>
            </section>
        </div>
    )
}

export default Mobilenav