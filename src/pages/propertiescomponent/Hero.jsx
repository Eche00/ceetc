import { Search } from '@mui/icons-material'
import React from 'react'
import { direction, properties, trusted } from '../../utils/svg'

function Hero() {
    return (
        <div className='md:max-w-[90%]  w-full md:ml-auto z-10'>
            {/* container  */}
            <main className='flex md:flex-row flex-col items-center gap-4 '>
                {/* left hero  */}
                <section className='md:max-w-[544px] w-[90%] md:mx-0 mx-auto flex flex-col gap-5 '>
                    <div className='flex flex-col gap-8 text-[#000929]  font-bold'>
                        <h1 className='text-[#000929] md:text-[64px] text-[38px] md:text-start text-center font-bold leading-[110%] font-sans'>Buy <span className='text-[#7065F0]'> and </span> rent properties easily</h1>
                        <h3 className='md:text-[20px] text-[16px] font-normal md:text-start text-center '>A great platform to buy and even rent properties without any commisions.</h3>
                    </div>

                    {/* category and search box */}
                    <div class="md:w-full w-[90%] max-w-md bg-white rounded-2xl shadow p-4 md:mx-0 mx-auto ">

                        <div class="flex justify-between text-sm font-medium text-gray-600 px-2">
                            <button class="flex-1 text-[#7065F0] border-b-2 border-[#7065F0] pb-1">Rent</button>
                            <button class="flex-1 pb-1">Buy</button>
                        </div>


                        <div class="flex justify-between text-sm font-medium text-gray-600 p-4">
                            <p class="flex-1 flex flex-col gap-2 text-[#001619B2] sm:text-[16px] text-[10px] font-normal">Location
                                <span class=" text-[#000929] sm:text-[18px] text-[14px] font-bold">Barcelona, Spain</span>
                            </p>
                            <p class="flex-1 flex flex-col gap-2 text-[#001619B2] sm:text-[16px] text-[10px] font-normal">When
                                <span class=" text-[#000929] sm:text-[18px] text-[14px] font-bold">Move-in Date</span>
                            </p>
                        </div>

                    </div>
                    {/* info  */}
                    <section className='flex items-center md:gap-20 gap-2.5 md:mx-0 mx-auto'>
                        {/* properties */}
                        <div className='flex flex-col gap-6'>
                            <span>{properties}</span>
                            <p className='text-[#7065F0] md:text-[24px] text-[20px]  font-bold font-sans leading-[90%]'>10K +  <br />
                                <span className='text-[#000929] md:text-[16px] text-[14px]  font-bold font-sans'>properties</span>
                            </p>
                        </div>
                        {/* trusted */}
                        <div className='flex flex-col gap-6'>
                            <span>{trusted}</span>
                            <p className='text-[#7065F0] md:text-[24px] text-[20px]  font-bold font-sans leading-[90%]'>5K + <br />
                                <span className='text-[#000929] md:text-[16px] text-[14px]  font-bold font-sans'>renters</span>
                            </p>
                        </div>
                    </section>
                </section>
                {/* right hero  */}
                <section className='w-fit h-fit relative z-10 '>
                    <div class="w-full max-w-[270px] bg-white rounded-2xl shadow p-6 absolute top-1/2 -translate-y-1/2 left-0 md:inline hidden">
                        <div class="flex items-center gap-4">
                            <img
                                src="https://content.presspage.com/uploads/2341/1920_andreas-tostmann.jpg?10000"
                                alt="profile"
                                class="w-14 h-14 rounded-full object-cover"
                            />

                            <div>
                                <h2 class="text-lg font-semibold">Manuel Villa</h2>
                                <p class="text-sm text-gray-500">Renter</p>
                                <p class="text-sm flex items-center gap-1 text-gray-500">
                                    Moved with
                                    <span class="text-indigo-600 font-medium">CEET</span>
                                </p>
                            </div>
                        </div>

                        <div class="mt-5">
                            <p class="text-gray-700 text-sm leading-relaxed">
                                “I loved how smooth everything was, and finally got the house we wanted.”
                            </p>
                        </div>

                        <div class="border-t mt-5 pt-5 flex justify-between text-center">
                            <div>
                                <p class="text-xl font-bold">$1,500</p>
                                <p class="text-xs text-gray-500">Saved up to</p>
                            </div>

                            <div>
                                <p class="text-xl font-bold">-24 hrs</p>
                                <p class="text-xs text-gray-500">Process time</p>
                            </div>
                        </div>
                    </div>

                    <img src="/propertieshero.png" alt="hero image" className='md:w-[1242px] md:h-[586px] object-cover  object-left  rounded-2xl' />
                    <span className='absolute top-1/2 -translate-y-1/2  left-1/2 -translate-x-1/2'>{direction}</span>
                    <hr className='w-[15px] h-[15px] bg-[#7570FF] rounded-full border-none absolute top-20 left-5' />
                    <hr className='w-[15px] h-[15px] bg-[#7570FF] rounded-full border-none absolute bottom-2 left-10' />
                    <hr className='w-[15px] h-[15px] bg-[#7570FF] rounded-full border-none absolute top-1/2 -translate-y-1/2 right-5' />
                    <hr className='w-[15px] h-[15px] bg-[#7570FF] rounded-full border-none absolute top-1/2 -translate-y-1/2  left-1/2 -translate-x-1/2' />
                    <hr className='w-[15px] h-[15px] bg-[#7570FF] rounded-full border-none absolute top-34 left-[50%]' />
                    <hr className='w-[15px] h-[15px] bg-[#7570FF] rounded-full border-none absolute top-[80%] left-20' />
                    <hr className='w-[15px] h-[15px] bg-[#7570FF] rounded-full border-none absolute top-5 right-10' />
                    <hr className='w-[15px] h-[15px] bg-[#7570FF] rounded-full border-none absolute bottom-20 right-5' />
                </section>
            </main>
        </div>
    )
}

export default Hero