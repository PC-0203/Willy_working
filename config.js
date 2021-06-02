import * as firebase from 'firebase'
require('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyDsvdYxN3YsjiXdIHxcuAGGkRXiVurq-cE",
  authDomain: "wily-35db6.firebaseapp.com",
  projectId: "wily-35db6",
  storageBucket: "wily-35db6.appspot.com",
  messagingSenderId: "151066000008",
  appId: "1:151066000008:web:112e3e9dd75606e20c3d3d"
};
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();