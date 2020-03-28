import React from 'react'
import './header.styles.scss'
import { Link } from 'react-router-dom'


const Header = () => (
  <div className="header">
    <Link className='logo-container' to='/'>
      <img 
        className='logo' 
        src="https://mp4-a.udemycdn.com/2019-06-30_21-01-32-9996f50fd92611c5a1dc2be86a61ae44/original.svg?aiAeYdjSS28-_t6-pb8JaoAAgw08oesqxZjeKfr09exIPffInm1aAnFn9xTFlTBbpmy8qXjcITY-DYMGPNwotfUCAQCTDjZtOOhNQE5tv4v-tmn0omvo4cwl5fEPdSPHV2gsqD0iwAAufGfbegMt2pCpJLYhacAvMHEwL6Q2djg" 
        alt="Logo"
      />
    </Link>
    <div className="options">
      <Link className='option' to='/shop'>SHOP</Link>
      <Link className='option' to='/contact'>CONTACT</Link>
    </div>
  </div>
)



export default Header;

