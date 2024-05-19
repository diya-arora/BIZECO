"use client"
import React,{useState} from 'react'
import Nav from './Nav'
import SideNav from './SideNav'

const Wrapper = ({ children }) => {
    const [toggle, settoggle] = useState(false)
  return (
    <div>
        <Nav  toggle={toggle} settoggle={settoggle}/>
        {children}
        <SideNav toggle={toggle} settoggle={settoggle}/>
    </div>
  )
}

export default Wrapper