import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
// Layout
import Header from './components/layout/header/Header.component'
// Pages
import HomePage from './components/pages/home/HomePage.component';
import ShopPage from './components/pages/shop/ShopPage.component';
import SignInAndSignUpPage from './components/pages/sign/SignUp_SignIn.component';
import CheckoutPage from './components/pages/checkout/Checkout.component';
// Firebase
import { auth, createUserDocument } from './firebase/firebase.utils';
import { setCurrentUser } from './redux/user/user.actions';
// Memoization
import { selectCurrentUser } from './redux/user/user.selector';



class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          });
        });
      }
      setCurrentUser(userAuth);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    const { currentUser } = this.props;
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/shop' component={ShopPage} />
          <Route
            exact
            path='/sign'
            render={
              () => currentUser ? 
              <Redirect to='/' />
              : 
              <SignInAndSignUpPage />
            }
          />
          <Route exact path='/checkout' component={CheckoutPage} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  currentUser: selectCurrentUser(state)
})

export default connect(
  mapStateToProps,
  { setCurrentUser }
)(App);