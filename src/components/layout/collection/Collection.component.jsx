import React from 'react'
import './collection.styles.scss'


const Collection = ({ title , items }) => (
  <div className="collection-preview">
    <h1>{title.toUpperCase()}</h1>
    <div className="preview">
      { //Display just 4 items/collection
        items
          .filter( (el , idx) => idx < 4 )
          .map(el => <div>{el.name}</div>)
      }
    </div>
  </div>
)



export default Collection;