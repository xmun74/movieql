// let movies = [
//   {
//     id: 0,
//     name: "Star Wars - The new one",
//     score: 6,
//   },
//   {
//     id: 1,
//     name: "Avengers - The new one",
//     score: 5,
//   },
//   {
//     id: 2,
//     name: "Up!",
//     score: 9,
//   },
//   {
//     id: 3,
//     name: "Insideout",
//     score: 7,
//   },
// ];

// export const getMovies = () => movies;

// export const getById = (id) => {
//   const filteredMovies = movies.filter((movie) => movie.id === id);
//   return filteredMovies[0];
// };

// export const deleteMovie = (id) => {
//   const cleanedMovies = movies.filter((movie) => movie.id !== id);
//   if (movies.length > cleanedMovies.length) {
//     movies = cleanedMovies;
//     return true;
//   } else {
//     return false;
//   }
// };

// export const addMovie = (name, score) => {
//   const newMovie = {
//     id: `${movies.length + 1}`,
//     name,
//     score,
//   };
//   movies.push(newMovie);
//   return newMovie;
// };

// export const getById = (id) => {
//   const filteredPeople = people.filter((person) => person.id === String(id));
//   return filteredPeople[0];
// };
