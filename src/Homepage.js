import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Gem, Palette, Eyeglasses } from 'react-bootstrap-icons';
import welcomeImg from './assets/images/eyeglasses-on-table.jpg';

const Homepage = () => {
  
  return (
    <div className='homepage-container'>

      <div className='welcome-container'>
        <img className='welcome-img' src={welcomeImg} />

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
              <div className='logo-container'>
                <div className='logo-spot'>
                  <Gem />
                </div>
              </div>
              <h5>High-quality</h5>
              <p>Both our frames and lenses are made with superior material, scratch 
                resistant and durable.
              </p>
            </div>
          </div>
          <div className='details-card-space'>
            <div className='details-card'>
              <div className='logo-container'>
                <div className='logo-spot'>
                  <Palette />
                </div>
              </div>
              <h5>Latest Designs</h5>
              <p>The variety of eyeglasses on our website includes the latest designs
                and styles in fashion.
              </p>
            </div>
          </div>
          <div className='details-card-space'>
            <div className='details-card'>
              <div className='logo-container'>
                <div className='logo-spot'>
                  <Eyeglasses />
                </div>
              </div>
              <h5>Built to Fit You</h5>
              <p>Select your frames, and we will ensure the lenses meet your exact
                prescription needs.
              </p>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
};

export default Homepage;