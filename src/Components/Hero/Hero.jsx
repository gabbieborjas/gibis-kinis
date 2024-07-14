import React from 'react'
import './Hero.css'
import Background_Image from "../Assets/collageImage.png"


const Hero = () => {
  return (
    <div className="hero" style={{ backgroundImage: `url(${Background_Image})` }}>
        <div className="headerContainer">
            <h1>NEW</h1>
            <h2>ARRIVALS</h2>
        </div>
        <div className="hero-shop-btn">
    <button onClick={() => window.scrollTo({ top: 2050, behavior: 'smooth' })}>
        <div>SHOP NOW</div>
    </button>
</div>
    </div>
  )
}

export default Hero
