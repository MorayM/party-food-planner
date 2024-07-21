import { Tables } from 'types/supabase';

import { pluralize } from 'utils/index';
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
  function buildRequired() {
    if (food.fulfilled === food.required) return <span>All sorted!</span>;
    const remaining = food.required - food.fulfilled;
    if (!food.quantity_description) return remaining;
    return (
      <>
        {remaining} {pluralize(food.quantity_description, remaining)}
      </>
    );
  }
  return (
    <tr key={food.id}>
      <td>
        <h3>{food.name}</h3>
        {food.description && <span>{food.description}</span>}
      </td>
      <td className={styles.centered}>{buildRequired()}</td>
      <td className={styles.centered}>{buildActionCell()}</td>
    </tr>
  );
}

export default FoodRow;
