import { Ingredient } from "./models/ingredient";

export const getTotalPrice = (
  ingredients: Ingredient[],
  ingredientsOrder: Map<string, number>
): number => {
  const totalPrice = Array.from(ingredientsOrder).reduce(
    (accPrice, [ingredientName, ingredientAmount]) => {
      const ingredient = ingredients.filter(
        ing => ing.name === ingredientName
      )[0];
      accPrice += ingredient.price * ingredientAmount;
      return accPrice;
    },
    0
  );

  return totalPrice;
};
