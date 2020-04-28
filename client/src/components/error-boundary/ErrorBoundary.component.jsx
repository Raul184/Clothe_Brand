import React, { Component } from 'react'
import './errorBoundary.styles.scss'
export default class ErrorBoundary extends Component {
  constructor(){
    super();
    this.state = {
      hasErrored: false 
    }
  }
  // Catch error ahead of time
  static getDerivedStateFromError(error){
    // process the error
    return { hasErrored: true }
  }

  // access to info & error
  componentDidCatch(error , info){
    console.log(error);
  }

  render() {
    if(this.state.hasErrored){
      return <div className="Error">
        <h1>Somebody just fucked up Bro, Sorry and please come back later</h1>
        <img src="https://i.imgur.com/U3vTGjX.png" alt="Big fuckup" srcset=""/>
      </div>
    } 
    return this.props.children
  }
}

