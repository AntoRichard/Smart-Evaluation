import React from 'react';

const InputFeild = ({
  title,
  type,
  value,
  name,
  placeholder,
  onChangeHandler
}) => {
  return (
    <div>
      <label className="form-text">{title} :</label>
      <input
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChangeHandler}
        required
      />
    </div>
  );
};

export default InputFeild;
