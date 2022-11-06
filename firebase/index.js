// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAdeIIPUhaGuWK88v6YTdC-nwOKFJRVL-U",
  authDomain: "todo-app-b883e.firebaseapp.com",
  projectId: "todo-app-b883e",
  storageBucket: "todo-app-b883e.appspot.com",
  messagingSenderId: "698900449215",
  appId: "1:698900449215:web:3f2496d37b097e6095430a",
  measurementId: "G-CXLCLKF0LL"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
export { auth, db };

// What I did here is I just pasted the firebase config. I additionally created two variables auth and db which are the firebase auth module and firestore module, respectively.