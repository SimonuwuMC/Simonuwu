import { auth, db } from '../config/firebase';
import { doc, setDoc, getDoc, updateDoc, arrayUnion } from 'firebase/firestore';
import { GoogleAuthProvider, GithubAuthProvider, signInWithPopup, signOut, onAuthStateChanged } from 'firebase/auth';

class AuthService {
  constructor() {
    this.currentUser = null;
  }

  async signInWithGoogle() {
    try {
      const provider = new GoogleAuthProvider();
      provider.addScope('email');
      provider.addScope('profile');
      
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      
      await this.createUserDocument(user);
      this.currentUser = user;
      
      return user;
    } catch (error) {
      console.error('Error signing in with Google:', error);
      throw error;
    }
  }

  async signInWithGitHub() {
    try {
      const provider = new GithubAuthProvider();
      provider.addScope('user:email');
      
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      
      await this.createUserDocument(user);
      this.currentUser = user;
      
      return user;
    } catch (error) {
      console.error('Error signing in with GitHub:', error);
      throw error;
    }
  }

  async signOut() {
    try {
      await signOut(auth);
      this.currentUser = null;
    } catch (error) {
      console.error('Error signing out:', error);
      throw error;
    }
  }

  async getCurrentUser() {
    return new Promise((resolve) => {
      const unsubscribe = onAuthStateChanged(auth, (user) => {
        unsubscribe();
        this.currentUser = user;
        resolve(user);
      });
    });
  }

  async createUserDocument(user) {
    try {
      const userRef = doc(db, 'users', user.uid);
      const userSnap = await getDoc(userRef);
      
      if (!userSnap.exists()) {
        await setDoc(userRef, {
          uid: user.uid,
          email: user.email,
          displayName: user.displayName,
          photoURL: user.photoURL,
          provider: user.providerData[0]?.providerId,
          createdAt: new Date(),
          downloads: [],
          favoriteVersions: [],
          totalDownloads: 0,
          isPremium: false
        });
      }
    } catch (error) {
      console.error('Error creating user document:', error);
    }
  }

  async getUserData(uid) {
    try {
      const userRef = doc(db, 'users', uid);
      const userSnap = await getDoc(userRef);
      
      if (userSnap.exists()) {
        return userSnap.data();
      }
      return null;
    } catch (error) {
      console.error('Error getting user data:', error);
      return null;
    }
  }

  async trackDownload(uid, version) {
    try {
      const userRef = doc(db, 'users', uid);
      await updateDoc(userRef, {
        downloads: arrayUnion(version),
        totalDownloads: arrayUnion(1)
      });
    } catch (error) {
      console.error('Error tracking download:', error);
    }
  }

  async addFavoriteVersion(uid, version) {
    try {
      const userRef = doc(db, 'users', uid);
      await updateDoc(userRef, {
        favoriteVersions: arrayUnion(version)
      });
    } catch (error) {
      console.error('Error adding favorite version:', error);
    }
  }
}

export default new AuthService();