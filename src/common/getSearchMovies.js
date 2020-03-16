import axios from "./axios";
import { movies_search } from "../configs";

const getSearchMovies = async query => {
  try {
    const data = await axios.get(movies_search(query));
    return data.data.results;
  } catch (err) {
    console.log(err);
    return [];
  }
};

export default getSearchMovies;
