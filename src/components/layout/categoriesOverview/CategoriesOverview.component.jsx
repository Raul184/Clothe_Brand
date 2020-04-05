import React from 'react'
import './Categories.styles.scss'
// Redux
import { connect } from 'react-redux'
// Comps.
import CategoriesItem from '../categoriesItem/CategoriesItem.component'

const Categories = ({ preview }) => {
  return (
    <div>
      { preview.map(({ id , ...rest}) => <CategoriesItem key={id} {...rest} /> ) }
    </div>
  )
}


const mapStateToProps = state => ({
  cart: state.cart.cartItems ,
  preview: state.preview.collections
})

export default connect( 
  mapStateToProps , 
  null
)(Categories);