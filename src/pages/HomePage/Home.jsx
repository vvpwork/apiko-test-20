import React from "react";
import T from "prop-types";
import MoviesList from "../../components/MoviesList";

import s from "./style.module.css";
const HomePage = ({ movies = [{}] }) => {
  return (
    <div className={s.container}>
      <MoviesList {...{ movies }} />;
    </div>
  );
};

HomePage.propTypes = {
  movies: T.arrayOf(T.object)
};
export default HomePage;
