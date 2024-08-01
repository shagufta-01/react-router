import React from 'react'
import { NavLink } from 'react-router-dom'
function Navbar() {
  return (
    <div>
  <nav>
    <NavLink className={(e)=>{return e.isActive ? "red":"white" }}to='/'><li>Home</li></NavLink>
    <NavLink className={(e)=>{return e.isActive ? "red":"white" }}to='/about'><li>About</li></NavLink>
    <NavLink className={(e)=>{return e.isActive ? "red":"white" }}to='/contact'><li>Contact</li></NavLink>
    <NavLink className={(e)=>{return e.isActive ? "red":"white" }}to='/user'><li>User</li></NavLink>
  </nav></div>
  )
}

export default Navbar
