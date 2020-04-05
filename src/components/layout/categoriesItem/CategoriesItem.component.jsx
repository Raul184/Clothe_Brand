import React from 'react'
import './categoriesItem.styles.scss'
// Layout
import CollectionItem from '../collectionItem/CollectionItem.component'


const CollectionPreview = ({ title , items }) => (
  <div className="collection-preview">
    <h1>{title.toUpperCase()}</h1>
    <div className="preview">
      { //Display just 4 items/collection
        items
          .filter( (el , idx) => idx < 4 )
          .map( el => <CollectionItem key={el.id} item={el} />)
      }
    </div>
  </div>
)



export default CollectionPreview;