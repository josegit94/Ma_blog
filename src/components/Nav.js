import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => {
  return (
    <div className='navlinks'>
        <NavLink to="/" >Home</NavLink>
        <NavLink to="Services">Services</NavLink>
        <NavLink to="about">About Us</NavLink>
        <NavLink className='btn' to="contact">Get in touch</NavLink>
    </div>
  )
}

export default Nav