import React from 'react'
import './cart.styles.scss'
// svg
import { ReactComponent as CartIcon } from '../../../assets/shopping_bag.svg'
// Redux
import { connect } from 'react-redux'
import { toggleCartHidden } from '../../../redux/cart/cart.actions'


const Cart = ({ toggleCartHidden }) => {
  return (
    <div className='Cart' onClick={ toggleCartHidden }>
      <CartIcon className='icon'/>
      <span className='icons_count'>0</span>
    </div>
  )
}


export default connect(
  null ,
  { toggleCartHidden }
)(Cart);