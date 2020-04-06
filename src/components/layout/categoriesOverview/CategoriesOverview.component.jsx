import React from 'react'
import './Categories.styles.scss'
// Redux
import { connect } from 'react-redux'
// Comps.
import CategoriesItem from '../categoriesItem/CategoriesItem.component'
// Memoization
import { selectConvertedCollectionItems } from '../../../redux/shop/shop.selectors'
import { createStructuredSelector } from 'reselect'

const Categories = ({ preview }) => {
  console.log(preview);
  return (
    <div>
      { preview.map(({ id , ...rest}) => <CategoriesItem key={id} {...rest} /> ) }
    </div>
  )
}


const mapStateToProps = createStructuredSelector({
  preview: selectConvertedCollectionItems
})

export default connect( 
  mapStateToProps , 
  null
)(Categories);