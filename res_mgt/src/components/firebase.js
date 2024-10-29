// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics"; // Optional: Only if you want to use Analytics
import { getAuth } from "firebase/auth"; // For authentication
import { getFirestore } from "firebase/firestore"; // For Firestore database

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAK9_JhIKeusAiDDAS1CphtX10arT5wrBo",
  authDomain: "resmgt-68bc6.firebaseapp.com",
  projectId: "resmgt-68bc6",
  storageBucket: "resmgt-68bc6.appspot.com",
  messagingSenderId: "30021522932",
  appId: "1:30021522932:web:f744886ceef4b7230bd5a1",
  measurementId: "G-9WBXF2KDFG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app); // Optional: Initialize Analytics
const auth = getAuth(app); // Initialize Authentication
const db = getFirestore(app); // Initialize Firestore

export { app, analytics, auth, db }; // Export the initialized services for use in your app