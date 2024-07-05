import supabase from 'services/supabase';
import { Tables } from 'types/supabase';

export const getFoods = () => supabase.from('foods').select();

export type RowUpdate = {
  food: Tables<'foods'>;
  count: number;
};

export const updateFoodOrder = (rows: RowUpdate[]) =>
  Promise.all(
    rows.map(({ food, count }) =>
      supabase
        .from('foods')
        .update({ fulfilled: (food.fulfilled || 0) + count })
        .eq('id', food.id),
    ),
  );
