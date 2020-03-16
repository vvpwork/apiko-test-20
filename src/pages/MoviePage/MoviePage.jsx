import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import T from "prop-types";

import { IMAGE_BASE_URL } from "../../configs";
import getMovieRecommendations from "../../common/getMovieRecommendations";
import getMovieById from "../../common/getMovieById";
import MoviesList from "../../components/MoviesList";

import s from "./style.module.css";

const MoviePage = ({ movies }) => {
  let { id } = useParams();
  const init = {
    title: "",
    overview: "",
    poster_path: ""
  };
  const [movie, setMovie] = useState(
    movies.find(data => data.id === Number(id)) || init
  );

  const [recommendation, setRecommendation] = useState([{}]);
  useEffect(() => {
    getMovieById(id).then(data => {
      setMovie(data);
    });
    getMovieRecommendations(id).then(data => {
      setRecommendation(data);
    });
  }, [id]);

  const img_url = IMAGE_BASE_URL + movie.poster_path;

  return (
    <div className={s.container}>
      <img src={img_url} alt="post_path" />
      <div className={s.wrapper}>
        <h2 className={s.title}>{movie.title}"</h2>
        <p className={s.description}>"{movie.overview}"</p>
        <h4 className={s.subtitle}>Recommendation</h4>
        <MoviesList movies={recommendation} path={"recommendation/"} />
      </div>
    </div>
  );
};

MoviePage.propTYpes = {
  movies: T.arrayOf(T.object)
};

export default MoviePage;
