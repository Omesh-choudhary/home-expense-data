import React from 'react'
import { NavLink } from 'react-router-dom'
import "../components/App.css"
function Navbar() {
  return (
    <header>

        <nav className='w-full h-12 bg-green-200/50  z-30 flex justify-between items-center relative top-0'>
            <div className="logo h-24 w-24 pt-2 ">
                <img className='object-cover ' src="logo.png" alt="" />
            </div>
            <div className="list list-none text-white flex justify-end align-middle gap-20 px-10 py-4 font-semibold ">
                <li> <NavLink  className="list-none text-" to="/">Home</NavLink> </li>
                <li> <NavLink className="list-none text-" to="/data">Data</NavLink> </li>
                <li> <NavLink className="list-none text-" to="/contact">Contact</NavLink> </li>
                <li> <NavLink className="list-none text-" to="/services">Services</NavLink> </li>
                <li> <button className=''><NavLink className="list-none text-" to="/logout">Logout</NavLink></button> </li>
            </div>
        </nav>
    </header>
  )
}

export default Navbar