import { 
  TOGGLE_CART_HIDDEN , 
  ADD_ITEM ,
  REMOVE_ITEM
} from './types'


export const toggleCartHidden = () => ({
  type: TOGGLE_CART_HIDDEN
})

export const addItemToCart = item => ({
  type: ADD_ITEM ,
  payload: item
})

export const removeItemFromCart = id => {
  console.log('FROM ACTION' , id);
  return {
    type: REMOVE_ITEM ,
    payload: id
  }
}