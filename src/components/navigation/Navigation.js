import React, { useState } from 'react'
import { useEffect } from 'react';
import Button from '../button/Button';
import './Navigation.css';

function Navigation({data}) {
    const [show, setShow] = useState(false);
    const [mobile, setMobile] = useState(false);

    const detectScreen = () =>{
        if(window.innerWidth < 768) {
            setMobile(true);
        }
        else {
            setMobile(false);
        }
    }

    window.addEventListener("resize", detectScreen);

    useEffect(()=>{
        detectScreen();
    },[])

    const closeList = () => {
        setShow(false);
    }

    return (
      <div className="nav">
        <div className="nav-wrapper">
          <a href={`${data[0].link}`}>
            <div className="nav-logo">
                {mobile ? <h4>JA</h4> : <h4>Javid Alizada</h4>}
            </div>
          </a>

          <ul className={`nav-list ${show && "show"}`}>
            {show && (
              <div className="nav-close" onClick={closeList}>
                <div></div>
              </div>
            )}
            {data.map((item) => (
              <li key={item.id} onClick={closeList}>
                <a href={`#${item.link}`}>{item.name}</a>
              </li>
            ))}
            {mobile && <li className="resume-button" onClick={closeList}><a href="/Javid.pdf" download>Resume</a></li>}
          </ul>
          {!mobile && (
            <Button buttonSize="btn--medium" buttonStyle="btn--primary">
              <a href="/Javid.pdf" download>Resume</a>
            </Button>
          )}

          <div className={`nav-menu`} onClick={() => setShow(!show)}>
            <div></div>
          </div>
        </div>
      </div>
    );
}

export default Navigation
