import React from 'react'
import './collectionItem.styles.scss'
// Comps.
import CustomButton from '../custom_button/CustomButton.component'
// redux
import { connect } from 'react-redux'
import { addItemToCart } from '../../../redux/cart/cart.actions'


const CollectionItem = ({ item , addItemToCart }) => {
  const { id , name , price , imageUrl } = item;
  return (
    <div className="collection-item">
      <div 
        className="image"
        style={{
          backgroundImage: `url(${imageUrl})`
        }}
      />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <CustomButton 
        s={true} 
        onClick={()=> addItemToCart({ id , name , price , imageUrl , q: 1 })}
      >
        Add to cart
      </CustomButton>
    </div>
  )
}


export default  connect(
  null ,
  { addItemToCart }
)(CollectionItem);