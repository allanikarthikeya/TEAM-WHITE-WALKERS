import React from 'react'
import img1 from '../images/calendar.png'
import {Link} from 'react-router-dom'
import './Navbar.css'
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary border border-dark border-top-0 border-left-0 border-right-0">
    <div className="container-fluid">
<div className='logo'>
      <img className="navimg" src={img1} width='40px' alt="" />
      <ul className="navbar-nav ">
        <li>
          <a className="nav-link " ><b>VNR EVENTS</b></a>
          </li>
          </ul>
      </div>
      
      <div className="collapse navbar-collapse child1" id="navbarNav">
        <ul className="navbar-nav ">
          <li className="nav-item">
          <Link  to="/committee" className="nav-link " >Committees</Link>
          </li>
          <li className="nav-item">
          <Link to="/activityLog" className="nav-link " >Activity Log</Link>
          </li>
          <li className="nav-item">
            <Link to="/report" className="nav-link">Report</Link>
          </li>
          <li className="nav-item">
            <Link to="/scheduling" className="nav-link">Scheduling</Link>
          </li>
          <li className="nav-item">
            <Link to="/contactus" className="nav-link">Contact us</Link>
          </li>
          <li className="nav-item">
            <Link to="/login" className="nav-link">Login</Link>
          </li>
          
        </ul>
      </div>
    </div>
  </nav>

  )
}

export default Navbar
