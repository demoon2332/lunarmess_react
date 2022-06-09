import firebase from 'firebase/app';

import 'firebase/analytics';
import 'firebase/auth';
import 'firebase/firestore';

var firebaseConfig = {
  apiKey: "AIzaSyAspW6I4jqT4sWBxGTrnULmcGLr3vWsw9w",
  authDomain: "lunarmess-f928e.firebaseapp.com",
  projectId: "lunarmess-f928e",
  storageBucket: "lunarmess-f928e.appspot.com",
  messagingSenderId: "186997672677",
  appId: "1:186997672677:web:25ff7004559cc80ba5e20c",
  measurementId: "G-V7YE81JX3Y"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const auth = firebase.auth();
const db = firebase.firestore();

if (window.location.hostname === 'localhost') {
  // auth.useEmulator('http://localhost:9099');
  // db.useEmulator('localhost', '8080');
}

export { db, auth };
export default firebase;
