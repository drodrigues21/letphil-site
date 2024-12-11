import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";

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
// WIP: move these to github secrets
const firebaseConfig = {
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
