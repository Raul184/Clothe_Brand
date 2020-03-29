import React , { useState } from 'react'
import './sign.styles.scss'
import FormInput from '../form-input/FormInput.component'
import CustomButton from '../custom_button/CustomButton.component'

const SignIn = ({ changeView }) => {
  const [ data, setData] = useState({
    email: '' ,
    password: ''
  })
  const { email , password } = data

  const handleChange = e => {
    setData({
      ...data , 
      [ e.target.name ] : e.target.value
    })
  }

  const handleSubmit = e => {
    e.preventDefault();
  }
  return (
    <div className='sign_in'>
      <h2>Sign In with email and password please</h2>
      <form onSubmit={handleSubmit}>
        <FormInput 
          type="email" 
          name='email'
          value={email} 
          label='Email'
          required
          handleChange={handleChange}
        />
        <FormInput 
          type="password" 
          name='password'
          value={password}
          label='Password' 
          required
          handleChange={handleChange}
        />
        <CustomButton type="submit">Login</CustomButton>
        <small>
          Don't have an account ?
          <span 
            className="handleView"
            onClick={() => changeView(false)}
          >
            SIGN UP
          </span> 
        </small>
      </form>
    </div>
  )
}


export default SignIn