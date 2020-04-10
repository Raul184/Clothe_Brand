import React from 'react'
import './withSpinner.styles.scss'


const WithSpinner = WrappedComp => ({ isLoading , ...otherProps}) => {
    return isLoading ? (
      <div className="spinner_overlay">
        <div className="spinner_can"></div>
      </div>
    )
    :
    <WrappedComp {...otherProps} />
}


export default WithSpinner;