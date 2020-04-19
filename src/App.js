import React , { useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
// Memoization
import { createStructuredSelector } from 'reselect';
import { checkUserSession } from './redux/user/user.actions'
import './App.css';
// Pages
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import CheckoutPage from './pages/checkout/checkout.component';
// Layout
import Header from './components/header/header.component';
import { selectCurrentUser } from './redux/user/user.selectors';



const App = ({ currentUser , checkUserSession }) => {
  useEffect(() => {
    checkUserSession()
  }, 
  [checkUserSession])
  
  return (
    <div>
    <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route exact path='/checkout' component={CheckoutPage} />
        <Route
          exact
          path='/signin'
          render={() =>
            currentUser ? (
              <Redirect to='/' />
            ) : (
              <SignInAndSignUpPage />
            )
          }
        />
      </Switch>
    </div>
  )
}

  

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

export default connect(
  mapStateToProps,
  { checkUserSession }
)(App);
