import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBkfQhXA-0Xa9z-8774ezP_vAn0stTUT48",
  authDomain: "kgpl-461fa.firebaseapp.com",
  projectId: "kgpl-461fa",
  storageBucket: "kgpl-461fa.appspot.com",
  messagingSenderId: "40747028855",
  appId: "1:40747028855:web:eeba4c9ffd5ca654469172",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export default db;
