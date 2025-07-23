

export type MoviesDataTypesProps = {
  id:number
  title: string;
  genre: string;
  year: number;
  director: string;
  rating: number;
  duration: string;
};

export const MoviesData:MoviesDataTypesProps[] = [
  {
    id: 1,
    title: "Inception",
    genre: "Science Fiction",
    year: 2010,
    rating: 8.8,
    duration: "2h 28m",
    director: "Christopher Nolan",
  },
  {
    id: 2,
    title: "The Shawshank Redemption",
    genre: "Drama",
    year: 1994,
    rating: 9.3,
    duration: "2h 22m",
    director: "Frank Darabont",
  },
  {
    id: 3,
    title: "The Dark Knight",
    genre: "Action",
    year: 2008,
    rating: 9.0,
    duration: "2h 32m",
    director: "Christopher Nolan",
  },
  {
    id: 4,
    title: "Interstellar",
    genre: "Science Fiction",
    year: 2014,
    rating: 8.6,
    duration: "2h 49m",
    director: "Christopher Nolan",
  },
  {
    id: 5,
    title: "Forrest Gump",
    genre: "Drama",
    year: 1994,
    rating: 8.8,
    duration: "2h 22m",
    director: "Robert Zemeckis",
  },
  {
    id: 6,
    title: "Gladiator",
    genre: "Action",
    year: 2000,
    rating: 8.5,
    duration: "2h 35m",
    director: "Ridley Scott",
  },
  {
    id: 7,
    title: "The Matrix",
    genre: "Science Fiction",
    year: 1999,
    rating: 8.7,
    duration: "2h 16m",
    director: "Lana Wachowski, Lilly Wachowski",
  },
  {
    id: 8,
    title: "The Godfather",
    genre: "Crime",
    year: 1972,
    rating: 9.2,
    duration: "2h 55m",
    director: "Francis Ford Coppola",
  },
  {
    id: 9,
    title: "Pulp Fiction",
    genre: "Crime",
    year: 1994,
    rating: 8.9,
    duration: "2h 34m",
    director: "Quentin Tarantino",
  },
  {
    id: 10,
    title: "Avengers: Endgame",
    genre: "Action",
    year: 2019,
    rating: 8.4,
    duration: "3h 1m",
    director: "Anthony Russo, Joe Russo",
  }
];
