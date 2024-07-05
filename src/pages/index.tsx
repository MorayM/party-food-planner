import FoodRow from 'components/FoodRow';
import { FormEvent, useEffect, useState } from 'react';
import { RowUpdate, getFoods, updateFoodOrder } from 'services/foods';
import { Tables } from 'types/supabase';

function Index() {
  const [foods, setFoods] = useState<Tables<'foods'>[] | null>([]);
  const [isLoading, setIsLoading] = useState(false);

  async function loadFoods() {
    const { data } = await getFoods();
    setFoods(data);
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (e.target && !!foods) {
      const fd = new FormData(e.target as HTMLFormElement);
      const rows = [...fd.entries()].reduce<RowUpdate[]>((arr, row) => {
        const food = foods.find((f) => f.id === +row[0]);
        if (food) arr.push({ count: +row[1], food });
        return arr;
      }, []);
      setIsLoading(true);
      await updateFoodOrder(rows);
      await loadFoods();
      setIsLoading(false);
    }
  }

  useEffect(() => {
    loadFoods();
  }, []);

  return (
    <form onSubmit={handleSubmit}>
      <table>
        <thead>
          <tr>
            <th>What</th>
            <th>How many we need</th>
            <th>How many can you bring?</th>
          </tr>
        </thead>
        <tbody>{foods?.map((f) => <FoodRow key={f.id} food={f} />)}</tbody>
      </table>
      <button type="submit" disabled={isLoading}>
        Save
      </button>
    </form>
  );
}

export default Index;
