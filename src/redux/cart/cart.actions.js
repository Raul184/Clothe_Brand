import { 
  TOGGLE_CART_HIDDEN , 
  ADD_ITEM ,
  REMOVE_ITEM ,
  REMOVE_ITEM_AMOUNT
} from './types'


export const toggleCartHidden = () => ({
  type: TOGGLE_CART_HIDDEN
})

export const addItemToCart = item => ({
  type: ADD_ITEM ,
  payload: item
})

export const removeItemAmount = id => ({
  type: REMOVE_ITEM_AMOUNT ,
  payload: id
})

export const removeItemFromCart = id => {
  console.log('FROM ACTION' , id);
  return {
    type: REMOVE_ITEM ,
    payload: id
  }
}