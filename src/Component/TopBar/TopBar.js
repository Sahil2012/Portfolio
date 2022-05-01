import './TopBar.scss';
import React from 'react';
import {Call,Mail} from '@material-ui/icons'

export default function TopBar(props) {

  let handleMenuClick = () => {
    props.setAction(!props.active);
  }

  return (
    <div className={"topbar " +  (props.active === true ? 'active' : '')} id='topbar'>

      <div className='wrapper' >
        <div className='left'>
          <a href='#intro' className='logo'>
            Sahil.
          </a>
          <div className='itemContainer'>
            <Call className='img'/>
            <span> +91 9403335300</span>
          </div>
          <div className='itemContainer'>
          <Mail className='img'/>
            <span> sahilhsgupta7@gmail.com</span>
          </div>
        </div>

        <div className='right' >
          <div className='hamburger' onClick={handleMenuClick}>
            <span className='line1'></span>
            <span className='line2'></span>
            <span className='line3'></span>
          </div>
        </div>
      </div>

    </div>
  )
}
