import React , { useEffect , lazy , Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
// Memoization
import { createStructuredSelector } from 'reselect';
import { checkUserSession } from './redux/user/user.actions'
// Layout
import Header from './components/header/header.component';
import { selectCurrentUser } from './redux/user/user.selectors';
// Errors-Checker
import ErrorBoundary from './components/error-boundary/ErrorBoundary.component';
// Spinner
import Spinner from './components/spinner/Spinner.component'
// Pages
const HomePage = lazy(() => import('./pages/homepage/homepage.component'))
const ShopPage = lazy(() => import('./pages/shop/shop.component'))
const SignInSignUpPage = lazy(() => import('./pages/sign-in-and-sign-up/sign-in-and-sign-up.component'))
const CheckoutPage = lazy(() => import('./pages/checkout/checkout.component'))



const App = ({ currentUser , checkUserSession }) => {
  useEffect(() => {
    checkUserSession()
  }, 
  [checkUserSession])
  
  return (
    <div>
    <Header />
      <Switch>
        <ErrorBoundary>  
          <Suspense fallback={<Spinner/>}>
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
                  <SignInSignUpPage />
                )
              }
            />
          </Suspense>
        </ErrorBoundary>
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
