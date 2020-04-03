import React from 'react'
import './cartDropDown.styles.scss'
import CustomButton from '../custom_button/CustomButton.component'
// Comps.
import CartItem from '../cartItem/CartItem.component'
// Redux
import { connect } from 'react-redux'

const CartDropDown = ({ cartItems }) => {
  return (
    <div className='cart_dropdown'>
      {
      cartItems.map(el =>
        <CartItem key={el.id} item={el} />
      )}
      <CustomButton>Checkout</CustomButton>
    </div>
  )
}

const mapStateToProps = state => ({
  cartItems: state.cart.cartItems
})
export default connect(
  mapStateToProps ,
  null
)(CartDropDown);