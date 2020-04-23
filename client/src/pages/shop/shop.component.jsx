import React , { useEffect } from 'react';
import { Route } from 'react-router-dom';
// Redux
import { connect } from 'react-redux';
import { fetchCollectionsStart } from '../../redux/shop/shop.actions';
// Comps
import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import CollectionPage from '../collection/collection.component'
// Loading Spinner
import Spinner from '../../components/with-spinner/with-spinner.component';
// Memoization
import { createStructuredSelector } from 'reselect'
import { selectIsCollectionFetching } from '../../redux/shop/shop.selectors'


export const ShopPage = ({ match , fetchCollectionsStart , isLoading }) => {
  useEffect(() => {
    fetchCollectionsStart();
  }, //eslint-disable-next-line 
  [])
  return (
    <div className='shop-page'>
      {
        isLoading ? 
        <Spinner /> 
        : 
        <Route exact path={`${match.path}`} component={CollectionsOverview}/>
      }
      <Route path={`${match.path}/:collectionId`} component={CollectionPage}/>      
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsCollectionFetching
})
export default connect(
  mapStateToProps,
  { fetchCollectionsStart }
)(ShopPage);
