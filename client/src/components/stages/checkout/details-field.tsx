import * as React from "react";

export const DetailsField = ({
  fieldName,
  onChange,
  isValid = true
}: {
  fieldName: string;
  onChange: (value: string) => void;
  isValid?: boolean;
}) => {
  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    onChange && onChange(event.target.value);

  return (
    <div className="order-details-field">
      <span>{`${fieldName}:`}</span>
      <input type="text" onChange={handleOnChange} />
    </div>
  );
};
