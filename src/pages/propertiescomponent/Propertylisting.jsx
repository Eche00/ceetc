import React from 'react'
import { bathrooms, beds, sizes } from '../../utils/svg'

function Propertylisting() {
    const properties = [
        { img: "/hero.png", title: 'blabla', price: 2700, timeframe: 'month', location: 'xhhhbddjdjjdjd', bed: 2, bathroom: 1, size: '6x7.7 m' },
        { img: "/hero.png", title: 'blabla', price: 2700, timeframe: 'month', location: 'xhhhbddjdjjdjd', bed: 2, bathroom: 1, size: '6x7.7 m' },
        { img: "/hero.png", title: 'blabla', price: 2700, timeframe: 'month', location: 'xhhhbddjdjjdjd', bed: 2, bathroom: 1, size: '6x7.7 m' },
    ]
    return (
        <div className='flex flex-wrap items-center md:justify-between justify-center gap-6 my-5'>
            {properties.map((property) => <div className='flex flex-col max-w-[300px] overflow-hidden rounded-lg border-[1.5px] border-[#F0EFFB] bg-[#FFFFFF]'>
                <img src={property.img} alt="" className='w-full h-[200px] ' />
                <section className='w-[90%] mx-auto flex flex-col py-5'>
                    <h3 className='text-[#7065F0] text-[24px] font-extrabold'>${property.price}  <span className=' text-gray-400 text-[16px] font-normal'> /{property.timeframe}</span></h3>
                    <h2 className='text-[#000929] text-[24px] font-bold'>{property.title}</h2>
                    <h4 className='text-gray-400 text-[16px] font-normal mb-4'>{property.location}</h4>

                    <div className='w-full border-t-[1.5px] border-[#F0EFFB] pt-4 flex flex-wrap gap-2 items-center justify-between'>
                        <span className='flex items-center gap-2 text-gray-600 text-[14px] font-normal'>{beds} {property.bed} Beds</span>
                        <span className='flex items-center gap-2 text-gray-600 text-[14px] font-normal'>{bathrooms}{property.bathroom} Bathrooms</span>
                        <span className='flex items-center gap-2 text-gray-600 text-[14px] font-normal'>{sizes} {property.size}</span>
                    </div>
                </section>
            </div>)}
        </div>
    )
}

export default Propertylisting