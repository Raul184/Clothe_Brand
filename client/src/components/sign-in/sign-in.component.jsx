import React , { useState } from 'react';
// Layout Comps.
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
// Redux
import { connect } from 'react-redux';
// Sagas
import { googleSignInStart , emailSignInStart } from '../../redux/user/user.actions';
// Styled-Comps
import {
  SignInDiv,
  SignInTitle,
  ButtonsBarDiv
} from './sign-in.styles';

const SignIn = ({ googleSignInStart , emailSignInStart }) => {
  const [ data , setData ] = useState({
    email: '',
    password: ''
  })
  const { email , password } = data;

  const handleSubmit = async e=> {
    e.preventDefault();    
    emailSignInStart({ email , password })
  };

  const handleChange = e => setData({
      ...data, 
      [e.target.name]: e.target.value 
    });
  
  return (
    <SignInDiv>
      <SignInTitle>I already have an account</SignInTitle>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          name='email'
          type='email'
          handleChange={handleChange}
          value={email}
          label='email'
          required
        />
        <FormInput
          name='password'
          type='password'
          value={password}
          handleChange={handleChange}
          label='password'
          required
        />
        <ButtonsBarDiv>
          <CustomButton type='submit'> Sign in </CustomButton>
          <CustomButton 
            type='button' 
            onClick={googleSignInStart} 
            isGoogleSignIn
          >
            Sign in with Google
          </CustomButton>
        </ButtonsBarDiv>
      </form>
    </SignInDiv>
  )
}
  

export default connect(
  null ,
  { 
    googleSignInStart ,
    emailSignInStart
  }
)(SignIn);
