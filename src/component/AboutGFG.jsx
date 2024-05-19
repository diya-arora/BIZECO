import React from 'react'

const AboutGFG = ({head,desc}) => {
  return (
    <section className=' event-section w-full flex justify-center mb-[6rem]'>
      <div className='flex justify-center items-center flex-col about-gfg w-[60%] rounded-tl-[40px] section-card rounded-br-[40px]'>
        <div className='pt-[2rem] text-[25px]'>
          <span className='gfg-gradient about-title'>{head}</span>
        </div>
        <div className='px-[3rem] py-[2rem] text-[25px] about-text'>
          <span>{desc}</span>
        </div>
      </div>
    </section>
  )
}

export default AboutGFG