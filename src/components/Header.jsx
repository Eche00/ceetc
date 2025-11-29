import { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom'
import DragHandleIcon from '@mui/icons-material/DragHandle';
import Mobilenav from './Mobilenav';
import { Close } from '@mui/icons-material';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../lib/firebase';

function Header() {
    const [nav, setNav] = useState(false);
    const [user, setUser] = useState(null);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        })
        return () => unsubscribe();
    }, []);

    return (
        <div className='fixed top-0 left-0 w-full bg-[#FFFFFF66] z-50'>
            <div className='flex items-center justify-between gap-4 py-4 sm:px-12 px-3'>
                <section className='flex items-baseline flex-1 gap-12'>
                    {/* logo */}
                    <div className='text-[#100A55] text-[20px] font-bold'>
                        <Link to="/" className=" text-[34px] font-extrabold">ℭ</Link>EET
                    </div>
                    {/* nav links */}
                    <nav className='md:flex hidden items-center gap-12  text-[#100A55] text-[16px] font-medium'>
                        <NavLink to="/" className={({ isActive }) => isActive ? "border-b-2 border-[#7065F0] text-[#7065F0]" : ""}>Home</NavLink>
                        <NavLink to="/properties" className={({ isActive }) => isActive ? "border-b-2 border-[#7065F0] text-[#7065F0]" : ""}>Properties</NavLink>
                        <NavLink to="/escrow" className={({ isActive }) => isActive ? "border-b-2 border-[#7065F0] text-[#7065F0]" : ""}>Escrow</NavLink>
                    </nav>
                </section>

                {/* Auth buttons */}
                {user ? <Link to="/dashboard/" className='md:flex hidden  text-white rounded-lg text-[16px]'>
                    <div className="flex items-center gap-2">
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
                            {user?.username || 'customer'}

                        </p>
                    </div></Link>
                    : <section className='md:flex hidden items-center gap-4 '>
                        <Link to="/signin" className=' py-2 px-6 text-black rounded-lg text-[16px] border-2 border-[#E0DEF7]'>Login</Link>
                        <Link to="/signup" className=' py-2 px-6 bg-[#7065F0] text-white rounded-lg text-[16px]'>Sign up</Link>
                    </section>}

                {/* mobile nav and Auth buttons */}
                <section className='flex md:hidden items-center gap-4 w-fit' onClick={() => setNav(!nav)}>
                    {nav ? <Close fontSize='large' /> : <DragHandleIcon fontSize='large' />}
                </section>
                {nav && <Mobilenav />}
            </div>
        </div>
    )
}

export default Header