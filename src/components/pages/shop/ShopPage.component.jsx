import React, { Component } from 'react'
import tempData from '../../../shopData'
//Comps.
import Collection from '../../layout/collection/Collection.component'


export default class Shop extends Component {
  constructor(){
    super()
    this.state = {
      collections: tempData 
    }
  }
  render() {
    const { collections } = this.state
    return (
      <div className='shop-page'>
        {
          collections.map(({id , ...rest}) => <Collection key={id} {...rest} /> )
        }
      </div>
    )
  }
}
