import { takeLatest , put , all , call } from 'redux-saga/effects';
// Types
import UserActionTypes from './user.types'
import { 
  signInSuccess , 
  signInFailure ,
  signOutFailure,
  signOutSuccess
} from './user.actions'
// Google
import { 
  auth , 
  googleProvider ,
  createUserProfileDocument ,
  getCurrentUser
} from '../../firebase/firebase.utils';

const {
  GOOGLE_SIGN_IN_START ,
  EMAIL_SIGN_IN_START , 
  CHECK_USER_SESSION ,
  SIGN_OUT_START
} = UserActionTypes

//////////////////////////////////
//  UTILS
/////////////////////////////////

export function* getUserAuth( userAuth ){
  try {
    const userRef = yield call( createUserProfileDocument , userAuth )
    const userSnapshot = yield userRef.get();
    yield put( 
      signInSuccess({ id: userSnapshot.id , ...userSnapshot.data() }) 
    )  
  } 
  catch (error) {
    yield put( signInFailure(error) )
  }
}

////////////////////////////
  // GOOGLE SIGN IN
////////////////////////////
export function* signInWithGoogle(){
  try {
    // to access value
    const { user } = yield auth.signInWithPopup(googleProvider);
    yield getUserAuth(user)
  } 
  catch (error) {
    yield put( 
      signInFailure(error) 
    )
  }
}
//  Listener for Google Sign-ins/ups
export function* onGoogleSignInStart(){
  yield takeLatest( GOOGLE_SIGN_IN_START , signInWithGoogle )
}

////////////////////////////
  // EMAIL & PASS SIGN IN
////////////////////////////

export function* signInWithEmailPass({ payload: { email , password }}){
  try {
    const { user } = yield auth.signInWithEmailAndPassword( email , password )
    yield getUserAuth(user)
  } 
  catch (error) {
    yield put( signInFailure( error ));
  }
}
// Listener for Email_&_Passwords Sign-ins/ups
export function* onEmailPassSignInStart(){
  yield takeLatest( EMAIL_SIGN_IN_START , signInWithEmailPass )
}



//////////////////////////////
// CHECK SESSION FOR USER
/////////////////////////////

export function* isUserAuthenticated(){
  try {
    // Get userAuth logged into app ==> auth.onAuthStateChanged...
    const userAuth = yield getCurrentUser();
    
    if(!userAuth) return ;
    
    yield getUserAuth( userAuth )
  } 
  catch (error) {
    yield put ( 
      signInFailure( error )
    )  
  }
}
// Listener
export function* onCheckUserSession(){
 yield takeLatest( CHECK_USER_SESSION , isUserAuthenticated )
}

////////////////////////////
  // SIGN OUT USER
////////////////////////////
export function* signOutUser(){
  try {
    yield auth.signOut()
    yield put(
      signOutSuccess()
    )
  } 
  catch (error) {
    yield put (
      signOutFailure( error )
    )  
  }
}
// Listener
export function* onCheckUserSignedOut(){
  yield takeLatest( SIGN_OUT_START , signOutUser )
}







//////////////////////////////
// For the Sagas-Root
/////////////////////////////

export function* userSagas(){
  yield all([ 
    call(onGoogleSignInStart) ,
    call(onEmailPassSignInStart) ,
    call(onCheckUserSession) ,
    call(onCheckUserSignedOut)
  ])
}  