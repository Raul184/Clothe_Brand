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

// --------------------------

export const selectTotalItemsCart = createSelector(
  [ selectCart ] ,
  cart => cart.cartItems
)

export const selectCartHidden = createSelector(
  [ selectCart ] ,
  cart => cart.hidden 
)