// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCGwxr6Le7lM4FXye7rrVnQhxDaLFbZp3s",
  authDomain: "new-project-e8b2a.firebaseapp.com",
  projectId: "new-project-e8b2a",
  storageBucket: "new-project-e8b2a.firebasestorage.app",
  messagingSenderId: "38996350059",
  appId: "1:38996350059:web:045bafbf6046c2223a4d2e",
  measurementId: "G-GFTL3KS2Q5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut };