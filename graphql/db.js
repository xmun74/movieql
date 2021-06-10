// 내 서버와 다른 URL을 통합하고 싶을 때 예시 / REST API를 GrapyQL서버 통해서 이용하기
// REST API를 GraphQL API로 감쌌다.
import axios from "axios";
const BASE_URL = "https://yts.mx/api/v2/";
const LIST_MOVIES_URL = `${BASE_URL}list_movies.json?`;
const MOVIE_DETAILS_URL = `${BASE_URL}movie_details.json?`;
const MOVIE_SUGGESTIONS_URL = `${BASE_URL}movie_suggestions.json?`;

export const getMovies = async (limit, rating) => {
  const {
    data: {
      data: { movies },
    },
  } = await axios(LIST_MOVIES_URL, {
    params: {
      limit,
      minimun_rating: rating,
    },
  });
  return movies;
};

export const getMovie = async (id) => {
  const {
    data: {
      data: { movie },
    },
  } = await axios(MOVIE_DETAILS_URL, {
    params: {
      movie_id: id,
    },
  });
  return movie;
};

export const getSuggestions = async (id) => {
  const {
    data: {
      data: { movies },
    },
  } = await axios(MOVIE_SUGGESTIONS_URL, {
    params: {
      movie_id: id,
    },
  });
  return movies;
};
