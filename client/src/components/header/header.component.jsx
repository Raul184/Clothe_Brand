import React from 'react';
import { connect } from 'react-redux';
import { signOutStart } from '../../redux/user/user.actions';
// Layout
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
// Memoization
import { createStructuredSelector } from 'reselect';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';

import { ReactComponent as Logo } from '../../assets/crown.svg';

import {
  HeaderDiv,
  LogoDiv,
  OptionsDiv,
  OptionLink
} from './header.styles';

const Header = ({ currentUser, hidden , signOutStart}) => (
  <HeaderDiv>
    <LogoDiv to='/'>
      <Logo className='logo' />
    </LogoDiv>
    <OptionsDiv>
      <OptionLink to='/shop'>SHOP</OptionLink>
      {currentUser ? (
        <OptionLink as='div' onClick={signOutStart}>
          SIGN OUT
        </OptionLink>
      ) : (
        <OptionLink to='/signin'>SIGN UP</OptionLink>
      )}
      <CartIcon />
    </OptionsDiv>
    {hidden ? null : <CartDropdown />}
  </HeaderDiv>
);

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
});

export default connect(
  mapStateToProps ,
  { signOutStart }
)(Header);
