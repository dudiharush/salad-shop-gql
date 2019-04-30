import { Ingredient } from "./models/ingredient";

  export const loadIngredients = (): Promise<Ingredient[]> => {
      return fetch("http://localhost:3000/salad.json")
        .then(res => {
          return res.json();
        })
        .then(data => {
              return data.items;
        });
  }



