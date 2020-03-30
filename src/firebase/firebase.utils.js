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