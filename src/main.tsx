import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  // apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  // authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  // projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  // storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  // messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  // appId: import.meta.env.VITE_FIREBASE_APP_ID,
  // measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
  //   VITE_FIREBASE_API_KEY=AIzaSyBTOLTFgtPuh6NuYw1I3p2Vky0jVhajZCM
  // VITE_FIREBASE_AUTH_DOMAIN=letphil-site.firebaseapp.com
  // VITE_FIREBASE_PROJECT_ID=letphil-site
  // VITE_FIREBASE_STORAGE_BUCKET=letphil-site.firebasestorage.app
  // VITE_FIREBASE_MESSAGING_SENDER_ID=438286406118
  // VITE_FIREBASE_APP_ID=1:438286406118:web:811dabb0d311426c2b8627
  // VITE_MEASUREMENT_ID=G-QS3Z6NP693
  apiKey: "AIzaSyBTOLTFgtPuh6NuYw1I3p2Vky0jVhajZCM",
  authDomain: "letphil-site.firebaseapp.com",
  projectId: "letphil-site",
  storageBucket: "letphil-site.firebasestorage.app",
  messagingSenderId: "438286406118",
  appId: "1:438286406118:web:811dabb0d311426c2b8627",
  measurementId: "G-QS3Z6NP693",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

export { analytics, db, auth, storage };

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
