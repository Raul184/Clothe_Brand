import React from 'react'
import './category.styles.scss'
// Redux
import { connect } from 'react-redux'
// Memoization
import { selectACollection } from '../../../redux/shop/shop.selectors'
import CollectionItemComponent from '../../layout/collectionItem/CollectionItem.component'


const CategoryPage = ({ category }) => {
  return (
    <div className="Category">
      <h2 className='title'>{category.title}</h2>
      <div className="items">
        { category && category.items.map( 
            el => 
              <CollectionItemComponent key={el.id} item={el} />
        )}
      </div>
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
