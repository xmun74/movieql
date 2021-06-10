import { getMovies, getMovie, getSuggestions } from "./db";

const resolvers = {
  Query: {
    movies: (_, { rating, limit }) => getMovies(limit, rating), //_ 이건 걍 변수명임 root,parent될수있음 안쓰니깐 _함
    movie: (_, { id }) => getMovie(id),
    suggestions: (_, { id }) => getSuggestions(id),
  },
};

export default resolvers;

// const resolvers = {
//   Query: {
//     movies: () => getMovies(),
//     movie: (_, { id }) => getById(id),
//     //resolver: (root, args, context, info)    // { id } 는 args.id랑 똑같은 것
//   },
//   Mutation: {
//     addMovie: (_, { name, score }) => addMovie(name, score),
//     deleteMovie: (_, { id }) => deleteMovie(id),
//   },
// };
