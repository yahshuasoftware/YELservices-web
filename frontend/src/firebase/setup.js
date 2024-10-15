
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBouSICWNtA4uY8P194HlI6Cy9PM883vbk",
  authDomain: "yel-services.firebaseapp.com",
  projectId: "yel-services",
  storageBucket: "yel-services.appspot.com",
  messagingSenderId: "735460406796",
  appId: "1:735460406796:web:58b3f82bd4867329d3e029"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth =getAuth(app)
