import { 
  TOGGLE_CART_HIDDEN , 
  ADD_ITEM  
} from './types'
// UTILS
import {checkItemsQuantity} from './cart.utils'

const initState = {
  hidden: false , 
  cartItems: []
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
    default:
      return state;
  }
}

export default cartReducer;