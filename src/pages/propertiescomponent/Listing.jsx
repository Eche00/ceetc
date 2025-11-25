import { LocationOn } from '@mui/icons-material'
import React from 'react'
import { buy, rent, searchproperty } from '../../utils/svg'
import Propertylisting from './Propertylisting'

function Listing() {
    return (
        <div>
            {/* intro  */}
            <div className='flex flex-col items-center justify-center text-center'>
                <h1 className='text-[#000929] md:text-[40px] text-[20px] md:text-start text-center font-bold '>Based on your  <span className='text-[#7065F0]'> location <LocationOn fontSize='large' /></span></h1>
                <h3 className='md:text-[16px] text-[12px] font-normal md:text-start text-center '>Find what you are looking for in the location of your choice.</h3>
            </div>

            {/* container  */}
            <main className='md:w-[80%] w-[90%] mx-auto flex flex-col gap-4 mt-12'>
                {/* header  */}
                <section className='flex md:flex-row flex-col items-center gap-4 justify-between'>
                    <div className='flex rounded-lg p-3 bg-[#F0EFFB] border-[1.5px] border-[#E0DEF7]'>
                        <button className='bg-white flex items-center justify-center gap-2 w-[115px] h-12 text-[#7065F0] text-[18px] font-bold  border-2 border-[#E0DEF7] rounded-md cursor-pointer'>{rent} Rent</button>
                        <button className='flex items-center justify-center gap-2 w-[115px] h-12 text-[#100A55] text-[18px] font-bold cursor-pointer'>{buy} Rent</button>
                    </div>
                    <div className=' max-w-[352px] w-full flex items-center gap-4 rounded-lg p-3 bg-[#F0EFFB] border-[1.5px] border-[#E0DEF7]'>
                        {searchproperty} <input type="text" placeholder='Search...' className='flex-1 placeholder:text-gra-700  outline-none' />
                    </div>
                </section>
                <section><Propertylisting /></section>
                {/* nav buttons  */}
                <section className='flex  items-center justify-center mb-10'>
                    <div className='flex rounded-lg p-3 bg-[#F0EFFB] border-[1.5px] border-[#E0DEF7]'>
                        <button className='bg-white flex items-center justify-center gap-2 px-5 h-10 text-[#7065F0] text-[16px] font-normal  border-2 border-[#E0DEF7] rounded-md cursor-pointer'>Prev</button>
                        <button className='w-[65px] text-[#100A55] text-[16px] font-bold '>1</button>
                        <button className='bg-white flex items-center justify-center gap-2 px-5 h-10 text-[#7065F0] text-[16px] font-normal  border-2 border-[#E0DEF7] rounded-md cursor-pointer'>Next</button>

                    </div>

                </section>
            </main>
        </div>
    )
}

export default Listing