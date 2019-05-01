import * as React from "react";
import { IngredientsPicker } from "../ingredients/ingredient-picker";
import "./checkout-page.css";
import { useEffect, useContext } from "react";
import { DetailsField } from "./details-field";
import { getTotalPrice } from "../../../utils";
import { OrderContext } from "../../../models/order-context";
import {
  setName,
  setEmail,
  setAdditionalNotes
} from "../../../action-creators";
import { IStageEvents } from "../../../models/types";
import { Query } from "react-apollo";
import { GET_INGREDIENTS } from "../../queries";
import { Ingredient } from "../../../models/ingredient";
import * as validator from "validator";

export const CheckoutPage = ({
  setShowModal,
  goToPrev
}: IStageEvents & {
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const { dispatch, state } = useContext(OrderContext);

  const [validations, setValidations] = React.useState({
    isEmailValid: true,
    isFormValidated: false
  });

  useEffect(() => {
    if (Object.values(validations).every(isValid => isValid)) {
      setShowModal(true);
    }
    return () => {
      setShowModal(false);
    };
  }, [setShowModal, ...Object.values(validations)]);

  const orderButtonClick = () => {
    setValidations({
      isEmailValid: validator.isEmail(state.email),
      isFormValidated: true
    });
  };
  const goBackButtonClick = () => goToPrev && goToPrev();

  return (
    <Query query={GET_INGREDIENTS}>
      {({ loading, error, data }: any) => {
        if (loading) return <div>Loading...</div>;
        if (error) return <div>Error :(</div>;
        const ingredientsArr: Ingredient[] = data.items;
        const totalPrice = getTotalPrice(
          ingredientsArr,
          state.ingredientsOrder
        );

        return (
          <>
            <div className="page-header">{"Your Salad:"}</div>
            <div className="checkout-wrapper">
              <div>
                {Array.from(state.ingredientsOrder.keys()).map(
                  ingredientName => (
                    <IngredientsPicker
                      key={ingredientName}
                      ingredient={
                        ingredientsArr.filter(
                          ing => ing.name === ingredientName
                        )[0]
                      }
                      isReadOnly
                    />
                  )
                )}

                <div className="total-price">{`Total Price is: $${totalPrice}`}</div>
              </div>
              <div className="order-details-wrapper">
                <DetailsField
                  defaultValue={state.name}
                  fieldName="Name"
                  onChange={name => dispatch(setName(name))}
                />
                <DetailsField
                  fieldName="Email"
                  defaultValue={state.email}
                  onChange={email => dispatch(setEmail(email))}
                  isValid={validations.isEmailValid}
                />
                <DetailsField
                  defaultValue={state.notes}
                  fieldName="Additional Notes"
                  onChange={notes => dispatch(setAdditionalNotes(notes))}
                />
                <div className="buttons-wrapper">
                  <span className="button" onClick={goBackButtonClick}>
                    {"Go Back"}
                  </span>
                  <span className={"button"} onClick={orderButtonClick}>
                    {"Order"}
                  </span>
                </div>
              </div>
            </div>
          </>
        );
      }}
    </Query>
  );
};
