import React from 'react';
import { connect } from 'react-redux';

import CollectionItem from '../../components/collection-item/collection-item.component';

import { selectCollection } from '../../redux/shop/shop.selectors';

import {
  CollectionPageDiv,
  CollectionTitle,
  CollectionItemsDiv
} from './collection.styles';
import Spinner from '../../components/with-spinner/with-spinner.component';

const CollectionPage = ({ collection , match }) => {
  console.log('TEST' , match.url );
  return collection === null ? 
  <Spinner /> 
  :
  <CollectionPageDiv>
    <CollectionTitle>{collection.title}</CollectionTitle>
    <CollectionItemsDiv>
      {collection.items.map(item => (
        <CollectionItem key={item.id} item={item} />
      ))}
    </CollectionItemsDiv>
  </CollectionPageDiv>
  
  
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state)
});

export default connect(mapStateToProps)(CollectionPage);
