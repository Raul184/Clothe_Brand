import React from 'react'
import './cart.styles.scss'
// svg
import { ReactComponent as CartIcon } from '../../../assets/shopping_bag.svg'
// Redux
import { connect } from 'react-redux'
import { toggleCartHidden } from '../../../redux/cart/cart.actions'
// Memoization
import { selectedCartItems } from '../../../redux/cart/cart.selectors'


const Cart = ({ cartItems , toggleCartHidden }) => {
  return (
    <div className='Cart' onClick={ toggleCartHidden }>
      <CartIcon className='icon'/>
      <span className='icons_count'>{cartItems}</span>
    </div>
  )
}

const mapStateToProps = state => ({
  cartItems: selectedCartItems(state)
})
  


export default connect(
  mapStateToProps ,
  { toggleCartHidden }
)(Cart);