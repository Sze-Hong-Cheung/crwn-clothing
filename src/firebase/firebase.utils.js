import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDb6NgpR_yolSiFZu3-arv2UxjZPL1hEqQ",
  authDomain: "j-clothing-db-f028f.firebaseapp.com",
  databaseURL: "https://j-clothing-db-f028f.firebaseio.com",
  projectId: "j-clothing-db-f028f",
  storageBucket: "j-clothing-db-f028f.appspot.com",
  messagingSenderId: "635102438990",
  appId: "1:635102438990:web:59ed3fb071712f5526451f",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
