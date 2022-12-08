import React from "react";

const FormRow = ({
  type,
  values,
  name,
  handleChange,
  labelText,
  placeholder,
  noLabel,
}) => {
  return (
    <div>
      <label className={noLabel ? "hidden" : "label block"}>
        {labelText || name}
      </label>
      <input
        type={type}
        value={values}
        name={name}
        onChange={handleChange}
        placeholder={placeholder}
        className="input"
      />
    </div>
  );
};

export default FormRow;
