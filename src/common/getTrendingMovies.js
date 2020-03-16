import axios from "./axios";
import { API_KEY, TRENDING } from "../configs";

const url = `${TRENDING}api_key=${API_KEY}`;

const getTrendingMovies = async () => {
  try {
    const data = await axios.get(url);
    return data.data.results;
  } catch (err) {
    console.log(err);
    return [];
  }
};

export default getTrendingMovies;
