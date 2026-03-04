import react, { createContext, useState, useEffect } from "react";
import moviesData from '../Data/Data';

export const MovieContext = createContext();

export const MovieProvider = ({ children }) => {

  const [movieList, setMovieList] = useState(() => {
    const saved = localStorage.getItem("movies");
    return saved ? JSON.parse(saved) : moviesData;
  });

  useEffect(() => {
    localStorage.setItem("movies", JSON.stringify(movieList));
  }, [movieList]);

  const addMovie = (movie) => {
    setMovieList([...movieList, movie]);
  };

  const deleteMovie = (id) => {
    setMovieList(movieList.filter(movie => movie.id !== id));
  };

  return (
    <MovieContext.Provider value={{ movieList, addMovie, deleteMovie }}>
      {children}
    </MovieContext.Provider>
  );
};