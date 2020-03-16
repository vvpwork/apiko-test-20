import axios from "./axios";
import { movies_by_id } from "../configs";

const getMovieById = async id => {
  try {
    const data = await axios.get(movies_by_id(id));
    return data.data;
  } catch (err) {
    console.log(err);
    return [];
  }
};

export default getMovieById;
