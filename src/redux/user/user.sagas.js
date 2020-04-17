import { takeLatest , put , all , call } from 'redux-saga/effects';
// Types
import UserActionTypes from './user.types'
import { 
  signInSuccess , 
  signInFailure 
} from './user.actions'
// Google
import { 
  auth , 
  googleProvider ,
  createUserProfileDocument
} from '../../firebase/firebase.utils';

const {
  GOOGLE_SIGN_IN_START ,
  EMAIL_SIGN_IN_START
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
  // GOOGLE SIGN
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
  // EMAIL & PASS SIGN
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
// For the Sagas-Root
/////////////////////////////

export function* userSagas(){
  yield all([ 
    call(onGoogleSignInStart) ,
    call(onEmailPassSignInStart)
  ])
}  