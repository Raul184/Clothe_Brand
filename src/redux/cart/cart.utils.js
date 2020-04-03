// ADD
export const checkItemsQuantity = ( cartItems , payload ) => {
  console.log(payload);
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

// REMOVE
export const removeItemQuantity = ( cartItems , id ) => {
  console.log(id);
  const existCartItem = cartItems.find(el => el.id === id )

  if(existCartItem.q === 1){
    return cartItems.filter( el => el.id !== id )
  }
  
  return cartItems.map( cartItem => 
      cartItem.id === id ? 
        { ...cartItem , q: cartItem.q - 1 }
      :
        cartItem
    )
}
