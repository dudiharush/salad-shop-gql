import * as React from "react";
import "./details-field.css";

export const DetailsField = ({
  fieldName,
  onChange,
  defaultValue,
  isValid = true
}: {
  fieldName: string;
  defaultValue: string;
  onChange: (value: string) => void;
  isValid?: boolean;
}) => {
  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    onChange && onChange(event.target.value);
  const fieldClassName =
    "order-details-field" + (!isValid ? " error-color" : "");
  return (
    <div className={fieldClassName}>
      <span className="field-name">{`${fieldName}:`}</span>
      <div>
        {
          <div className="error-message error-color">
            {!isValid ? "invalid value" : ""}
          </div>
        }
        <input
          type="text"
          onChange={handleOnChange}
          defaultValue={defaultValue}
        />
      </div>
    </div>
  );
};
