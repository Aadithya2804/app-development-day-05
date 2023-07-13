import React from "react";
import './Navbar.css';
// import { useDispatch, useSelector } from "react-redux";
// import { logout, selectUser } from "../Features/userSlice";
// import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import{CgProfile} from "react-icons/cg";
import {IoMdNotificationsOutline} from "react-icons/io";

function Navbar(){
  return(

    <nav className="navbar">
    <ul className="navbar__list">
    <div id="nav">
       <div id="title">
        <a id="logo">FITNESS</a>
    </div>
     </div>
     <div id="item">
      <Link to="/login" style={{textDecoration:"none"}}>
      <li className="navbar__item">
       
      Home
      </li>
      </Link>
      <Link to="https://www.google.com/search?q=fitness+training+images&rlz=1C1CHBD_enIN1051IN1051&oq=fitness+training+images&aqs=chrome..69i57j0i22i30l9.16415j0j7&sourceid=chrome&ie=UTF-8" style={{textDecoration:"none"}}>
      <li className="navbar__item">
      About
      </li>
      </Link>
      <Link to="https://www.google.com/search?q=deit+maintainence+plans&rlz=1C1CHBD_enIN1051IN1051&oq=deit+maintainence+plans+&aqs=chrome..69i57j69i59j0i22i30l8.7207j0j7&sourceid=chrome&ie=UTF-8" style={{textDecoration:"none"}}>
      <li className="navbar__item">
      Diet Plans
      </li>
      </Link>
      </div>
      <div id="last">
      <Link to="/notifications" style={{textDecoration:"none"}}>
      <li className="navbar__item">
    
      </li>
      </Link>
      <li className="navbar__item" id="profile">
        
      </li>
      {/* <li className="navbar__item">
      {name}
      </li> */}
      </div>
    </ul>
      <div className="pic"></div>
  </nav>

    
  )
}
export default Navbar;