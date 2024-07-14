import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <header className='header'>
        <NavLink to = '/' className="w-10 h-10 rounded-lg
        bg-slate-800 items-center justify-center flex font-bold shadow-md">
            <p className='blue-gradient_text'>HK</p>
        </NavLink>
        <nav className ="flex font-medium text-base gap-2 sm:gap-4 md:gap-6 lg:gap-8
        sm:text-lg md:text-xl lg:text-2xl">
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