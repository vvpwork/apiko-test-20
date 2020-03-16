import React from "react";
import { Link } from "react-router-dom";
import T from "prop-types";
import s from "./style.module.css";

const Item = ({ title, id, path = "" }) => (
  <li className={s.container}>
    <Link to={`/${path}${id}`}>{title}</Link>
  </li>
);

Item.propTypes = {
  title: T.string,
  id: T.number,
  path: T.string
};

export default Item;
