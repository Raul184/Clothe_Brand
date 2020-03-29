import React from 'react'
import './custom_button.styles.scss'


const CustomButton = ({ children , ...rest }) => (
  <button className='Custom_button' {...rest}>
    {children}
  </button>
)



export default CustomButton;