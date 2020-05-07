import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';

import {
  selectCartItems,
  selectCartTotal
} from '../../redux/cart/cart.selectors';

import {
  CheckoutPageDiv,
  CheckoutHeaderDiv,
  HeaderBlockDiv,
  TotalDiv,
  WarningDiv
} from './checkout.styles';

const CheckoutPage = ({ cartItems, total }) => (
  <CheckoutPageDiv>
    <CheckoutHeaderDiv>
      <HeaderBlockDiv>
        <span>Product</span>
      </HeaderBlockDiv>
      {/* <HeaderBlockDiv>
        <span>Description</span>
      </HeaderBlockDiv> */}
      <HeaderBlockDiv>
        <span>Quantity</span>
      </HeaderBlockDiv>
      <HeaderBlockDiv>
        <span>Price</span>
      </HeaderBlockDiv>
      <HeaderBlockDiv>
        <span>Remove</span>
      </HeaderBlockDiv>
    </CheckoutHeaderDiv>
    {cartItems.map(cartItem => (
      <CheckoutItem key={cartItem.id} cartItem={cartItem} />
    ))}
    <TotalDiv>TOTAL: ${total}</TotalDiv>
    <WarningDiv>
      *Please use the following test credit card for payments*
      <br />
      4242 4242 4242 4242 - Exp: 01/20 - CVV: 123
    </WarningDiv>
    <StripeCheckoutButton price={total} />
  </CheckoutPageDiv>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal
});

export default connect(mapStateToProps)(CheckoutPage);
