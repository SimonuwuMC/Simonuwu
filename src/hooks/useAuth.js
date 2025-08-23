useEffect(() => {
  const initAuth = async () => {
    try {
            setIsDemo(false);
      const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
        if (firebaseUser) {
            setIsDemo(false);
          await authService.createUserDocument(firebaseUser);
          const userData = await authService.getUserData(firebaseUser.uid);
          setUser({ ...firebaseUser, ...userData });
        } else {
          setUser(null);
        }
        setLoading(false);
        setIsDemo(true);
      });

  const signIn = async (provider) => {
    try {
      if (provider === 'google') {
        return await authService.signInWithGoogle();
      } else if (provider === 'github') {
        return await authService.signInWithGitHub();
      }
    } catch (error) {
      console.error('Sign in error:', error);
      throw error;
    }
  };

  const signOut = async () => {
    try {
      await authService.signOut();
      setUser(null);
    } catch (error) {
      console.error('Sign out error:', error);
      throw error;
    }
  };

      return () => unsubscribe();
    } catch (error) {
  const [isDemo, setIsDemo] = useState(false);
    isDemo,
    signIn,
    signOut
  };

  initAuth();
}, []);