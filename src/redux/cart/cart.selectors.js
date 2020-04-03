import { createSelector } from 'reselect'

//  Input_Selector:  f() => just a piece of state 
//  Output_Selector: f() that uses createSeelctor and Input selectors


// MEMOIZATION for Cart component
// Input Selector
const selectCart = state => state.cart;


// Output Selector for Icon Counter on Header 
export const selectedCartItems = createSelector(
  [ selectCart ] ,
  cart => cart.cartItems.length 
);



// ALL ITEMS IN THE CART to checkout
export const selectTotalItemsCart = createSelector(
  [ selectCart ] ,
  cart => cart.cartItems
)


// TOOGGLE CART_DROPDOWN
export const selectCartHidden = createSelector(
  [ selectCart ] ,
  cart => cart.hidden 
)

// TOTAL TO PAY $
export const selectCartTotalPay = createSelector(
  [ selectTotalItemsCart ] ,
  cartItems => cartItems.reduce( ( acc , el ) => {
    acc += el.q * el.price
  }, 
  0 )
)