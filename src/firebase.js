import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD8w_lNxEo5y-R9VbWaGoPJTr0Lmrh1Kzw",
  authDomain: "fir-user-reg-auth-9cffd.firebaseapp.com",
  projectId: "fir-user-reg-auth-9cffd",
  storageBucket: "fir-user-reg-auth-9cffd.appspot.com",
  messagingSenderId: "652321676703",
  appId: "1:652321676703:web:526e47893bd3b1833371aa",
  measurementId: "G-B4J01384ZH",
};

// Initialize Firebase and Firebase Authentication
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
