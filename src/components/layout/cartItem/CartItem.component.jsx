import React from 'react'
import './cartItem.styles.scss'


const CartItem = ({  item: { name , price , imageUrl , q }}) => <div className="cart_item">
    <img src={imageUrl} alt=""/>
    <div className="details">
      <span className="name">{name}</span>
      <span className="price">{q} x {price}$</span>
    </div>
</div>




export default CartItem;