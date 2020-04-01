import React from 'react'
import './cart.styles.scss'
// svg
import { ReactComponent as CartIcon } from '../../../assets/shopping_bag.svg'



const Cart = () => {
  return (
    <div className='Cart'>
      <CartIcon className='icon'/>
      <span className='icons_count'>0</span>
    </div>
  )
}


export default Cart;