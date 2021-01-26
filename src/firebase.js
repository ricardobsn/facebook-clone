// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDyeBdpOs21az_XP0yElh2aKT7tVPz1ycU",
  authDomain: "facebook-clone-3b90f.firebaseapp.com",
  projectId: "facebook-clone-3b90f",
  storageBucket: "facebook-clone-3b90f.appspot.com",
  messagingSenderId: "165309375583",
  appId: "1:165309375583:web:7e87d4846e1661dc5567ea",
  measurementId: "G-M9D7JLT1YZ",
};

const app = firebase.initializeApp(firebaseConfig);

const db = app.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
