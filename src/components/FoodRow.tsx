import { Tables } from 'types/supabase';

import styles from './FoodRow.module.scss';

interface FoodRowProps {
  food: Tables<'foods'>;
}

function FoodRow({ food }: FoodRowProps) {
  function buildActionCell() {
    if (food.fulfilled === food.required) return <span>All sorted!</span>;
    return (
      <select name={food.id.toFixed(0)}>
        {[...Array(food.required - food.fulfilled + 1).keys()].map((n) => (
          <option key={n} value={n}>
            {n}
          </option>
        ))}
      </select>
    );
  }
  return (
    <tr key={food.id}>
      <td>
        <h3>{food.name}</h3>
        {food.description && <span>{food.description}</span>}
      </td>
      <td className={styles.centered}>{food.required}</td>
      <td className={styles.centered}>{buildActionCell()}</td>
    </tr>
  );
}

export default FoodRow;
