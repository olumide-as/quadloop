import { initializeApp } from 'firebase/app';
//import * as firebase from 'firebase';
import { getAuth } from'firebase/auth';
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAKRX6_mJOlNK4C-GkDBrNfrl2a_Vc7lvs",
    authDomain: "quadloop-africa.firebaseapp.com",
    projectId: "quadloop-africa",
    storageBucket: "quadloop-africa.appspot.com",
    messagingSenderId: "564622732590",
    appId: "1:564622732590:web:0210024fbd23308d5a1ebf",
    measurementId: "G-XVMMZF1NT6"
  };

  //firebase.initializeApp(firebaseConfig);
  const app = initializeApp(firebaseConfig);

  const auth = getAuth(app);
  const db = getFirestore(app);
  const storage = getStorage(app);

  
  export { auth, db, storage }