import React from 'react'
import './cart.styles.scss'
// svg
import { ReactComponent as CartIcon } from '../../../assets/shopping_bag.svg'
// Redux
import { connect } from 'react-redux'
import { toggleCartHidden } from '../../../redux/cart/cart.actions'


const Cart = ({ cartItems , toggleCartHidden }) => {
  return (
    <div className='Cart' onClick={ toggleCartHidden }>
      <CartIcon className='icon'/>
      <span className='icons_count'>{cartItems.length}</span>
    </div>
  )
}

const mapStateToProps = state => {
  console.log('MAPSTATE FOR CART');
  return {
    cartItems: state.cart.cartItems
} }

export default connect(
  mapStateToProps ,
  { toggleCartHidden }
)(Cart);