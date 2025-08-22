@@ .. @@
   useEffect(() => {
     const initAuth = async () => {
       try {
-        // Check if we're in demo mode
-        const user = await authService.getCurrentUser();
-        if (user) {
-          const userData = await authService.getUserData(user.uid);
-          setUser({ ...user, ...userData });
-        }
+        const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
+          if (firebaseUser) {
+            await authService.createUserDocument(firebaseUser);
+            const userData = await authService.getUserData(firebaseUser.uid);
+            setUser({ ...firebaseUser, ...userData });
+          } else {
+            setUser(null);
+          }
+          setLoading(false);
+        });
+
+        return () => unsubscribe();
       } catch (error) {
         console.error('Auth initialization error:', error);
+        setLoading(false);
       }
-      setLoading(false);
     };
 
     initAuth();