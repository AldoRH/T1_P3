
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {getAuth} from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBYkuRR8rqMK0QwG6WUdKA5W8nBHubyPkk",
  authDomain: "crud-react-f4b94.firebaseapp.com",
  projectId: "crud-react-f4b94",
  storageBucket: "crud-react-f4b94.appspot.com",
  messagingSenderId: "537683746021",
  appId: "1:537683746021:web:e4252295bd9e8a8726080c"
};


const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);