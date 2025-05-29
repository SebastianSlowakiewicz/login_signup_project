import React, {useState} from "react";
import './LoginSignup.css';

import user_icon from '../assets/circle-user-solid.svg';
import email_icon from '../assets/envelope-solid.svg';
import password_icon from '../assets/key-solid.svg';

const LoginSignup = () => {

    const [action,setAction] = useState("Sign Up");

    // This component is a simple sign-up form with fields for name, email, and password.
    // It includes icons for each input field and has a header with an underline.

    return (
        <div className="container">
            <div className="header">
                <div className="text">{action}</div>
                <div className="underline"></div>
            </div>
            <div className="inputs">
                {action === "Login" ?<div></div> :
            <div className="input">
            <img src={user_icon} alt='' />
            <input type="text" placeholder="Name"/>
            </div>}
            <div className="input">
            <img src={email_icon} alt='' />
            <input type="email" placeholder="Email ID"/>
            </div>
            <div className="input">
            <img src={password_icon} alt='' />
            <input type="password" placeholder="password"/>
            </div>    
            </div>
            {action === "Sign up" ?<div></div> :
            <div className="forgot-password">Lost password? <span>Click here!</span></div>}
            <div className="submit-container">
                <div className={action ==="Login"?"submit gray":"submit"} onClick={()=>{setAction("Sign up")}}>Sign Up</div>
                <div className={action==="Sign Up"?"submit gray":"submit"} onClick={()=>{setAction("Login")}}>Login</div>
            </div>
        </div>
    )
}
export default LoginSignup;