import React, { useContext } from 'react'
import "./ProductDisplay.css"
import star_icon from "../Assets/star_icon.png"
import star_dull_icon from "../Assets/star_dull_icon.png"
import { HomeContext } from '../../Context/HomeContext'

const ProductDisplay = (props) => {
    const {product} = props;
    const {addToCart} = useContext(HomeContext);
  return (
    <div className = "productdisplay">
      <div className="productdisplay-left">
        <div className = "productdisplay-img-list">
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
        </div>
        <div className="productdisplay-img">
            <img className="productdisplay-main-img" src={product.image} alt="" />
        </div>
      </div>
        <div className="productdisplay-right">
            <h1>{product.name}</h1>
            <div className="productdisplay-right-star">
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_dull_icon} alt="" />
                <p>(122)</p>
            </div>
            <div className="productdisplay-right-price">
                ${product.price}
            </div>
            <div className="productdisplay-right-description">
            Our line is made of LYCRA® XTRA LIFE™, a fabric renowned for its durability, chlorine resistance, sustainability, 
            and shape retention. It outlasts traditional fabrics by up to 10 times.
            </div>
            <div className="productdisplay-right-size">
                <h1>SELECT SIZE:</h1>
                <div className="productdisplay-right-size">
                    <div>XS</div>
                    <div>S</div>
                    <div>M</div>
                    <div>L</div>
                    <div>XL</div>
                </div>
            </div>
            <button onClick={()=>{addToCart(product.id)}}>ADD TO CART</button>
            <p className= 'productdisplay-right-category' ><span>Category: </span>Kini's</p>
            <p className= 'productdisplay-right-category' ><span>Tags: </span>#SUMMER NEVER ENDS</p>
        </div>
    </div>
  )
}

export default ProductDisplay
