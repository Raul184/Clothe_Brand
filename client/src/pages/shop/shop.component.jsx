import React , { useEffect , lazy , Suspense } from 'react';
import { Route } from 'react-router-dom';
// Redux
import { connect } from 'react-redux';
import { fetchCollectionsStart } from '../../redux/shop/shop.actions';
// Loading Spinner
import Spinner from '../../components/with-spinner/with-spinner.component';
// Memoization
import { createStructuredSelector } from 'reselect'
import { selectIsCollectionFetching } from '../../redux/shop/shop.selectors'
// Comps.
const CollectionsOverview = lazy(() => import('../../components/collections-overview/collections-overview.component'))
const CollectionPage = lazy(() => import('../collection/collection.component'))


export const ShopPage = ({ match , fetchCollectionsStart }) => {
  useEffect(() => {
    fetchCollectionsStart();
  },  
  [fetchCollectionsStart])

  return (
    <div className='shop-page'>
      <Suspense fallback={<Spinner />}>
        <Route exact path={`${match.path}`} component={CollectionsOverview}/>
        <Route path={`${match.path}/:collectionId`} component={CollectionPage}/>      
      </Suspense>
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
