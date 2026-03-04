import React, { useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { MovieContext } from "../Context/MovieContext";
import { CiStar } from "react-icons/ci";
import { FaStar } from "react-icons/fa";

function MovieDetails() {

  const { id } = useParams();
  const navigate = useNavigate();
  const { movieList, deleteMovie } = useContext(MovieContext);

  const movie = movieList.find(m => m.id === Number(id));

  if (!movie) return <h2>Movie not found</h2>;

  const renderStars = (rating) => {
    return "<FaStar />".repeat(rating) + "<CiStar />".repeat(5 - rating);
  };

  return (
    <div>
      <h2>{movie.title}</h2>
      <p>{movie.description}</p>
      <p>{renderStars(movie.rating)}</p>

      <button onClick={() => navigate("/")}>Back</button>
      <button onClick={() => {
        deleteMovie(movie.id);
        navigate("/");
      }}>Delete</button>
    </div>
  );
}

export default MovieDetails;