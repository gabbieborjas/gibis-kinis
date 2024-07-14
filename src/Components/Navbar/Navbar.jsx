import React, {useContext, useState} from 'react'
import {Link} from "react-router-dom";
import "./Navbar.css"
import logo from "../Assets/logo.png"
import cart_icon from "../Assets/cart_icon.png"
import { HomeContext } from '../../Context/HomeContext';

const Navbar = () => {

    const [menu,setMenu] = useState("home");
    const {getTotalCartItems}= useContext(HomeContext);

  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="" />
      </div>
      <ul className="nav-menu">
        <li onClick={()=>{setMenu("home")}}><Link style={{ textDecoration: 'none' }} to= '/'>Home</Link>{menu==="home"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("bestSellers")}}><Link style={{ textDecoration: 'none' }} to= '/bestSellers'>Best Sellers</Link>{menu==="bestSellers"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("tops")}}><Link style={{ textDecoration: 'none' }} to= '/tops'>Tops</Link>{menu==="tops"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("bottoms")}}><Link style={{ textDecoration: 'none' }} to= '/bottoms'>Bottoms</Link>{menu==="bottoms"?<hr/>:<></>}</li>
      </ul>
      <div className="nav-login-cart">
        <Link to= '/login'><button>Login</button></Link>
        <Link to='/cart'><img src={cart_icon} alt=""/></Link>
        <div className="nav-cart-count">{getTotalCartItems()}</div>
      </div>
    </div>
  )
}

export default Navbar
