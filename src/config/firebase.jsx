// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// Import the functions you need from the SDKs you need


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC4Kt_36Njsz3UsGJ7AaTN8tJQwzId6I6U",
    authDomain: "test-74a55.firebaseapp.com",
    projectId: "test-74a55",
    storageBucket: "test-74a55.appspot.com",
    messagingSenderId: "241634483846",
    appId: "1:241634483846:web:16f94e39b78895b7387b07",
    measurementId: "G-5S8KZBB0C9"
  };


// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const storage = getStorage(app);
export const db = getFirestore(app);
export const auth = getAuth(app);