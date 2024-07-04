import { SupabaseClientOptions, createClient } from '@supabase/supabase-js';
import { Database } from 'types/supabase';

const options: SupabaseClientOptions<'public'> = {
  db: {
    schema: 'public',
  },
  auth: {
    autoRefreshToken: true,
    persistSession: true,
  },
};

// Create a single supabase client for interacting with your database
const supabase = createClient<Database>(
  import.meta.env.VITE_SUPABASE_ENDPOINT,
  import.meta.env.VITE_SUPABASE_KEY,
  options,
);

export default supabase;
