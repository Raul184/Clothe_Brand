import React from 'react'
import './collection.styles.scss'
// Layout
import CollectionItem from '../collectionItem/CollectionItem.component'


const Collection = ({ title , items }) => (
  <div className="collection-preview">
    <h1>{title.toUpperCase()}</h1>
    <div className="preview">
      { //Display just 4 items/collection
        items
          .filter( (el , idx) => idx < 4 )
          .map(({ id , ...rest }) => <CollectionItem key={id} {...rest} />)
      }
    </div>
  </div>
)



export default Collection;