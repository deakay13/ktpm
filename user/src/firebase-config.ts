// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBU5n0PsPpmiKfgnQ-em-veZEoExq9QcZc",
  authDomain: "project-front-end-2e4da.firebaseapp.com",
  projectId: "project-front-end-2e4da",
  storageBucket: "project-front-end-2e4da.appspot.com",
  messagingSenderId: "793686128964",
  appId: "1:793686128964:web:1954e376bf230efaafbf11",
  measurementId: "G-KL38QFPQ42"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


// Xuất Auth để dùng trong các component
export const auth = getAuth(app);
export const firebaseDb = getFirestore(app);