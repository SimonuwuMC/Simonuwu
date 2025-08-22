useEffect(() => {
  const initAuth = async () => {
    try {
      const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
        if (firebaseUser) {
          await authService.createUserDocument(firebaseUser);
          const userData = await authService.getUserData(firebaseUser.uid);
          setUser({ ...firebaseUser, ...userData });
        } else {
          setUser(null);
        }
        setLoading(false);
      });

      return () => unsubscribe();
    } catch (error) {
      console.error('Auth initialization error:', error);
      setLoading(false);
    }
  };

  initAuth();
}, []);