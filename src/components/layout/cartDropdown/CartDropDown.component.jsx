import React from 'react'
import './cartDropDown.styles.scss'
import { withRouter } from 'react-router-dom'
// Comps.
import CartItem from '../cartItem/CartItem.component'
import CustomButton from '../custom_button/CustomButton.component'
// Redux
import { connect } from 'react-redux'
// Memoization
import { selectTotalItemsCart } from '../../../redux/cart/cart.selectors'
// Redux
import { toggleCartHidden } from '../../../redux/cart/cart.actions'


const CartDropDown = ({ cartItems , history , dispatch }) => {
  return (
    <div className='cart_dropdown'>
      {cartItems.length > 0 ?
        cartItems.map(el =>
        <CartItem key={el.id} item={el} />
      ):
      <span className='empty'>Your cart is empty</span>
    }
      <CustomButton onClick={() => {
        history.push('/checkout')
        dispatch( toggleCartHidden() )
      }}>
        Checkout
      </CustomButton>  
    </div>
  )
}

const mapStateToProps = state => ({
  cartItems: selectTotalItemsCart(state)
})
export default withRouter(connect(
  mapStateToProps ,
  null
)(CartDropDown));