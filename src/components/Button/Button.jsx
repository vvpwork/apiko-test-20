import React from "react";
import T from "prop-types";
import s from "./style.module.css";

const Button = ({ onClick = () => {}, value = "" }) => (
  <button className={s.container} onClick={onClick} type="submit">
    {value}
  </button>
);

Button.propTypes = {
  onClick: T.func,
  type: T.string,
  value: T.string
};

export default Button;
