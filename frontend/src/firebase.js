// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDwiHDXinwVFINCZPuiJhgQvjqtI91lFRM",
  authDomain: "clone-yt-d95bb.firebaseapp.com",
  projectId: "clone-yt-d95bb",
  storageBucket: "clone-yt-d95bb.appspot.com",
  messagingSenderId: "1789172417",
  appId: "1:1789172417:web:2f2f5f29dfb44eebcf9240",
  measurementId: "G-50VD87H0S5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
export const db = getFirestore(app);
export const provider = new GoogleAuthProvider();