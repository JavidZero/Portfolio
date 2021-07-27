import React from 'react'
import Button from '../button/Button'
import './Banner.css'

function Banner() {
    return (
      <div
        className="banner"
        
        style={{
          backgroundImage:
            'linear-gradient(to left, rgba(0, 0, 0, .6),rgba(0, 0, 0, .6)), url("images/banner-bg.jpg")',
        }}
      >
        <div className="banner-wrapper">
          <h1>Javid Alizada</h1>
          <p>Hi, there and welcome to my webpage. Feel free to take a look</p>
          <Button buttonStyle="btn--outline" buttonSize="btn--large">
            <a href="/Javid.pdf" download>Download Resume</a>
          </Button>
        </div>
      </div>
    );
}

export default Banner
