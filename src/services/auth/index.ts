import supabase from 'services/supabase';

export const signInWithPassword = (password: string) =>
  supabase.auth.signInWithPassword({
    email: import.meta.env.VITE_USER_EMAIL,
    password,
  });

export const signOut = () => supabase.auth.signOut();
