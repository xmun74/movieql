// 내 서버와 다른 URL을 통합하고 싶을 때 예시
// REST API를 GraphQL API로 감쌌다.   
import fetch from "node-fetch"; //node-fetch:  node.js에서 fetch할때 필요함

const API_URL = "https://yts.mx/api/v2/list_movies.json?";

export const getMovies = (limit, rating) => {
  let REQUEST_URL = API_URL;
  if(limit > 0) {
    REQUEST_URL += `limit=${limit}`;
  }
  if(rating > 0) {
    REQUEST_URL += `&minimum_rating=${rating}`;
  }
  return fetch(REQUEST_URL)
    .then(res => res.json())
    .then(json => json.data.movies);
};
