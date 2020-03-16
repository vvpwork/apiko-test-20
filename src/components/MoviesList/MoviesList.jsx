import React from "react";
import T from "prop-types";
import Item from "../Item";

import s from "./styles.module.css";

const MoviesList = ({ movies = [{}] }) => {
  return (
    <ul className={s.list}>
      {movies.map(({ title, id }) => (
        <Item key={id + title} {...{ title, id }} />
      ))}
    </ul>
  );
};

MoviesList.propTYpes = {
  movies: T.arrayOf(T.object)
};

export default MoviesList;
