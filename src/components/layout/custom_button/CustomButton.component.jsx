import React , { useState , useEffect } from 'react'
import './custom_button.styles.scss'


const CustomButton = ({ children  , g=false , s=false , ...rest }) => {
  const [styles, setstyles] = useState({
    isGoogle: false ,
    shopButtons: false
  })
  useEffect(() => {
    // Google Styles
    g && setstyles({ ...styles , isGoogle: true })
    
    // Shoopping Category Styles
    s && setstyles({ ...styles , shopButtons: true })
  }, //eslint-disable-next-line 
  [])
  const { isGoogle , shopButtons} = styles;

  return ( 
    <button className={`
      ${isGoogle ? 'google' : ''} 
      ${shopButtons ? 'inverted' : ''}
      Custom_button`
      } 
      {...rest}
    >
      {children}
    </button>
)}



export default CustomButton;