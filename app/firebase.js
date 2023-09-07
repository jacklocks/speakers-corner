// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBF1gjCEg0jInATMHhTE_wexEutyUE84fU",
  authDomain: "speaker-auth.firebaseapp.com",
  projectId: "speaker-auth",
  storageBucket: "speaker-auth.appspot.com",
  messagingSenderId: "706018351807",
  appId: "1:706018351807:web:77de5ae3f1ca71217fc40a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
