export const checkItemsQuantity = ( cartItems , payload ) => {
  const existCartItem = cartItems.find(el => el.id === payload.id )

  if(existCartItem){
    return cartItems.map( cartItem => 
      cartItem.id === payload.id ? 
        { ...cartItem , q: cartItem.q + 1 }
      :
        cartItem
    )
  }

  return [ ...cartItems , payload ]
}