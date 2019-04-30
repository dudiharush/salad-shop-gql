import * as React from "react";
import { useContext } from "react";
import { OrderContext } from "../../../models/order-context";
import { getTotalPrice } from "../../../utils";
import { OrderDetailsField } from "./order-details-field";
import { Query } from "react-apollo";
import { GET_INGREDIENTS } from "../../queries";
import { Ingredient } from "../../../models/ingredient";

export const OrderSummary = () => {
  const { state } = useContext(OrderContext);
  return (
    <Query query={GET_INGREDIENTS}>
      {({ loading, error, data }: any) => {
        if (loading) return <div>Loading...</div>;
        if (error) return <div>Error :(</div>;
        const ingredientsArr: Ingredient[] = data.items;
        return (
          <div>
            Thank You Very Much For Ordering From Salad Shop. Food Is On its
            Way...
            <OrderDetailsField
              fieldName="Total Price"
              data={getTotalPrice(
                ingredientsArr,
                state.ingredientsOrder
              ).toString()}
            />
            <OrderDetailsField fieldName="Name" data={state.name} />
            <OrderDetailsField fieldName="Email" data={state.email} />
            <OrderDetailsField
              fieldName="Additional Notes"
              data={state.notes}
            />
          </div>
        );
      }}
    </Query>
  );
};
