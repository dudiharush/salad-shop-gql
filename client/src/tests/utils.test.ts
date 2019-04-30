import { assignmentPattern } from "@babel/types";
import { Ingredient } from "../models/ingredient";
import { getTotalPrice } from "../utils";

it("renders without crashing", () => {
  const ingredients: Ingredient[] = [
    { name: "cucumber", price: 0.5 },
    { name: "tomato", price: 0.6 },
    { name: "egg", price: 3 },
    { name: "tuna", price: 2 },
    { name: "potato", price: 1.2 },
    { name: "lettuce", price: 0.2 },
    { name: "corn", price: 2 },
    { name: "onion", price: 0.3 },
    { name: "mashroom", price: 2.5 },
    { name: "pasta", price: 4 },
    { name: "pickles", price: 3.3 }
  ];

  const ingredientsOrder = new Map<string, number>([
    ["cucumber", 1],
    ["tomato", 2],
    ["egg", 3]
  ]);
  const expectedTotal = 10.7;
  const actualTotal = getTotalPrice(ingredients, ingredientsOrder);
  expect(actualTotal).toEqual(expectedTotal);
});
