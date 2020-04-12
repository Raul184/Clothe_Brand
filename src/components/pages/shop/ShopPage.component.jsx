import React , { useEffect } from 'react'
import './shopPage.styles.scss'
import { Route } from 'react-router-dom'
// Pg.
import CategoryPageContainer from '../Category/CategoryPageContainer.component'
import CategoriesOverviewContainer from '../../layout/categoriesOverview/CategoriesOverviewContainer.component'
// Redux
import { connect } from 'react-redux'
import { fetchCollections } from '../../../redux/shop/shop.actions'

const ShopPage = ({ match , fetchCollections }) => {
  
  useEffect(
    () => fetchCollections(), // eslint-disable-next-line 
  [])
  return (
  <div className='ShopPage'>
    <Route exact path={`${match.path}`} component={CategoriesOverviewContainer}/>
    <Route path={`${match.path}/:categoryId`} component={CategoryPageContainer} />
  </div>
  )
}

export default connect(
  null ,
  { fetchCollections }
)(ShopPage);