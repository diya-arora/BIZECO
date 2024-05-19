import React from 'react'
import SponserCard from './SponserCard'

const Sponsors = ({type,data}) => {
    return (
        <section>
            <div className='flex justify-center items-center mb-[3rem] sponsor-type'>
                <div className='dash mx-[2rem] ' />
                <span className='text-[30px] text-white'>
                    {type}
                </span>
                <div className='dash mx-[2rem] '>

                </div>
            </div>
            <div className='flex justify-around mb-[5rem] sponsor-card'>
            {data.map((card) => (
                <SponserCard img={card.img} alt={card.alt} link={card.link} key={Math.random()}/>
            ))}

            </div>
        </section>
    )
}

export default Sponsors
