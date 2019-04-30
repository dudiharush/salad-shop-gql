import * as React from "react";

export const OrderDetailsField = ({
  fieldName,
  data
}: {
  fieldName: string;
  data: string;
}) => {
  return (
    <div className="order-details-field">
      <span>{`${fieldName}:`}</span>
      <span>{`${data}`}</span>
    </div>
  );
};
