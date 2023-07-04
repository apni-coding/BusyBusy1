
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyB0fr3rgKUQEBH1vpgjMToFisVeQAhZtj8",
    authDomain: "busybusy-2cff2.firebaseapp.com",
    projectId: "busybusy-2cff2",
    storageBucket: "busybusy-2cff2.appspot.com",
    messagingSenderId: "922106423173",
    appId: "1:922106423173:web:da1b0a0a69178b8ac306ec"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
