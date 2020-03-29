import React , { useState } from 'react'
import './sign.styles.scss'
// Layout
import FormInput from '../form-input/FormInput.component'
import CustomButton from '../custom_button/CustomButton.component'

const SignUp = ({ changeView }) => {
  const [data, setData] = useState({
    name: '' ,
    email: '' ,
    phone_number: '' ,
    password: ''
  })
  const { name , email , phone_number , password } = data;

  const handleChange = e => {
    setData({
      ...data ,
      [e.target.name] : e.target.value
    })
  }

  const handleSubmit = e => {
    e.preventDefault()
  }
  return (
    <div className='sign_up'>
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <FormInput 
          type="string" 
          name='name'
          value={name} 
          label='Name'
          required
          handleChange={handleChange}
        />
        <FormInput 
          type="string" 
          name='email'
          value={email}
          label='Email' 
          required
          handleChange={handleChange}
        />
        <FormInput 
            type="string" 
            name='phone_number'
            value={phone_number}
            label='Phone Number' 
            required
            handleChange={handleChange}
        />
        <FormInput 
          type="string" 
          name='password'
          value={password}
          label='Password' 
          required
          handleChange={handleChange}
        />
        <CustomButton type="submit">Login</CustomButton>
          <small>
            Already have an account ?
            <span 
              className="handleView"
              onClick={() => changeView(true)}
            >
              SIGN IN
            </span> 
          </small>
      </form>
    </div>
  )
}



export default SignUp;