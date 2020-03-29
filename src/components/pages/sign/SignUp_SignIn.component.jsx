import React , { useState } from 'react'
import './signUp_signIn.styles.scss'
import SignIn from '../../layout/signUp_In/SignIn.component'
import SignUp from '../../layout/signUp_In/SignUp.component'




const SignUp_SignIn = () => {
  const [show, setShow] = useState(true)
  return (
    <div className='SignUp_SignIn'>
      {
        show ? 
        <SignIn changeView={setShow}/> 
        : 
        <SignUp changeView={setShow} />
      }
    </div>
  )
}

export default SignUp_SignIn;