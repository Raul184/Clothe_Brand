import React from 'react';
import { connect } from 'react-redux';

import { addItem } from '../../redux/cart/cart.actions';

import {
  CollectionItemDiv,
  CollectionFooterDiv,
  AddButton,
  BackgroundImage,
  NameDiv,
  PriceDiv
} from './collection-item.styles';

const CollectionItem = ({ item, addItem }) => {
  const { name, price, imageUrl } = item;

  return (
    <CollectionItemDiv>
      <BackgroundImage className='image' imageUrl={imageUrl} />
      <CollectionFooterDiv>
        <NameDiv>{name}</NameDiv>
        <PriceDiv>{price}</PriceDiv>
      </CollectionFooterDiv>
      <AddButton onClick={() => addItem(item)} inverted>
        Add to cart
      </AddButton>
    </CollectionItemDiv>
  );
};

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item))
});

export default connect(
  null,
  mapDispatchToProps
)(CollectionItem);
