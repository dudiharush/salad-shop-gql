import * as React from "react";
import "./ingredients-picker.css";
import { Ingredient } from "../../../models/ingredient";
import { useContext } from "react";
import { OrderContext } from "../../../models/order-context";

interface IngredientsPickerProps {
  ingredient: Ingredient;
  isReadOnly?: boolean;
  onChange?: (value: string) => void;
}

export const IngredientsPicker = (props: IngredientsPickerProps) => {
  const { ingredient, isReadOnly } = props;
  const { name, price } = ingredient;
  const {
    state: { ingredientsOrder }
  } = useContext(OrderContext);

  const ingredientAmount = ingredientsOrder.get(name);

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    props.onChange && props.onChange(event.target.value);

  return (
    <div className="ingredients-picker">
      <div className="info">
        <span className="name-label">{name}</span>
        <span className="price-label">{`$${price}`}</span>
      </div>

      <input
        className="amount-picker"
        type="number"
        min={0}
        step={1}
        onChange={handleOnChange}
        disabled={isReadOnly}
        defaultValue={ingredientAmount && ingredientAmount.toString()}
      />
    </div>
  );
};
