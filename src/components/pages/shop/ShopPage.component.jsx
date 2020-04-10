import React , { useEffect } from 'react'
// Router
import { Route } from 'react-router-dom';
// Comps.
import CategoriesOverview from '../../layout/categoriesOverview/CategoriesOverview.component'
// Pages
import CategoryPage from '../Category/CategoryPage.component'
// Firestore
import { db , arrSnapshopObjConverter } from '../../../firebase/firebase.utils'
// Redux
import { connect } from 'react-redux'
import { updateCollects } from '../../../redux/shop/shop.actions'

const ShopPage = ({ match }) => {
  let unsubscribe = null;
  useEffect(() => {
    // Search Ref -> Get -> Collection Data needed
    const collectionRef = db.collection('collections');
    // On changes
    collectionRef.onSnapshot( async snapShot => {
      const collectionMap = arrSnapshopObjConverter(snapShot)
      updateCollects(collectionMap);
    }) 
  }, 
  [])

  return (
  <div className='ShopPage'>
    <Route exact path={`${match.path}`} component={ CategoriesOverview } />
    <Route path={`${match.path}/:categoryId`} component={ CategoryPage } />
  </div>
  )
}

export default connect(
  null ,
  { updateCollects }
)(ShopPage);