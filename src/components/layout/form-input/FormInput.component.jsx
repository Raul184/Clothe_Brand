import React from 'react'
import './form-input.styles.scss'


const FormInput = ({ handleChange , label , ...rest }) => (
  <div className="group">
    {
      label ?
      (<label className={`form-input-label ${rest.value.length ? 'shrink' : ''}`}>
        {label}
      </label>)
      :
      null
    }
    <input 
      className="form-input" 
      type="text"
      onChange={handleChange}
      {...rest}
    />
  </div>
)

export default FormInput;