import React from "react";
import T from "prop-types";
import s from "./style.module.css";

const Form = ({ onSubmit = () => {}, children }) => (
  <form className={s.container} onSubmit={onSubmit}>
    {children}
  </form>
);

Form.propTypes = {
  onSubmit: T.func.isRequired,
  children: T.node
};

export default Form;
