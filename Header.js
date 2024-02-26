import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constant";
import { useState } from "react";

const Header = () =>{
  const [btnNameReact,setBtnNameReact]= useState('Login')
  return (
    <div className="header">
 <div className="logo-container">
 <img src={LOGO_URL}alt="" />
 </div>

 <div className="nav-item">
  <ul>
    <li><Link to="/">Home</Link></li>
    <li><Link to="/about">About</Link></li>
    <li><Link to="/contact">Contact</Link></li>
    <li><Link to="/cart">Cart</Link></li>

    <button className="login" onClick={()=>{
      btnNameReact === 'Login'? setBtnNameReact('Logout'):setBtnNameReact('Login')
     }}>{btnNameReact}</button>
  </ul>
 </div>
    </div>
  )
}

export default Header;