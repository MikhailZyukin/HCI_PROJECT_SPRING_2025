import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCTZ42kWJqrhlavVbxtyhJhbwI0hBRNEvs",
  authDomain: "e-motion-141ac.firebaseapp.com",
  projectId: "e-motion-141ac",
  storageBucket: "e-motion-141ac.firebasestorage.app",
  messagingSenderId: "351925661553",
  appId: "1:351925661553:web:f1c18333ee1297f0dad0d0",
  measurementId: "G-5NV49CTXWR"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };
