@@ .. @@
 import { getFirestore } from 'firebase/firestore';
 import { getAnalytics } from 'firebase/analytics';
 
-// TODO: Replace with your Firebase config
-// For now, using demo mode - check console for warnings
 const firebaseConfig = {
-  apiKey: "demo-key",
-  authDomain: "demo-project.firebaseapp.com",
-  projectId: "demo-project",
-  storageBucket: "demo-project.appspot.com",
-  messagingSenderId: "123456789",
-  appId: "1:123456789:web:demo",
-  measurementId: "G-DEMO"
+  apiKey: "AIzaSyD1fyZ19Wt_qSdHvxTgJsgJxFK3_grFMJ0",
+  authDomain: "simonuwu-modpack.firebaseapp.com",
+  projectId: "simonuwu-modpack",
+  storageBucket: "simonuwu-modpack.firebasestorage.app",
+  messagingSenderId: "277357670010",
+  appId: "1:277357670010:web:e35d9e59c1b4bead0bd5c3",
+  measurementId: "G-Q4S480F1D9"
 };
 
 // Initialize Firebase
@@ .. @@
 export const auth = getAuth(app);
 export const db = getFirestore(app);
 export const analytics = getAnalytics(app);
-
-// Demo mode warning
-console.warn('🔧 Firebase running in DEMO mode. Configure real credentials in firebase.js');
-
 export default app;