import FoodRow from 'components/FoodRow';
import { FormEvent, useEffect, useState } from 'react';
import { getFoods } from 'services/foods';
import { Tables } from 'types/supabase';

function Index() {
  const [foods, setFoods] = useState<Tables<'foods'>[] | null>([]);

  async function loadFoods() {
    const { data } = await getFoods();
    setFoods(data);
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (e.target) {
      const fd = new FormData(e.target as HTMLFormElement);
      console.log(Object.fromEntries(fd));
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
      <button type="submit">Save</button>
    </form>
  );
}

export default Index;
