import * as React from "react";
import { IStageEvents } from "../../models/types";

export const LandingPage = ({ goToNext }: IStageEvents) => {
  const orderSaladOnClick = () => goToNext && goToNext();

  return (
    <>
      <div className="page-header">{"Welcome"}</div>
      <div className="page-content">
        <div className="button" onClick={orderSaladOnClick}>
          {"Order Salad"}
        </div>
      </div>
    </>
  );
};
