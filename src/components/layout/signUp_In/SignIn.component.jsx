import React , { useState } from 'react'
import './sign.styles.scss'
import { withRouter } from 'react-router-dom'
// Comps.
import FormInput from '../form-input/FormInput.component'
import CustomButton from '../custom_button/CustomButton.component'
// Google Sign In
import { signInWithGoogle , auth } from '../../../firebase/firebase.utils'



const SignIn = ({ changeView , history }) => {
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
  // SIGN with EMAIL & PASSWORD
  const handleSubmit = async e => {
    e.preventDefault();
    if(email.length <= 0 || password <= 0 ){
      // Alert to be showed and button to be enabled
      return alert('Please complete all the fields')
    }
    try {
      // Sign user in
      await auth.signInWithEmailAndPassword( email , password )
      // Clear State & ui
      setData({
        email: '' ,
        password: ''
      })
    } 
    catch (error) {
      console.log( error.message )
    }
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
        <CustomButton type="submit">Sign In</CustomButton>
        <CustomButton 
          onClick={signInWithGoogle}
          g={true}
        >
          Sign In with Google
        </CustomButton>
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


export default withRouter(SignIn)