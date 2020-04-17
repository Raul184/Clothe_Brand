import UserActionTypes from './user.types';
const {
  GOOGLE_SIGN_IN_START ,
  EMAIL_SIGN_IN_START ,
  SIGN_IN_SUCCESS ,
  SIGN_IN_FAILURE
} = UserActionTypes


// to init Saga
export const googleSignInStart = () => ({
  type: GOOGLE_SIGN_IN_START
})

export const emailSignInStart = userData => ({
  type: EMAIL_SIGN_IN_START ,
  payload: userData
})

export const signInSuccess = user => ({
  type: SIGN_IN_SUCCESS ,
  payload: user
})

export const signInFailure = error  => ({
  type: SIGN_IN_FAILURE ,
  payload: error
})