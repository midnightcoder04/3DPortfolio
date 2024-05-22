import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <header className='header'>
        <NavLink to = '/' className="w-10 h-10 rounded-lg
        bg-black items-center justify-center flex font-bold shadow-md">
            <p className='blue-gradient_text'>AB</p>
        </NavLink>
        <nav className ="flex text-lg gap-5 font-medium">
            <NavLink to = '/about' className = {({isActive}) => isActive ?
            'text-blue-600' : 'text-black'}>
                About
            </NavLink>
            <NavLink to = '/resume' className = {({isActive}) => isActive ?
            'text-blue-600' : 'text-black'}>
                Resume
            </NavLink>
            <NavLink to = '/projects' className = {({isActive}) => isActive ?
            'text-blue-600' : 'text-black'}>
                Projects
            </NavLink>
            <NavLink to = '/contact' className = {({isActive}) => isActive ?
            'text-blue-600' : 'text-black'}>
                Contact
            </NavLink>
        </nav>
    </header>
  )
}

export default Navbar