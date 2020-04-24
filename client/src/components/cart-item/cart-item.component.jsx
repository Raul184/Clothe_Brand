import React from 'react';

import {
  CartItemDiv,
  ItemDetailsDiv,
  CartItemImage
} from './cart-item.styles';

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => (
  <CartItemDiv>
    <CartItemImage src={imageUrl} alt='item' />
    <ItemDetailsDiv>
      <span>{name}</span>
      <span>
        {quantity} x ${price}
      </span>
    </ItemDetailsDiv>
  </CartItemDiv>
);

export default CartItem;
