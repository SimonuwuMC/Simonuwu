import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

const supabase = createClient(supabaseUrl, supabaseAnonKey);

export async function getAllVersions() {
  try {
    const { data, error } = await supabase
      .from('modpack_versions')
      .select('*')
      .order('date_published', { ascending: false });

    if (error) {
      console.error('Error fetching versions:', error);
      return [];
    }

    return data || [];
  } catch (error) {
    console.error('Failed to fetch versions:', error);
    return [];
  }
}

export async function getVersionById(modrinthId) {
  try {
    const { data, error } = await supabase
      .from('modpack_versions')
      .select('*')
      .eq('modrinth_id', modrinthId)
      .maybeSingle();

    if (error) {
      console.error('Error fetching version:', error);
      return null;
    }

    return data;
  } catch (error) {
    console.error('Failed to fetch version:', error);
    return null;
  }
}

export async function getVersionsByGameVersion(gameVersion) {
  try {
    const { data, error } = await supabase
      .from('modpack_versions')
      .select('*')
      .contains('game_versions', [gameVersion])
      .order('date_published', { ascending: false });

    if (error) {
      console.error('Error fetching versions by game version:', error);
      return [];
    }

    return data || [];
  } catch (error) {
    console.error('Failed to fetch versions:', error);
    return [];
  }
}

export async function triggerSync() {
  try {
    const functionUrl = `${supabaseUrl}/functions/v1/sync-modrinth-versions`;

    const response = await fetch(functionUrl, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${supabaseAnonKey}`,
        'Content-Type': 'application/json',
      },
    });

    const result = await response.json();

    if (!response.ok) {
      console.error('Sync failed:', result);
      return null;
    }

    return result;
  } catch (error) {
    console.error('Failed to trigger sync:', error);
    return null;
  }
}
