import firebase from "firebase/compat/app";
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC-pupZ4w0K1-c9TNSTBDF4PWKG_OiliGk",
    authDomain: "eshop-e713f.firebaseapp.com",
    projectId: "eshop-e713f",
    storageBucket: "eshop-e713f.appspot.com",
    messagingSenderId: "274656078493",
    appId: "1:274656078493:web:fba7600ebaf8539a5d4274",
    measurementId: "G-LCL8SS7LLP"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };

