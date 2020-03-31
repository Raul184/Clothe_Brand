import React , { useState } from 'react'
import './sign.styles.scss'
// Layout
import FormInput from '../form-input/FormInput.component'
import CustomButton from '../custom_button/CustomButton.component'
// Sign Up 
import { auth , createUserDocument } from '../../../firebase/firebase.utils'



const SignUp = ({ changeView }) => {
  const [data, setData] = useState({
    displayName: '' ,
    email: '' ,
    phone_number: '' ,
    password: '' ,
    confirmPassword: ''
  })
  const { 
    displayName , 
    email , 
    phone_number , 
    password , 
    confirmPassword} = data;

  const handleChange = e => {
    setData({
      ...data ,
      [e.target.name] : e.target.value
    })
  }

  const handleSubmit = async e => {
    e.preventDefault()
    if( password !== confirmPassword ){
      return alert(`PASSWORDS DON'T MATCH`)
    }
    try {
      // Get user saved from res <== FirecaseStore Promise
      const { user } = await auth.createUserWithEmailAndPassword( email , password)

      // Save it 
      await createUserDocument( user , { displayName })

      // Clean state/ui
      setData({
        displayName: '' ,
        email: '' ,
        phone_number: '' ,
        password: '' ,
        confirmPassword: ''
      })
    } 
    catch (error) {
      console.log(error.message)
    }
  }
  return (
    <div className='sign_up'>
      <h2 className='title'>Sign Up</h2>
      <form className='sign-up-form' onSubmit={handleSubmit}>
        <FormInput 
          type="string" 
          name='displayName'
          value={displayName} 
          label='Name'
          required
          handleChange={handleChange}
        />
        <FormInput 
          type="email" 
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
          type="password" 
          name='password'
          value={password}
          label='Password' 
          required
          handleChange={handleChange}
        />
        <FormInput 
          type="password" 
          name='confirmPassword'
          value={confirmPassword}
          label='Confirm Password' 
          required
          handleChange={handleChange}
        />
        <CustomButton type="submit">Sign Up</CustomButton>
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