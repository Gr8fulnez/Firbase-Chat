import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorge } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "reactchat-8569e.firebaseapp.com",
  projectId: "reactchat-8569e",
  storageBucket: "reactchat-8569e.appspot.com",
  messagingSenderId: "616422482720",
  appId: "1:616422482720:web:5f5d72f3d1b877fb6a6d45",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore();
export const storage = getStorge();
