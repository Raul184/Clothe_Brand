import React from 'react'
import './custom_button.styles.scss'


const CustomButton = ({ children , isGoogle , ...rest }) => (
  <button className={`${isGoogle && 'google'} Custom_button`} {...rest}>
    {children}
  </button>
)



export default CustomButton;