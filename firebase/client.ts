import { getApp, getApps, initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyD4jZ3D08FS91_wC_IvQ_gxAT1AYwG_Pt0",
  authDomain: "prepwise-65bc8.firebaseapp.com",
  projectId: "prepwise-65bc8",
  storageBucket: "prepwise-65bc8.firebasestorage.app",
  messagingSenderId: "123408194585",
  appId: "1:123408194585:web:23a4c70ceb9c7bdbe51e88",
  measurementId: "G-CMFRLP4RPE",
};
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
// Initialize Firebase
// const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);
