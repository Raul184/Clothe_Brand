import React, { Component } from 'react'
import Header from './components/layout/header/Header.component'
//Pages
import Homepage from './components/pages/home/HomePage.component'
import ShopPage from './components/pages/shop/ShopPage.component'
import ContactPage from './components/pages/contact/ContactPage.component'
import SignUp_SignIn from './components/pages/sign/SignUp_SignIn.component'
//Routing
import { Route , Switch } from 'react-router-dom'
// Auth
import { auth , createUserDocument } from './firebase/firebase.utils'


class App extends Component {
  constructor(){
    super()
    this.state = {
      currentUser: null
    }
  }

  // AUTH
  unsubscribeFromAuth = null

  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged( 
      async user => {
        if(user){
          // reference obj
          const userRef = await createUserDocument(user);
          //document snapShot obj
          userRef.onSnapshot( snapShot => {
              this.setState({
                currentUser: {
                  id: snapShot.id ,
                  ...snapShot.data()
                }
              })
          })
        }
        // if user logs out
        this.setState({ currentUser: user })
      }
    )
  }
  //Avoid memory leaks
  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }
  render() {
    return (
      <div className="App">
        <Header currentUser={this.state.currentUser}/>
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route exact path='/sign_in' component={SignUp_SignIn} />
          <Route exact path='/shop' component={ShopPage} />
          <Route exact path='/contact' component={ContactPage} />
        </Switch>
      </div>
    )
  }
}

export default App;
