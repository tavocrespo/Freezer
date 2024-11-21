// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC_Y9ccI9TNtCS_qd_RY8V5vxuhC6BlNTk",
  authDomain: "freezer-base-5bffc.firebaseapp.com",
  projectId: "freezer-base-5bffc",
  storageBucket: "freezer-base-5bffc.appspot.com",
  messagingSenderId: "450222543846",
  appId: "1:450222543846:web:6c94cb7f118b6b0d1abc27"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export { auth };
