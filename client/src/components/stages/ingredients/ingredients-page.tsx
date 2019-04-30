import * as React from "react";
import { IngredientsPicker } from "./ingredient-picker";
import { OrderContext } from "../../../models/order-context";
import { useContext } from "react";
import { IStageEvents } from "../../../models/types";
import { Query } from "react-apollo";
import { orderItem } from "../../../action-creators";
import { GET_INGREDIENTS } from "../../queries";

export const IngredientsPage = (props: IStageEvents) => {
  const { dispatch } = useContext(OrderContext);
  const addItem = (ingredientName: string) => (amount: string) =>
    dispatch(orderItem(ingredientName, +amount));

  const proceedToCheckoutClick = () => props.goToNext && props.goToNext();

  return (
    <Query query={GET_INGREDIENTS}>
      {({ loading, error, data }: any) => {
        if (loading) return <div>Loading...</div>;
        if (error) return <div>Error :(</div>;
        const ingredientsArr = data.items;
        return (
          <>
            <div className="page-header">{"Select Ingredients"}</div>
            <div className="page-content">
              {ingredientsArr &&
                ingredientsArr.map((ingredient: any) => (
                  <IngredientsPicker
                    key={ingredient.name}
                    ingredient={ingredient}
                    onChange={addItem(ingredient.name)}
                  />
                ))}
              <div className="button" onClick={proceedToCheckoutClick}>
                {"Proceed To Checkout"}
              </div>
            </div>
          </>
        );
      }}
    </Query>
  );
};
