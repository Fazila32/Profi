// import firebase from "firebase/app";
// import "firebase/database";
import firebase from "firebase/compat/app";
import "firebase/compat/database";
const firebaseConfig = {
  apiKey: "AIzaSyDH9kEPl60CNiZ1_7N_UmLIyq8OVngK2z8",
  authDomain: "profi-732.firebaseapp.com",
  projectId: "profi-732",
  storageBucket: "profi-732.appspot.com",
  messagingSenderId: "713180330642",
  appId: "1:713180330642:web:897ed1efb896d0810ac44b",
};

const fireDb = firebase.initializeApp(firebaseConfig);

export default fireDb.database().ref();
