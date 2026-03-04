import React, { useContext } from "react";
import { MovieContext } from "../Context/MovieContext";
import { Link } from "react-router-dom";

function MovieList() {

  const { movieList } = useContext(MovieContext);

  const renderStars = (rating) => {
    return "★".repeat(rating) + "☆".repeat(5 - rating);
  };

  return (
    <div style={{textAlign:"center"}}>
      <h1>Movie List</h1>

      {movieList.map(movie => (
        <div key={movie.id} style={{display:"flex", justifyContent:"space-between", margin:"30px"}} className="list-group-item list-group-item-primary">
          <Link to={`/movie/${movie.id}`}>
            <h2 style={{color:"purple", textDecoration:"none"}}>{movie.title}</h2>
          </Link>
          <p style={{color:"gold", fontSize:"25px"}}>{renderStars(movie.rating)}</p>
        </div>
      ))}

      <Link to="/add-movie">
        <button className="btn btn-success">Add New Movie</button>
      </Link>
    </div>
  );
}

export default MovieList;