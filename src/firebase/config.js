import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBDOqf52dCdDOCHCmY-Voj9ir3Bc9iUAwk",
  authDomain: "r-place-clone-1ac3e.firebaseapp.com",
  projectId: "r-place-clone-1ac3e",
  storageBucket: "r-place-clone-1ac3e.appspot.com",
  messagingSenderId: "454284492829",
  appId: "1:454284492829:web:6be13ee0fc7742a07606f4",
};

//init firebse
initializeApp(firebaseConfig);

//init firestore
const db = getFirestore();

//init firebase auth
const auth = getAuth();

//google auth
const GoogleProvider = new GoogleAuthProvider();

export { db, auth, GoogleProvider };
