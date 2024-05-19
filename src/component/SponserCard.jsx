import Link from 'next/link'
import React from 'react'

const SponserCard = ({img,alt,link}) => {
  return (
    <div className='flex justify-center items-center px-[1rem] w-[350px] h-[200px] border card rounded-[30px]'>
        <Link href={link} target='_blank'>
        <img src = {img} alt={alt}className='h-full w-full object-contain'/>
        </Link>
    </div>
    )
}

export default SponserCard