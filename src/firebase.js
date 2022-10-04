// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAXB2ghQQ8DX_GCsu7VVhVEE-36Rny9n-w",
  authDomain: "proyecto4-50f95.firebaseapp.com",
  projectId: "proyecto4-50f95",
  storageBucket: "proyecto4-50f95.appspot.com",
  messagingSenderId: "110194281512",
  appId: "1:110194281512:web:9234d1732388ce4426791d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

