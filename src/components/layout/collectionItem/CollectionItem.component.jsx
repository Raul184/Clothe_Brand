import React from 'react'
import './collectionItem.styles.scss'
// Comps.
import CustomButton from '../custom_button/CustomButton.component'

const CollectionItem = ({ id , name , price , imageUrl }) => (
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
    <CustomButton s={true}>Add to cart</CustomButton>
  </div>
)


export default  CollectionItem;