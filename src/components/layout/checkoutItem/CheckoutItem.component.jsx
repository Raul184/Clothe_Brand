import React from 'react'
import './checkoutItem.styles.scss'
// Redux
import { connect } from 'react-redux'
import { removeItemFromCart } from '../../../redux/cart/cart.actions'


const CheckoutItem = ({ id , name , price , q , imageUrl , removeItemFromCart , ...otherProps }) => {
  console.log(otherProps);
  return (
    <div className="checkout_item">
      <div className="image_container">
        <img src={imageUrl} alt="item"/>
      </div>
      <span className='name'>{name}</span>
      <span className='quantity'>{q}</span>
      <span className='price'>{price}</span>
      <div 
        className="remove_button"
        onClick={() => removeItemFromCart(id)}
      >
        &#10005;
      </div>
    </div>
  )
}


export  default connect(
  null ,
  { removeItemFromCart }
)(CheckoutItem);