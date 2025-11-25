
import { LocationOn } from '@mui/icons-material'
import Propertylisting from './Propertylisting'
import { Link } from 'react-router-dom'

function ListingCta() {
    return (
        <div>
            {/* intro  */}
            <div className='flex flex-col items-center justify-center text-center'>
                <h1 className='text-[#000929] md:text-[40px] text-[20px] md:text-start text-center font-bold '>Based on your  <span className='text-[#7065F0]'> location <LocationOn fontSize='large' /></span></h1>
                <h3 className='md:text-[16px] text-[12px] font-normal md:text-start text-center '>Find what you are looking for in the location of your choice.</h3>
            </div>

            {/* container  */}
            <main className='md:w-[80%] w-[90%] mx-auto flex flex-col gap-4 mt-12'>

                <section><Propertylisting /></section>
                {/* nav buttons  */}
                <section className='flex  items-center justify-center mb-10'>
                    <Link to="/properties" className=' py-4 px-16 bg-[#7065F0] text-white rounded-lg text-[18px] font-bold cursor-pointer'>More</Link>

                </section>
            </main>
        </div>
    )
}

export default ListingCta