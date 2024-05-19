"use client"
import Link from 'next/link'
import React,{useState} from 'react'

const SideNav = ({toggle,settoggle}) => {
    const handleClick  =()=>{
        if(!toggle){ 
            document.getElementById("side-nav").style.left="0%"
        }
        else{
            
            document.getElementById("side-nav").style.left="-70%"
        }
        settoggle(!toggle)
    }
  return (
    <div id='side-nav' className='text-white absolute w-[70%] left-[-70%] flex flex-col items-center justify-center'>
       <Link href="/" onClick={handleClick} className='sidebar-nav-link'>Home</Link>
       <Link href="/#event-section" onClick={handleClick}  className='sidebar-nav-link'>Event</Link>
       <Link href="/team"  onClick={handleClick} className='sidebar-nav-link'>Team</Link>
       <Link href="/#sponsors"  onClick={handleClick}  className='sidebar-nav-link'>Sponsors</Link>
       <Link href="#footer"  onClick={handleClick} className='sidebar-nav-link'>Contact</Link>
    </div>
  )
}

export default SideNav