import React from 'react'
import './cartDropDown.styles.scss'
import CustomButton from '../custom_button/CustomButton.component'


const CartDropDown = () => {
  return (
    <div className='cart_dropdown'>
      <div className="cart_items"/>
      <CustomButton>Checkout</CustomButton>
    </div>
  )
}


export default CartDropDown;