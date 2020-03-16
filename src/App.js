import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import { useHistory } from "react-router";

import Home from "./pages/HomePage";
import MoviePage from "./pages/MoviePage";

import Form from "./components/Form";
import Button from "./components/Button";
import Input from "./components/input";
import getTrendingMovies from "./common/getTrendingMovies";
import getSearchMovies from "./common/getSearchMovies";
import "./styles.css";

export default function App() {
  const history = useHistory();

  const [inputValue, setInputValue] = useState("");
  const changeInputValue = ({ target: { value } }) => {
    setInputValue(value);
  };

  const [movies, setMovies] = useState([{}]);
  useEffect(() => {
    getTrendingMovies().then(data => setMovies(data));
  }, []);

  const submitForm = ev => {
    ev.preventDefault();
    inputValue
      ? getSearchMovies(inputValue).then(data => setMovies(data))
      : getTrendingMovies().then(data => setMovies(data));
    history.push("/");
    setInputValue("");
  };

  return (
    <>
      <Form onSubmit={submitForm}>
        <Input
          onChange={changeInputValue}
          value={inputValue}
          name="inputSearch"
          placeholder="Movie name"
        />
        <Button value="search" />
      </Form>
      <Switch>
        <Route exact path="/">
          <Home {...{ movies }} />
        </Route>
        <Route path="/:id">
          <MoviePage {...{ movies }} />
        </Route>
      </Switch>
    </>
  );
}
