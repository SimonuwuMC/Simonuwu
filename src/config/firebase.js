import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: "AIzaSyD1fyZ19Wt_qSdHvxTgJsgJxFK3_grFMJ0",
  authDomain: "simonuwu-modpack.firebaseapp.com",
  projectId: "simonuwu-modpack",
  storageBucket: "simonuwu-modpack.firebasestorage.app",
  messagingSenderId: "277357670010",
  appId: "1:277357670010:web:e35d9e59c1b4bead0bd5c3",
  measurementId: "G-Q4S480F1D9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
export const auth = getAuth(app);
export const db = getFirestore(app);
export const analytics = getAnalytics(app);

export default app;