import React from 'react';
import { connect } from 'react-redux';

import CollectionItem from '../../components/collection-item/collection-item.component';

import { selectCollection } from '../../redux/shop/shop.selectors';

import {
  CollectionPageContainer,
  CollectionTitle,
  CollectionItemsContainer
} from './collection.styles';
import Spinner from '../../components/with-spinner/with-spinner.component';

const CollectionPage = ({ collection , match }) => {
  console.log('TEST' , match.url );
  return collection === null ? 
  <Spinner /> 
  :
  <CollectionPageContainer>
    <CollectionTitle>{collection.title}</CollectionTitle>
    <CollectionItemsContainer>
      {collection.items.map(item => (
        <CollectionItem key={item.id} item={item} />
      ))}
    </CollectionItemsContainer>
  </CollectionPageContainer>
  
  
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state)
});

export default connect(mapStateToProps)(CollectionPage);
