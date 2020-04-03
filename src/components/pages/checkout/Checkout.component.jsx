import React from 'react'
import './checkout.styles.scss'
// Redux
import { connect } from 'react-redux'
// Memoization
import { createStructuredSelector } from 'reselect'
import { selectTotalItemsCart , selectCartTotalPay } from '../../../redux/cart/cart.selectors'
// Comps.
import CheckoutItem from '../../layout/checkoutItem/CheckoutItem.component'


const Checkout = ({ cartItems , total }) => {
  console.log('STATE' ,cartItems);
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
        cartItems.map( el => <CheckoutItem key={el.id} {...el} /> )
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