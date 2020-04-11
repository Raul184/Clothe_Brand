import React , { useEffect } from 'react'
import './shopPage.styles.scss'
import { Route } from 'react-router-dom'
// Comps.
import CategoriesOverview from '../../layout/categoriesOverview/CategoriesOverview.component'
import WithSpinner from '../../layout/HOCSpinner/WithSpinner.component'
// Pages
import CategoryPage from '../Category/CategoryPage.component'
// Firestore
import { db , arrSnapshopObjConverter } from '../../../firebase/firebase.utils'
// Redux
import { connect } from 'react-redux'
import { updateCollects , spinOnLoading } from '../../../redux/shop/shop.actions'
// Memoization
import { createStructuredSelector } from 'reselect'
import { selectLoading } from '../../../redux/shop/shop.selectors'

// Spinner Attached
const CategoriesOverviewSpinner = WithSpinner(CategoriesOverview)
const CategoryPageSpinner = WithSpinner(CategoryPage)


const ShopPage = ({ match , updateCollects , spinOnLoading , isLoading }) => {
  // let unsubscribeFromSnapshot = null;
  // On changes
    // unsubscribeFromSnapshot = collectionRef.onSnapshot( async snapShot => {
    //   const collectionMap = arrSnapshopObjConverter(snapShot)
    //   updateCollects(collectionMap);
    //   spinOnLoading()
    // })
  useEffect(() => {
    // Search Ref -> 
    const collectionRef = db.collection('collections');
    // Get -> Collection Data needed
    collectionRef.get().then(
      async data => {
        const collectionMapped = arrSnapshopObjConverter( data )
        updateCollects(collectionMapped)
        spinOnLoading()
      }
    )
  }, // eslint-disable-next-line 
  [])

  return (
  <div className='ShopPage'>
    <Route exact path={`${match.path}`} 
      render={ 
        (props) => <CategoriesOverviewSpinner  isLoading={isLoading} {...props}/> } 
    />
    <Route path={`${match.path}/:categoryId`} 
      render={ 
        (props) => <CategoryPageSpinner isLoading={isLoading} {...props}/> } 
    />
  </div>
  )
}

const mapStateToProps = createStructuredSelector({
  isLoading: selectLoading
})

export default connect(
  mapStateToProps ,
  { updateCollects , spinOnLoading }
)(ShopPage);