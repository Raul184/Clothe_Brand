import React , { useEffect } from 'react'
import './shopPage.styles.scss'
import { Route } from 'react-router-dom'
// Comps.
import CategoriesOverview from '../../layout/categoriesOverview/CategoriesOverview.component'
import WithSpinner from '../../layout/HOCSpinner/WithSpinner.component'
// Pages
import CategoryPage from '../Category/CategoryPage.component'
// Redux
import { connect } from 'react-redux'
import { fetchCollections } from '../../../redux/shop/shop.actions'
// Memoization
import { createStructuredSelector } from 'reselect'
import { selectLoading } from '../../../redux/shop/shop.selectors'


// HOC Spinner Attached
const CategoriesOverviewSpinner = WithSpinner(CategoriesOverview)
const CategoryPageSpinner = WithSpinner(CategoryPage)


const ShopPage = ({ match , fetchCollections , isLoading }) => {
  useEffect(() => {
    fetchCollections()
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
  { fetchCollections }
)(ShopPage);