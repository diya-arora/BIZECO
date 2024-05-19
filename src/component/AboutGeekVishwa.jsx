import React from 'react'

const AboutGeekVishwa = ({ head, p1, p2, p3, p4 }) => {
    return (
        <section className=' event-section w-full flex justify-center mb-[6rem]'>
            <div className='flex justify-center items-center flex-col about-gfg w-[60%] rounded-tl-[40px] section-card rounded-br-[40px]'>
                <div className='pt-[2rem] text-[25px]'>
                    <span className='gfg-gradient about-title'>{head}</span>
                </div>

                <div className='px-[3rem] py-[1rem] text-[25px] about-text' >
                <span>{p1}</span>
                </div> 
                <div className='px-[3rem] py-[1rem] text-[25px] about-text' >
                <span>{p2}</span>
                </div> 
                <div className='px-[3rem] py-[1rem] text-[25px] about-text' >
                <span>{p3}</span>
                </div> 
                <div className='px-[3rem] py-[1rem] text-[25px] about-text' >
                <span>{p4}</span>
                </div> 
            </div>
        </section>
    )
}

export default AboutGeekVishwa