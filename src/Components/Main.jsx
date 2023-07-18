import React, { useState, useEffect } from 'react';
import "react-loading-skeleton/dist/skeleton.css";
import './Main.css';
import {ImCross} from 'react-icons/im'

import desktopImage from '../images/image-product-desktop.jpg';
import mobileImage from '../images/image-product-mobile.jpg';
import cartIcon from '../images/icon-cart.svg';
import datas from './content.json';
import './skeleton.css'; // Import the Skeleton CSS

function Skeleton() {
  return (
    <div className='skeleton-container'>
      <div className="img-container">
        <div className="skeleton-image desktop"></div>
        <div className="skeleton-image mobile"></div>
      </div>
      <div className="skeleton-content">
        <div className="skeleton-head"></div>
        <div className="skeleton-para"></div>
        <div className="skeleton-para"></div>
        <div className="skeleton--price"><span className="skeleton-price"></span><span className="discount"></span></div>
        <div className="skeleton-btn"></div>
      </div>
    </div>
  );
}


function Main() {
  const [loading, setLoading] = useState(true);
  const [addToCart, setAddToCart] = useState(false);

  useEffect(() => {
    // Simulate a delay in loading the content (e.g., fetching data from an API)
    setTimeout(() => {
      setLoading(false);
    }, 2000); // Set the delay time in milliseconds
  }, []);



  function handleClick() {
    setAddToCart(!addToCart);
  }

  return (
    <div className='main-container'>
      {loading ? ( // Render the Skeleton while loading
        <Skeleton />
      ) : (
        <>
          <div className="img-container">
            <img src={desktopImage} alt="Desktop" className='desktopImage' />
            <img src={mobileImage} alt="Mobile" className='mobileImage' />
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
              <button className='cart-btn head' onClick={handleClick}>
                <img src={cartIcon} alt="cart" />{datas.btn}
              </button>
            </div>
          </div>

          <div className="cart-add head" style={{ display: addToCart ? 'flex' : 'none' }}>
            <h4>Thank You!</h4>
            <button onClick={handleClick}><ImCross/></button>
          </div>
        </>
      )}
    </div>
  );
}

export default Main;
