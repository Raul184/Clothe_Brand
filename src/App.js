import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom';
import { createStructuredSelector } from 'reselect'
// Layout
import Header from './components/layout/header/Header.component'
// Pages
import HomePage from './components/pages/home/HomePage.component';
import ShopPage from './components/pages/shop/ShopPage.component';
import SignInAndSignUpPage from './components/pages/sign/SignUp_SignIn.component';
import CheckoutPage from './components/pages/checkout/Checkout.component';
import CategoryPage from './components/pages/Category/CategoryPage.component';
// Firebase
import { auth, createUserDocument } from './firebase/firebase.utils';
// Redux 
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user.actions';
// import { selectConvertedCollectionItems } from './redux/shop/shop.selectors'
// Memoization
import { selectCurrentUser } from './redux/user/user.selector';



class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { 
      setCurrentUser , 
      collectionsArr } = this.props;

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

      // Once-Storage-Ready-DB
      // addCollectionsAndDocuments(
      //   'collections' , 
      //   collectionsArr.map(({ title , items }) => ({ title , items }) ) 
      // )
    });
  }
  // On Log Out  user ==> has to become null
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
          <Route path='/shop/:categoryId' component={ CategoryPage } />
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

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser 
  // collectionsArr: selectConvertedCollectionItems
})

export default connect(
  mapStateToProps,
  { setCurrentUser }
)(App);