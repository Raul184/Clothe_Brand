import React from 'react'
import './header.styles.scss'
import { Link } from 'react-router-dom'
import { ReactComponent as Logo } from '../../../assets/crown.svg'
import {auth} from '../../../firebase/firebase.utils'
// redux
import { connect } from 'react-redux'
// comps.
import Cart from '../cart/Cart.component'
import CartDropDown from '../cartDropdown/CartDropDown.component'



const Header = ({ currentUser , hidden }) => (
  <div className="header">
    <Link className='logo-container' to='/'>
      <Logo className='logo' />
    </Link>
    <div className="options">
      <Link className='option' to='/shop'>SHOP</Link>
      <Link className='option' to='/contact'>CONTACT</Link>
      {currentUser ? 
        <div className='option' onClick={() => auth.signOut()}> SIGN OUT</div> 
        :
        <Link className='option' to='/sign'>SIGN IN</Link> 
      }
      <Cart />
    </div>
    {
      hidden && <CartDropDown />
    }
  </div>
)


const mapStateToProps = state => ({
  currentUser: state.user.currentUser ,
  hidden: state.cart.hidden
})

export default connect(
  mapStateToProps ,
  null
)(Header);

