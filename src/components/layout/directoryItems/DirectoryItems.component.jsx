import React from 'react'
//Comps.
import MenuItem from '../menuItem/MenuItem.component'
// redux
import { connect } from 'react-redux'
// Memoization
import { selectCategoriesSections } from '../../../redux/categories/categories.selectors'
import { createStructuredSelector } from 'reselect'


const DirectoryItems = ({ categories }) => {
  return (
    <div className="directory-menu">
    { 
      categories.map( sec => 
        <MenuItem 
          key={sec.id} 
          title={sec.title}
          subtitle="SHOP NOW" 
          img={sec.image} 
          size={sec.size}
          linkUrl={sec.linkUrl}
        />
      )
    }
  </div>
)}

const mapStateToProps = createStructuredSelector({
  categories: selectCategoriesSections
})

export default connect(
  mapStateToProps ,
  null
)(DirectoryItems);


