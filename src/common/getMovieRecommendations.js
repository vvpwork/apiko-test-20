import axios from "./axios";
import { recommendations } from "../configs";

const getMovieFromId = async id => {
  const url = recommendations(id);
  try {
    const data = await axios.get(url);
    return data.data.results;
  } catch (err) {
    console.log(err);
    return [];
  }
};

export default getMovieFromId;
