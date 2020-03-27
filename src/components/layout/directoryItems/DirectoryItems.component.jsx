import React, { Component } from 'react'
//Comps.
import MenuItem from '../menuItem/MenuItem.component'

export default class DirectoryItems extends Component {
  constructor() {
    super()
    this.state = {
      sections: [
        {
          title: 'hats' ,
          image: 'https://i.ibb.co/R70vBrQ/men.png' ,
          id: 1 ,
        },
        {
          title: 'hats' ,
          image: 'https://i.ibb.co/R70vBrQ/men.png' ,
          id: 2 ,
        },
        {
          title: 'hats' ,
          image: 'https://i.ibb.co/R70vBrQ/men.png' ,
          id: 3 ,
        },
        {
          title: 'hats' ,
          image: 'https://i.ibb.co/R70vBrQ/men.png' ,
          id: 4 ,
          size: 'large'
        },
        {
          title: 'hats' ,
          image: 'https://i.ibb.co/R70vBrQ/men.png' ,
          id: 5 ,
          size: 'large'
        }
      ]
    }
  }
  render() {
    const { sections } = this.state;
    return (
      <div className="directory-menu">
        { 
        sections.map( sec => 
          <MenuItem 
            key={sec.id} 
            title={sec.title}
            subtitle="SHOP NOW" 
            img={sec.image} 
            size={sec.size}
          />
          )
        }
      </div>
    )
  }
}


