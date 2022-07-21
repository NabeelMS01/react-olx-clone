

import firebase from "firebase/app" ;
 import  'firebase/auth'
import 'firebase/firebase'
import 'firebase/storage'
import 'firebase/firestore'
 

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDEzEiaNuwq9cbHkoLLOA6l2tTOjoD1yX4",
    authDomain: "olx-demo-941c3.firebaseapp.com",
    projectId: "olx-demo-941c3",
    storageBucket: "olx-demo-941c3.appspot.com",
    messagingSenderId: "320749905566",
    appId: "1:320749905566:web:5bdf130f140dd172957d8f",
    measurementId: "G-FZFL544RRH"
  };


  export  default firebase.initializeApp(firebaseConfig)