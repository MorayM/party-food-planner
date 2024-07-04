import supabase from 'services/supabase';

export const getFoods = () => supabase.from('foods').select();

export const updateFoodOrder = (data: FormData) => {
  data.forEach((value, id) => {
    // Add orders to the person
    // Update fulfilled count on food
  });
};
