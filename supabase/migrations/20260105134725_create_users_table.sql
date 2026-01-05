/*
  # Create users table for authentication and profiles

  1. New Tables
    - `users`
      - `id` (uuid, primary key, links to auth.users)
      - `email` (text, unique)
      - `display_name` (text)
      - `photo_url` (text)
      - `provider` (text - auth provider like 'google', 'github')
      - `downloads` (json array - track downloaded versions)
      - `favorite_versions` (json array)
      - `total_downloads` (integer)
      - `is_premium` (boolean)
      - `github_token` (text, for future GitHub integrations)
      - `created_at` (timestamp)
      - `last_login` (timestamp)
      - `updated_at` (timestamp)

  2. Security
    - Enable RLS on `users` table
    - Add policy for users to read their own profile
    - Add policy for users to update their own profile
    - Add policy for authenticated users to be created on signup
*/

CREATE TABLE IF NOT EXISTS users (
  id uuid PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  email text UNIQUE NOT NULL,
  display_name text DEFAULT '',
  photo_url text DEFAULT '',
  provider text DEFAULT '',
  downloads jsonb DEFAULT '[]'::jsonb,
  favorite_versions jsonb DEFAULT '[]'::jsonb,
  total_downloads integer DEFAULT 0,
  is_premium boolean DEFAULT false,
  github_token text DEFAULT NULL,
  created_at timestamptz DEFAULT now(),
  last_login timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE users ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can read own profile"
  ON users
  FOR SELECT
  TO authenticated
  USING (auth.uid() = id);

CREATE POLICY "Users can update own profile"
  ON users
  FOR UPDATE
  TO authenticated
  USING (auth.uid() = id)
  WITH CHECK (auth.uid() = id);

CREATE POLICY "Users can insert own profile"
  ON users
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = id);
