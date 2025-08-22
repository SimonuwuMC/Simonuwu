@@ .. @@
 import { auth, db } from '../config/firebase';
 import { doc, setDoc, getDoc, updateDoc, arrayUnion } from 'firebase/firestore';
 
-// Demo mode flag - remove when Firebase is configured
-const DEMO_MODE = true;
-
-// Demo user data
-const demoUser = {
-  uid: 'demo-user-123',
-  email: 'demo@simonuwu.com',
-  displayName: 'Usuario Demo',
-  photoURL: 'https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=100&h=100',
-  provider: 'demo'
-};
-
 class AuthService {
   constructor() {
     this.currentUser = null;
@@ -28,11 +17,6 @@ class AuthService {
   }
 
   async signInWithGoogle() {
-    if (DEMO_MODE) {
-      console.warn('🔧 Demo mode: Simulating Google sign-in');
-      return this.simulateAuth(demoUser);
-    }
-
     try {
       const provider = new GoogleAuthProvider();
       provider.addScope('email');
@@ .. @@
   }
 
   async signInWithGitHub() {
-    if (DEMO_MODE) {
-      console.warn('🔧 Demo mode: Simulating GitHub sign-in');
-      return { ...demoUser, provider: 'github' };
-    }
-
     try {
       const provider = new GithubAuthProvider();
       provider.addScope('user:email');
@@ .. @@
   }
 
   async signOut() {
-    if (DEMO_MODE) {
-      console.warn('🔧 Demo mode: Simulating sign out');
-      this.currentUser = null;
-      return;
-    }
-
     try {
       await signOut(auth);
       this.currentUser = null;
@@ .. @@
   }
 
   async getCurrentUser() {
-    if (DEMO_MODE) {
-      return demoUser;
-    }
-
     return new Promise((resolve) => {
       const unsubscribe = onAuthStateChanged(auth, (user) => {
         unsubscribe();
@@ .. @@
   }
 
   async createUserDocument(user) {
-    if (DEMO_MODE) {
-      console.warn('🔧 Demo mode: Simulating user document creation');
-      return;
-    }
-
     try {
       const userRef = doc(db, 'users', user.uid);
       const userSnap = await getDoc(userRef);
@@ .. @@
   }
 
   async getUserData(uid) {
-    if (DEMO_MODE) {
-      return {
-        ...demoUser,
-        createdAt: new Date('2025-01-01'),
-        downloads: ['1.0.4-1.21.7', '1.0.3-1.21.4'],
-        favoriteVersions: ['1.21.7', '1.21.4'],
-        totalDownloads: 5,
-        isPremium: true
-      };
-    }
-
     try {
       const userRef = doc(db, 'users', uid);
       const userSnap = await getDoc(userRef);
@@ .. @@
   }
 
   async trackDownload(uid, version) {
-    if (DEMO_MODE) {
-      console.warn(`🔧 Demo mode: Simulating download tracking for ${version}`);
-      return;
-    }
-
     try {
       const userRef = doc(db, 'users', uid);
       await updateDoc(userRef, {
@@ .. @@
   }
 
   async addFavoriteVersion(uid, version) {
-    if (DEMO_MODE) {
-      console.warn(`🔧 Demo mode: Simulating favorite version ${version}`);
-      return;
-    }
-
     try {
       const userRef = doc(db, 'users', uid);
       await updateDoc(userRef, {
@@ .. @@
       console.error('Error adding favorite version:', error);
     }
   }
-
-  // Demo mode helper
-  simulateAuth(userData) {
-    this.currentUser = userData;
-    return userData;
-  }
 }
 
 export default new AuthService();