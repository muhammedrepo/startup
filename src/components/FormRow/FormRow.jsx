import { toHaveFormValues } from "@testing-library/jest-dom/dist/matchers";
import React from "react";

const FormRow = ({
  type,
  value,
  name,
  handleChange,
  labelText,
  placeholder,
}) => {
  return (
    <div>
      <label className="label">{labelText || name}</label>
      <input
        type={type}
        value={value}
        name={name}
        onChange={handleChange}
        placeholder={placeholder}
        className="input"
      />
    </div>
  );
};

export default FormRow;
