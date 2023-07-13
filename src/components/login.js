// import React from 'react'
import './login.css';
// import Form from './Form';
// import { Link } from 'react-router-dom';
// const Login=()=>{
// 	return(
// 		<div className="divc">
// 			<div className="formdiv>">
// 			<form action=""> 
			
// 				<h1> FITNESS TRAINER MANAGEMENT</h1>
// 				<br></br>
// 				<div> 
// 					<label htmlFor="email">Email</label>
// 					<input type="text" name="email" id="email"/> 
// 				</div> 
// 				<br></br>
				
// 				<div> 
// 					<label htmlFor="passw">Password</label>
// 					<input type="text" name="passw" id="passw"/> 
// 				</div> 
// 				<br></br> 
// 				<button type="submit">Sign in</button>
// 				<h2>Don't Have an Account!..  </h2>
// 				<button id="supbtn"><Link to="/Form">Sign up</Link></button>
			
// 			</form>
// 			</div>
// 		</div>
// 	)
// }

// export default Login;
import React, { useState } from "react";
import { Link } from "react-router-dom";
export default function Login() {

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

  }

  return (
    <div className="main">
      
      <div className="login">
        <h1>FITNESS TRAINER </h1>
    <form onSubmit={(e) => {handleSubmit(e)}}>
      <h2>Login</h2>
      <div id="oo">
      <div>
            <input
              type="Email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
      </div>
 <br></br> 
      <div>
      <label>
        <input 
          type="Password" 
          value={password}
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      </div> <br></br> 
      </div>
      <div>
      <button>Click</button>

      </div>
     </form>
      <p style={{marginLeft:"40px"}}>Don't you have an account?<Link to ="/form">SignUp</Link> </p>
</div>
    </div>
  );

}