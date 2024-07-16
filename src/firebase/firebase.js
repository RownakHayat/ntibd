// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBvQq90qXsvScKKKf2d_Toqg5R1IUQyDFI",
  authDomain: "ntibd-5b688.firebaseapp.com",
  projectId: "ntibd-5b688",
  storageBucket: "ntibd-5b688.appspot.com",
  messagingSenderId: "423036529244",
  appId: "1:423036529244:web:0a7df0a184eb550344d499",
  measurementId: "G-WS4R043CGQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app;