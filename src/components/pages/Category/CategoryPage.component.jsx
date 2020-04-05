import React from 'react'
// Redux
import { connect } from 'react-redux'
// Memoization
import { selectACollection } from '../../../redux/shop/shop.selectors'


const CategoryPage = ({ category }) => {
  console.log(category);

  return (
    <div className="category">
      <h2>Category Page</h2>
    </div>
  )
}

const mapStateToProps = ( state, otherProps ) => ({
  category: selectACollection(otherProps.match.params.categoryId)(state)
})

export default connect(
  mapStateToProps ,
  null
)(CategoryPage);
