import React from 'react';
import { connect } from 'react-redux';

import {
  clearItemFromCart,
  addItem,
  removeItem
} from '../../redux/cart/cart.actions';

import {
  CheckoutItemDiv,
  ImageDiv,
  TextDiv,
  QuantityDiv,
  RemoveButtonDiv
} from './checkout-item.styles';

const CheckoutItem = ({ cartItem, clearItem, addItem, removeItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <CheckoutItemDiv>
      <ImageDiv>
        <img src={imageUrl} alt='item' />
      </ImageDiv>
      <TextDiv>{name}</TextDiv>
      <QuantityDiv>
        <div onClick={() => removeItem(cartItem)}>&#10094;</div>
        <span>{quantity}</span>
        <div onClick={() => addItem(cartItem)}>&#10095;</div>
      </QuantityDiv>
      <TextDiv>{price}</TextDiv>
      <RemoveButtonDiv onClick={() => clearItem(cartItem)}>
        &#10005;
      </RemoveButtonDiv>
    </CheckoutItemDiv>
  );
};

const mapDispatchToProps = dispatch => ({
  clearItem: item => dispatch(clearItemFromCart(item)),
  addItem: item => dispatch(addItem(item)),
  removeItem: item => dispatch(removeItem(item))
});

export default connect(
  null,
  mapDispatchToProps
)(CheckoutItem);
