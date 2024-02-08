// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCI9PS2QWt7cq9uzuTBCi_YgrUpe6vMiXs",
  authDomain: "eternattire-ecomm.firebaseapp.com",
  projectId: "eternattire-ecomm",
  storageBucket: "eternattire-ecomm.appspot.com",
  messagingSenderId: "125073405231",
  appId: "1:125073405231:web:41d429ce389ce03e081dda"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export default app;