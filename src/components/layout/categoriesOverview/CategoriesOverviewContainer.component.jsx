import { connect } from 'react-redux' 
import { compose } from 'redux'
import { createStructuredSelector } from 'reselect'
// HOC
import WithSpinner from '../../layout/HOCSpinner/WithSpinner.component' 
// Memoization
import { selectLoading } from '../../../redux/shop/shop.selectors'
// Pg.
import CategoriesOverview from './CategoriesOverview.component'


const mapStateToPros = createStructuredSelector({
  isLoading: selectLoading
})

const CategoriesOverviewContainer = compose(
  connect(mapStateToPros) ,
  WithSpinner
)(CategoriesOverview)


export default CategoriesOverviewContainer;