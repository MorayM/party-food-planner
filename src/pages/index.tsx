import FoodRow from 'components/FoodRow';
import { FormEvent, useEffect, useState } from 'react';
import { RowUpdate, getFoods, updateFoodOrder } from 'services/foods';
import { Tables } from 'types/supabase';

import styles from './index.module.scss';

function Index() {
  const [foods, setFoods] = useState<Tables<'foods'>[] | null>([]);
  const [lastUpdate, setLastUpdate] = useState<RowUpdate[] | null>(null);
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
      setLastUpdate(rows);
      setIsLoading(false);
    }
  }

  useEffect(() => {
    loadFoods();
  }, []);

  return (
    <div>
      <p>
        If you have any intolerances and can&apos;t bring anything on this list, please choose something else that
        you&apos;d like!
      </p>
      {lastUpdate && (
        <div>
          <p>Thank you so much for your help! You selected:</p>
          <ul>
            {lastUpdate.map((r) => (
              <li key={r.food.id}>
                {r.food.name} - {r.count}
              </li>
            ))}
          </ul>
        </div>
      )}
      <form onSubmit={handleSubmit}>
        <table>
          <thead>
            <tr>
              <th>What we need</th>
              <th>How many we need</th>
              <th>How many can you bring?</th>
            </tr>
          </thead>
          <tbody>{foods?.map((f) => <FoodRow key={f.id} food={f} />)}</tbody>
        </table>
        <div className={styles.save}>
          <button type="submit" disabled={isLoading}>
            Save
          </button>
        </div>
      </form>
    </div>
  );
}

export default Index;
