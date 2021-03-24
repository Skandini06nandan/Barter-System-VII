import firebase from 'firebase';
require('@firebase/firestore')

const firebaseConfig = {
  apiKey: "AIzaSyByk-fBXO4_FOF0EtuWhwya6e-DWJXdIEs",
  authDomain: "barter-system-app-201aa.firebaseapp.com",
  projectId: "barter-system-app-201aa",
  storageBucket: "barter-system-app-201aa.appspot.com",
  messagingSenderId: "736399018674",
  appId: "1:736399018674:web:e9e12584efaa85527c57ab"
};
  // Initialize Firebase

  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();
