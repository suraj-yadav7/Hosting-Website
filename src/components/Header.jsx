import React from 'react'
import logo from "../host-logo.png"
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <nav className='flex justify-between bg-slate-100 text-black'>
      <div className='px-10'>
        <Link to ="/"><img className='max-h-16 max-w-xs ' src={logo} alt='logo' /></Link>
      </div>
      <div className='px-10'>
        <ul className='pt-4  gap-3 flex items-center  justify-center'>
          <li>Plans</li>
          <li>Services</li>
          <li>About</li>
          <Link to="/contact"><li>Contact</li></Link>
        </ul>
      </div>
    </nav>
  )
}

export default Header
