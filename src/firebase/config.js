import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: "AIzaSyBjFaPjAiC-vMP1sLKVKnUbiMIT7-sB6Lo",
  authDomain: "e-shop-16462.firebaseapp.com",
  projectId: "e-shop-16462",
  storageBucket: "e-shop-16462.appspot.com",
  messagingSenderId: "115165028988",
  appId: "1:115165028988:web:1f6aa18fba130165f41ff9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;
