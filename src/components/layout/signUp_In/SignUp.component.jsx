import React from 'react'
import './signup.styles.scss'
import { Link } from 'react-router-dom'
// Layout
import FormInput from '../form-input/FormInput.component'


const SignUp = () => (
  <div className='sign-up'>
    
    <span>
      Already have an account ?
      <Link className='already' to='/sign_in'>SING IN</Link>
    </span>
  </div>
)



export default SignUp;