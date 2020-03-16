import React from "react";
import T from "prop-types";
import s from "./style.module.css";

const Input = ({ onChange = () => {}, value, name, placeholder }) => (
  <input
    className={s.container}
    onChange={onChange}
    name={name}
    value={value}
    type="text"
    placeholder={placeholder}
  />
);

Input.propTypes = {
  onChange: T.func.isRequired,
  value: T.string,
  name: T.string,
  placeholder: T.string
};

export default Input;
