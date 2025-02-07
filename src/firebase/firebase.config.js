// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAE9t9di41c97oZZSf_cv9ADhIBXuxDHro",
  authDomain: "mern-book-inventory-46ec2.firebaseapp.com",
  projectId: "mern-book-inventory-46ec2",
  storageBucket: "mern-book-inventory-46ec2.firebasestorage.app",
  messagingSenderId: "42336870466",
  appId: "1:42336870466:web:b71cb4dc9b3fc75df38ddb",
  measurementId: "G-MBSB4LTHDM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;