import { Tables } from 'types/supabase';

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
        <h4>{food.name}</h4>
        {food.description && <span>{food.description}</span>}
      </td>
      <td>{food.required}</td>
      <td>{buildActionCell()}</td>
    </tr>
  );
}

export default FoodRow;
