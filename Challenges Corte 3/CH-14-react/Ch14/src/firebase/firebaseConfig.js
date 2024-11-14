
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAWlBGuaLcuyZNFn2BueS9E5-SZXPPptu0",
  authDomain: "challenge14miranda.firebaseapp.com",
  projectId: "challenge14miranda",
  storageBucket: "challenge14miranda.firebasestorage.app",
  messagingSenderId: "1042440690372",
  appId: "1:1042440690372:web:9493ebf37b72f02b538791"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();