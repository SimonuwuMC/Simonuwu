import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

const supabase = createClient(supabaseUrl, supabaseAnonKey);

class AuthService {
  constructor() {
    this.currentUser = null;
  }

  async signInWithGoogle() {
    try {
      const { data, error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo: window.location.origin,
        },
      });

      if (error) throw error;
      return data;
    } catch (error) {
      console.error('Error signing in with Google:', error);
      throw error;
    }
  }

  async signInWithGitHub() {
    try {
      const { data, error } = await supabase.auth.signInWithOAuth({
        provider: 'github',
        options: {
          redirectTo: window.location.origin,
        },
      });

      if (error) throw error;
      return data;
    } catch (error) {
      console.error('Error signing in with GitHub:', error);
      throw error;
    }
  }

  async signOut() {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) throw error;
      this.currentUser = null;
    } catch (error) {
      console.error('Error signing out:', error);
      throw error;
    }
  }

  async getCurrentUser() {
    try {
      const { data: { user }, error } = await supabase.auth.getUser();
      if (error) throw error;
      this.currentUser = user;
      return user;
    } catch (error) {
      console.error('Error getting current user:', error);
      return null;
    }
  }

  async createUserDocument(user, provider = '') {
    try {
      const { data: existingUser, error: fetchError } = await supabase
        .from('users')
        .select('*')
        .eq('id', user.id)
        .maybeSingle();

      if (fetchError) throw fetchError;

      if (!existingUser) {
        const { error: insertError } = await supabase
          .from('users')
          .insert([{
            id: user.id,
            email: user.email,
            display_name: user.user_metadata?.name || user.email?.split('@')[0] || '',
            photo_url: user.user_metadata?.avatar_url || '',
            provider: provider,
            created_at: new Date(),
            last_login: new Date(),
          }]);

        if (insertError) throw insertError;
      } else {
        const { error: updateError } = await supabase
          .from('users')
          .update({ last_login: new Date() })
          .eq('id', user.id);

        if (updateError) throw updateError;
      }
    } catch (error) {
      console.error('Error creating user document:', error);
    }
  }

  async getUserData(userId) {
    try {
      const { data, error } = await supabase
        .from('users')
        .select('*')
        .eq('id', userId)
        .maybeSingle();

      if (error) throw error;
      return data;
    } catch (error) {
      console.error('Error getting user data:', error);
      return null;
    }
  }

  async trackDownload(userId, version) {
    try {
      const { data: userData, error: fetchError } = await supabase
        .from('users')
        .select('downloads')
        .eq('id', userId)
        .maybeSingle();

      if (fetchError) throw fetchError;

      const currentDownloads = userData?.downloads || [];
      const updatedDownloads = [...currentDownloads, version];

      const { error: updateError } = await supabase
        .from('users')
        .update({
          downloads: updatedDownloads,
          total_downloads: updatedDownloads.length,
        })
        .eq('id', userId);

      if (updateError) throw updateError;
    } catch (error) {
      console.error('Error tracking download:', error);
    }
  }

  async addFavoriteVersion(userId, version) {
    try {
      const { data: userData, error: fetchError } = await supabase
        .from('users')
        .select('favorite_versions')
        .eq('id', userId)
        .maybeSingle();

      if (fetchError) throw fetchError;

      const currentFavorites = userData?.favorite_versions || [];
      if (!currentFavorites.includes(version)) {
        const updatedFavorites = [...currentFavorites, version];

        const { error: updateError } = await supabase
          .from('users')
          .update({ favorite_versions: updatedFavorites })
          .eq('id', userId);

        if (updateError) throw updateError;
      }
    } catch (error) {
      console.error('Error adding favorite version:', error);
    }
  }
}

export default new AuthService();