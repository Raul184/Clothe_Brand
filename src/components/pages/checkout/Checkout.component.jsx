import React from 'react'
import './checkout.styles.scss'
// Redux
import { connect } from 'react-redux'
// Memoization
import { createStructuredSelector } from 'reselect'
import { selectTotalItemsCart , selectCartTotalPay } from '../../../redux/cart/cart.selectors'



const Checkout = ({ cartItems , total }) => {
  return (
    <div className="checkout">
      <div className="header">
        <div className="h-blocks"><span>Product</span></div>
        <div className="h-blocks"><span>Description</span></div>
        <div className="h-blocks"><span>Quantity</span></div>
        <div className="h-blocks"><span>Price</span></div>
        <div className="h-blocks"><span>Remove</span></div>
      </div>
      {
        cartItems.map( el => <span>{el.name}</span> )
      }
      <div className="total">
        <span>Total: {total}$</span>
      </div>
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  cartItems: selectTotalItemsCart , 
  total: selectCartTotalPay
})

export default connect(
  mapStateToProps ,
  null
)(Checkout);