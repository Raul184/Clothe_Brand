import UserActionTypes from './user.types';
const {
  GOOGLE_SIGN_IN_START ,
  EMAIL_SIGN_IN_START ,
  SIGN_IN_SUCCESS ,
  SIGN_IN_FAILURE ,
  CHECK_USER_SESSION ,
  SIGN_OUT_START ,
  SIGN_OUT_SUCCESS ,
  SIGN_OUT_FAILURE ,
  SIGN_UP_START ,
  SIGN_UP_SUCCESS ,
  SIGN_UP_FAILURE
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

export const checkUserSession = () => ({
  type: CHECK_USER_SESSION 
})

// SIGN OUT
export const signOutStart = () => ({
  type: SIGN_OUT_START
})

export const signOutSuccess = () => ({
  type: SIGN_OUT_SUCCESS
})

export const signOutFailure = error => ({
  type: SIGN_OUT_FAILURE ,
  payload: error
})

export const signUpStart = userData => ({
  type: SIGN_UP_START ,
  payload: userData
})

export const signUpSuccess = ({ user , addData }) => ({
  type: SIGN_UP_SUCCESS ,
  payload: { user , addData }
})

export const signUpFailure = error  => ({
  type: SIGN_UP_FAILURE ,
  payload: error
})
