import React from 'react'
import './Footer.css'

function Footer({data}) {
    return (
      <div className="footer">
        <div className="footer-inner">
          <p>
            Made by <span>{data.name}</span>
          </p>
          <small>This website created via ReactJs</small>
        </div>
      </div>
    );
}

export default Footer
