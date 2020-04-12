//redux
import { connect } from 'react-redux'
import { compose } from 'redux'
// Memoization
import { createStructuredSelector } from 'reselect'
import { selectWhenCollectionsLoaded } from '../../../redux/shop/shop.selectors'
// Comps.
import WithSpinner from '../../layout/HOCSpinner/WithSpinner.component'
// Pages
import CategoryPage from './CategoryPage.component'


const mapStateToProps = createStructuredSelector({
  areCollectionsLoaded: state => !!selectWhenCollectionsLoaded(state)
})

const CategoryPageContainer = compose(
  connect(mapStateToProps) ,
  WithSpinner ,
)(CategoryPage)

export default CategoryPageContainer;