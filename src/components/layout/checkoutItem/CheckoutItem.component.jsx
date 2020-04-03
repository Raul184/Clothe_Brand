import React from 'react'
import './checkoutItem.styles.scss'
// Redux
import { connect } from 'react-redux'
import { removeItemFromCart , removeItemAmount , addItemToCart } from '../../../redux/cart/cart.actions'


const CheckoutItem = ({ id , name , price , q , 
  imageUrl , 
  removeItemFromCart , 
  addItemToCart , 
  removeItemAmount 
  }) => {
    return (
      <div className="checkout_item">
        <div className="image_container">
          <img src={imageUrl} alt="item"/>
        </div>
        <span className='name'>
          {name}
        </span>
        <span className='quantity'>
          <div className="arrow" onClick={() => removeItemAmount(id)}>
            &#10094;
            </div>
            <span className="value">{q}</span>
          <div className="arrow" onClick={() => addItemToCart({ id })}>
            &#10095;
          </div>
        </span>
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
  { 
    removeItemFromCart ,
    addItemToCart ,
    removeItemAmount
  }
)(CheckoutItem);