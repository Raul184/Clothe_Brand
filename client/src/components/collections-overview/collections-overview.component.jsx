import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CollectionPreview from '../collection-preview/collection-preview.component';

import { selectCollectionsForPreview } from '../../redux/shop/shop.selectors';
import { CollectionsOverviewDiv } from './collections-overview.styles';

const CollectionsOverview = ({ collections }) => (
  <CollectionsOverviewDiv>
    {collections.map(({ id, ...otherCollectionProps }) => (
      <CollectionPreview key={id} {...otherCollectionProps} />
    ))}
  </CollectionsOverviewDiv>
);

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview
});

export default connect(mapStateToProps)(CollectionsOverview);
