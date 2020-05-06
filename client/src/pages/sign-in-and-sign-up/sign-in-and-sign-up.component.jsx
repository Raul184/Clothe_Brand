import React , { useState } from 'react';

import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';

import { SignInAndSignUpContainer } from './sign-in-and-sign-up.styles';

const SignInAndSignUpPage = () => {
  const [ logout , setLogout ] = useState(true);
  return (
    <SignInAndSignUpContainer>
      {
        logout ? <SignUp handle={setLogout}/> : <SignIn />
      }
    </SignInAndSignUpContainer>
  );
}
export default SignInAndSignUpPage;
