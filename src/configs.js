export const API_KEY = "7fddfc54b26db2c908fa2ef05d6f0a87";
export const BASE_URL = "https://api.themoviedb.org/3/";
export const TRENDING = "trending/movie/day?";
export const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";
export const movies_by_id = id =>
  `movie/${id}?api_key=${API_KEY}&language=en-US`;
export const movies_search = query =>
  "/search/movie" +
  "?api_key=" +
  API_KEY +
  "&language=en-US&" +
  `query=${query}` +
  "&page=1";
export const recommendations = id =>
  "movie/" +
  id +
  "/" +
  "recommendations?api_key=" +
  API_KEY +
  "&language=en-US&page=1";
//
