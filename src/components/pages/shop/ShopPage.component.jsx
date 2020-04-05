import React from 'react'
// Router
import { Route } from 'react-router-dom';
// Comps.
import CategoriesOverview from '../../layout/categoriesOverview/CategoriesOverview.component'
// Pages
import CategoryPage from '../Category/CategoryPage.component'

const ShopPage = ({ match }) => {
  return (
  <div className='ShopPage'>
    <Route exact path={`${match.path}`} component={ CategoriesOverview } />
    <Route path={`${match.path}/:categoryId`} component={ CategoryPage } />
  </div>
  )
}

export default ShopPage;