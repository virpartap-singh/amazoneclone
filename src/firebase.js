import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: `AIzaSyBDRqjN2FiTz4ghcUdqHFXK6tqoJ-5dLsg`,
  authDomain: `clone-a791c.firebaseapp.com`,
  projectId: `clone-a791c`,
  storageBucket: `clone-a791c.appspot.com`,
  messagingSenderId: `781812169330`,
  appId: `1:781812169330:web:b2e49e6073646621ac20eb`
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
 const db = firebaseApp.firestore();
 const auth = firebase.auth();

 export {db, auth};