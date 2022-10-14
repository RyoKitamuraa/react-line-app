import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyA7BSWV7yGin4P4mGwZt9JxcZP__O8f_nk",
  authDomain: "line-clone-5482a.firebaseapp.com",
  projectId: "line-clone-5482a",
  storageBucket: "line-clone-5482a.appspot.com",
  messagingSenderId: "416311964675",
  appId: "1:416311964675:web:f3a16ded23e07a75d18a36"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db, auth};