import supabase from 'services/supabase';
import { Database } from 'types/supabase';

export type Food = Database['public']['Tables']['foods']['Row'];

export const getFoods = () => supabase.from('foods').select();
