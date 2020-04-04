import { 
  TOGGLE_CART_HIDDEN , 
  ADD_ITEM ,
  REMOVE_ITEM ,
  REMOVE_ITEM_AMOUNT
} from './types'
// UTILS
import {checkItemsQuantity , removeItemQuantity } from './cart.utils'

const initState = {
  hidden: false , 
  cartItems: localStorage.getItem('product') || []
}

const cartReducer = ( state=initState , action) => {
  const { type , payload } = action
  switch (type) {
    case TOGGLE_CART_HIDDEN:
      return {
        ...state ,
        hidden: !state.hidden
      }
    case ADD_ITEM:
      return {
        ...state ,
        cartItems: checkItemsQuantity( state.cartItems , payload )
      }
    case REMOVE_ITEM:
      return {
        ...state ,
        cartItems: state.cartItems.filter( el => el.id !== payload )
      }
    case REMOVE_ITEM_AMOUNT:
      return {
        ...state ,
        cartItems: removeItemQuantity( state.cartItems , payload )
      }
    default:
      return state;
  }
}

export default cartReducer;