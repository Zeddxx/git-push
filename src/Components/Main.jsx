import React from 'react'
import './Main.css'
import desktopImage from '../images/image-product-desktop.jpg';
import mobileImage from '../images/image-product-mobile.jpg';
import cartIcon from '../images/icon-cart.svg';
import datas from './content.json';

function Main() {
  return (
    <div className='main-container'>
      <div className="img-container">
        <img src={desktopImage} alt="Desktop" className='desktopImage'/>
        <img src={mobileImage} alt="Mobile" className='mobileImage'/>
        </div>
      <div className="content-container">
       <div className="headings">
        <h1 className='head'>{datas.preview}</h1>
        <h2 className='para'>{datas.title}</h2>
       </div>
       <div className="description">
        <p className='head'>{datas.description}</p>
       </div>
       <div className="price-nd-btn">
        <div className="prices">
            <h3 className='para'>{datas.priceBefore}</h3>
            <p className='head'>{datas.discount}</p>
        </div>
        <button className='cart-btn head'><img src={cartIcon} alt="cart" />{datas.btn}</button>
       </div>
      </div>
    </div>
  )
}

export default Main
