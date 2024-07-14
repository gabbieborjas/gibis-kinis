import React from 'react'
import "./DescriptionBox.css"

const DescriptionBox = () => {
  return (
    <div className= "descriptionbox ">
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews (122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>
        100% cotton. Cold Hand Wash. Do not iron. Rinse after contact with salt water or chlorine. 
        </p>
        <p>
        Some color fade may occur in the sunlight.
        </p>
      </div>
    </div>
  )
}

export default DescriptionBox
