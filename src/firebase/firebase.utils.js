// Firebase
import firebase from 'firebase/app';
// DB
import 'firebase/firestore';
// Authentication
import 'firebase/auth';


const config = {
  apiKey: "AIzaSyA4BJlVisiLgkPhYXJY7Pw8IIVXfKLX9ew",
  authDomain: "e-commerce-be00f.firebaseapp.com",
  databaseURL: "https://e-commerce-be00f.firebaseio.com",
  projectId: "e-commerce-be00f",
  storageBucket: "e-commerce-be00f.appspot.com",
  messagingSenderId: "529845543185",
  appId: "1:529845543185:web:59d51c99d31262a6f6acb0",
  measurementId: "G-47HVTJN01J"
};

// METHODS
// Store into DB
export const createUserDocument = async (userAuth , aditionalD ) => {
  if(!userAuth) return ;

  // if there's user
  // Get it ==> by reference (Just-Read Info) or by collection ( CRUD )
  const userRef = db.doc(`users/${userAuth.uid}`)
  const snapshot = await userRef.get()
  
  if(!snapshot.exists){
    const { displayName , email } = userAuth
    const createdAt = new Date()

    try {
      await userRef.set({
        displayName , 
        email ,
        createdAt ,
        ...aditionalD
      })  
    } 
    catch (error) {
      console.log( 'Error on saving bro , sorry' , error.message )  
    }
    return userRef;
  }
}

//Init
firebase.initializeApp(config);
// firebase.analytics();


// Auth
export const auth = firebase.auth();
// DB
export const db = firebase.firestore();

// Google Authentication Utility
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: `select_account` });

// For all different ways of sign-in ( google , twitter , facebook... )
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;