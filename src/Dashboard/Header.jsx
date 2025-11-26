import { Menu } from "@mui/material";
import { useNavBar } from "../utils/navbarcontroller";
import { Close } from "@mui/icons-material";
import DragHandleIcon from '@mui/icons-material/DragHandle';
import { useLocation } from "react-router-dom";

function Header({ nav, setNav }) {
    const { navBarController } = useNavBar();
    const location = useLocation();

    return (
        <div className="bg-[#FFFFFF] py-1.5 px-4 flex md:flex-row flex-col-reverse md:items-center justify-between ">
            {/* left section (search input)  */}
            <section className="py-2 px-5 shadow-[0px_0px_0px_1px_#E5E5E5,0px_4px_8px_-5px_#00000026] rounded-full ">
                {location.pathname.replace('/dashboard/', '').toLocaleUpperCase() || "DASHBOARD"}
            </section>
            {/* right section  */}
            <section className="flex items-center gap-4">

                <hr className=" h-7 border border-[#E5E5E5] mm:flex hidden" />
                {/* user info  */}
                <section className="flex  items-center justify-between w-full py-2.5 px-[3]">
                    <div className="flex items-center gap-3">
                        {" "}
                        <img
                            src="/logo.png"
                            alt=""
                            className=" w-8 h-8 object-cover rounded-full bg-black"
                        />
                        <p className="flex flex-col text-[#0A0A0A] md:text-[16px] text-2.5 font-medium ">
                            <span className=" text-[#737373]  md:text-[12px] text-[8px] font-normal ">
                                welcome,
                            </span>
                            Kristin Watson

                        </p>
                    </div>
                    <section className='flex mm:hidden items-center gap-4 w-fit' onClick={() => setNav(!nav)}>
                        <button onClick={navBarController} className="flex sm:hidden">{nav ? <Close fontSize='large' /> : <DragHandleIcon fontSize='large' />}</button>
                    </section>
                </section>
            </section>
        </div>
    );
}

export default Header;
