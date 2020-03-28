import React from 'react'
import './App.scss'
import Header from './components/layout/header/Header.component'
//Pages
import Homepage from './components/pages/home/HomePage.component'
import ShopPage from './components/pages/shop/ShopPage.component'

//Routing
import { Route , Switch } from 'react-router-dom'



function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route exact path='/shop' component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
