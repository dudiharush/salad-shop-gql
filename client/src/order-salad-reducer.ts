import { OrderActions } from "./action-creators";
import { Ingredient } from "./models/ingredient";

export function OrderSaladReducer(state: any, action: {type: OrderActions, payload?: any}): IOrderState {
    switch (action.type) {
      case OrderActions.SetIngredients:
        return {...state, ingredients: action.payload.ingredients};
      case OrderActions.AddIngrediantToOrder:
        const {itemName, amount} = action.payload;
        return {...state, ingredientsOrder: new Map(state.ingredientsOrder.set(itemName, amount))};
      case OrderActions.SetOrderInfo:
        return {...state, ...action.payload }
  
      default:
        throw new Error();
    }
  }
  
  export interface IOrderState {
      email: string;
      name: string;
      notes: string;
      ingredientsOrder: Map<string, number>;
      ingredients: Map<string, Ingredient>;
  }
  
  export const initialState: IOrderState = {
    email: '',
    name: '',
    notes: '',
    ingredientsOrder: new Map<string,number>(),
    ingredients: new Map<string,Ingredient>()
  }