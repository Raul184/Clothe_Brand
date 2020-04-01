import React from 'react'
import './header.styles.scss'
import { Link } from 'react-router-dom'
import { ReactComponent as Logo } from '../../../assets/crown.svg'
import {auth} from '../../../firebase/firebase.utils'
// redux
import { connect } from 'react-redux'


const Header = ({ currentUser }) => (
  <div className="header">
    <Link className='logo-container' to='/'>
      <Logo className='logo' />
    </Link>
    <div className="options">
      <Link className='option' to='/shop'>SHOP</Link>
      <Link className='option' to='/contact'>CONTACT</Link>
      {currentUser ? 
        <div className='option' onClick={() => auth.signOut()}>{currentUser} SIGN OUT</div> 
        :
        <Link className='option' to='/sign_in'>SIGN IN</Link> 
      }
    </div>
  </div>
)


const mapStateToProps = state => ({
  currentUser: state.user.currentUser
})

export default connect(
  mapStateToProps ,
  null
)(Header);

