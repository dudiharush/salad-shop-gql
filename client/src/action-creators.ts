import { Ingredient } from "./models/ingredient";

export enum OrderActions {
  SetIngredients,
  AddIngrediantToOrder,
  SetOrderInfo
}

export const setEmail = (email: string) => {
  return { type: OrderActions.SetOrderInfo, payload: { email } };
};

export const setName = (name: string) => {
  return { type: OrderActions.SetOrderInfo, payload: { name } };
};

export const setAdditionalNotes = (notes: string) => {
  return { type: OrderActions.SetOrderInfo, payload: { notes } };
};

export const setIngredietns = (ingredients: Array<Ingredient>) => {
  const ingredientMap = new Map<string, Ingredient>();
  ingredients.forEach((ingretient: Ingredient) =>
    ingredientMap.set(ingretient.name, ingretient)
  );
  return {
    type: OrderActions.SetIngredients,
    payload: { ingredients: ingredientMap }
  };
};

export const orderItem = (itemName: string, amount: number) => {
  return {
    type: OrderActions.AddIngrediantToOrder,
    payload: { itemName, amount }
  };
};
