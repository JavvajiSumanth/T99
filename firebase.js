// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyD1boYMspExIZJioIXZydChH5qYhjRkmUM", // Replace with your Firebase API key
  authDomain: "texas-golf-center.firebaseapp.com", // Replace with your Firebase Auth domain
  projectId: "texas-golf-center", // Replace with your Firebase project ID
  storageBucket: "texas-golf-center.appspot.com", // Replace with your Firebase storage bucket
  messagingSenderId: "963556922158", // Replace with your Firebase messaging sender ID
  appId: "1:963556922158:web:d72485a32092760b91a0bf", // Replace with your Firebase app ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export const db = getFirestore(app);
