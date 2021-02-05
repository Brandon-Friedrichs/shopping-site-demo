import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Homepage = () => {
  
  return (
    <div className='homepage-container'>

      <div className='welcome-container'>
        <div className='welcome-img'>
          Eyeglasses image here
        </div>

        <div className='welcome-msg'>
          <h2>First-rate Eyeglasses at Affordable Prices</h2>
          <p>We provide superior eyeglasses at the most accessible prices.</p>
          <Link to='/shoppingpage' className='shop-btn' >Start Shopping</Link>
        </div>


      </div>

      <div className='homepage-details-container'>
        <div className='details-header'>
          <h2>Our Glasses</h2>
          <hr></hr>
          <p>The wide variety of eyeglasses offered on our website have all been selected
            by our expert staff. Our glasses are well made, stylish and customizable to fit
            your prescription.
          </p>
        </div>

        <div className='details-cards-container'>
          <div className='details-card-space'>
            <div className='details-card'>
              <h5>High-quality</h5>
              <p>Both our frames and lenses are made with superior material, scratch 
                resistant and durable.
              </p>
            </div>
          </div>
          <div className='details-card-space'>
            <div className='details-card'>
              <h5>The Latest Designs and Styles</h5>
              <p>The variety of eyeglasses on our website includes the very cutting
                edge in fashion.
              </p>
            </div>
          </div>
          <div className='details-card-space'>
            <div className='details-card'>
              <h5>Built to Fit You</h5>
              <p>Select your frames, and we will ensure the lenses meet your exact
                prescription needs guaranteed.
              </p>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
};

export default Homepage;