import React from 'react'
import './categoriesItem.styles.scss'
import { Link , withRouter } from 'react-router-dom'
// Layout
import CollectionItem from '../collectionItem/CollectionItem.component'


const CollectionPreview = ({ title , items , match }) => (
  <div className="collection-preview">
    <h1><Link to={`${match.path}/${title.toLowerCase()}`}>{title.toUpperCase()}</Link></h1>
    <div className="preview">
      { //Display just 4 items/collection
        items
          .filter( (el , idx) => idx < 4 )
          .map( el => <CollectionItem key={el.id} item={el} />)
      }
    </div>
  </div>
)



export default withRouter(CollectionPreview);