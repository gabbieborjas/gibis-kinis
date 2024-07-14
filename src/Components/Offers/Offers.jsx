import React from 'react'
import "./Offers.css"
import ExclusiveOfferPic from "../Assets/ocean-water.jpg"
import { Link } from 'react-router-dom'

const Offers = () => {
  return (
    <div className = "offers" style={{ backgroundImage: `url(${ExclusiveOfferPic})` }}>
        <div className = "offersHeader" >
        <h1>Exclusive</h1>
        <h1>Offers for You</h1>
        <p>ONLY ON BEST SELLERS</p>
        <Link to={`/bestSellers`}><button>SHOP NOW</button></Link>
        </div>
    </div>
  )
}

export default Offers
