import React from "react";

const FormRow = ({
  type,
  values,
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
