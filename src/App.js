import React from 'react'
import Header from './components/layout/header/Header.component'
//Pages
import Homepage from './components/pages/home/HomePage.component'
import ShopPage from './components/pages/shop/ShopPage.component'
import ContactPage from './components/pages/contact/ContactPage.component'
import SignUp_SignIn from './components/pages/sign/SignUp_SignIn.component'
//Routing
import { Route , Switch } from 'react-router-dom'



function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route exact path='/sign_in' component={SignUp_SignIn} />
        <Route exact path='/shop' component={ShopPage} />
        <Route exact path='/contact' component={ContactPage} />
      </Switch>
    </div>
  );
}

export default App;
