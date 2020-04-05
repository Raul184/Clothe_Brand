import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
// App reducers
import userReducer from './user/user.reducer'
import cartReducer from './cart/cart.reducer';
import categoriesReducer from './categories/categories.reducer'
import shopPreview from './shopPreview/shopPreview.reducer'

const persistConfig = {
  key: 'root' ,
  storage ,
  whitelist: [ 'cart' ]
}

const rootReducer = combineReducers({ 
  user: userReducer ,
  cart: cartReducer ,
  catg: categoriesReducer ,
  preview: shopPreview
})

export default persistReducer( persistConfig , rootReducer ); 