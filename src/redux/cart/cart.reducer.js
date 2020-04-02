import  TOGGLE_CART_HIDDEN  from './types'

const initState = {
  hidden: true
}

const cartReducer = ( state=initState , action) => {
  const { type } = action
  switch (type) {
    case TOGGLE_CART_HIDDEN:
      return {
        ...state ,
        hidden: !state.hidden
      }
    default:
      return state;
  }
}

export default cartReducer;