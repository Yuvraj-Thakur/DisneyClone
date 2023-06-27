import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBwBhUVrVDod2nkFlinm-0rrBOpQYx4GD8",
  authDomain: "disneyplusclone-5d049.firebaseapp.com",
  projectId: "disneyplusclone-5d049",
  storageBucket: "disneyplusclone-5d049.appspot.com",
  messagingSenderId: "475562671673",
  appId: "1:475562671673:web:c89382511564e21e0dd7e8"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export {auth,provider,storage};
export default db;