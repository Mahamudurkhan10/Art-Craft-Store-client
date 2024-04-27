// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCyPVzHvQndIOCx5PrpTsdxUbtHTSqlKlk",
  authDomain: "art-craft-store-2b218.firebaseapp.com",
  projectId: "art-craft-store-2b218",
  storageBucket: "art-craft-store-2b218.appspot.com",
  messagingSenderId: "357058858302",
  appId: "1:357058858302:web:9fc44ac7a9fe89aeb3706f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 export const auth = getAuth(app)