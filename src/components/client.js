import React from "react";
import './client.css';
import { Link } from "react-router-dom";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

function Client(){
    return(
  
      <div className="client">
         <div id="title">
          <a id="logo">FITNESS TRAINER MANAGEMENT</a>
          <img src="https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" height="240" width="260"></img>
       </div>
       <div id="showcontent">
        <p>Fitness training management involves the organization, planning, and supervision of fitness programs and activities for individuals or groups. It includes various aspects such as designing workout routines, tracking progress, managing schedules, and providing guidance and support to clients. Here are some key elements and strategies for effective fitness training management:
        <br></br> 1) Goal Setting<br></br>2)Scheduling and Time Management<br></br>3)Safety and Injury Prevention
        <br></br> <br></br>   Train yourself to be perfect this spring</p>
       </div>
       <Link to="/Navbar">
       <div id="next"><ArrowForwardIosIcon/></div></Link>
       </div>
    )
    
} 
export default Client;