import React, { useState, useContext } from "react";
import { MovieContext } from "../Context/MovieContext";
import  {useNavigate} from "react-router-dom"

function AddMovie() {

  const { addMovie } = useContext(MovieContext);
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [rating, setRating] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newMovie = {
      id: Date.now(),
      title,
      rating: Number(rating),
      description
    };

    addMovie(newMovie);
    navigate("/");
  };

  return (
    <div>
      <h2>Add New Movie</h2>
      <form onSubmit={handleSubmit}>
        <input placeholder="Title" onChange={(e) => setTitle(e.target.value)} required />
        <input type="number" min="1" max="5" placeholder="Rating"
          onChange={(e) => setRating(e.target.value)} required />
        <textarea placeholder="Description"
          onChange={(e) => setDescription(e.target.value)} required />
        <button type="submit">Add Movie</button>
      </form>
      <button onClick={() => navigate("/")}>Back</button>
    </div>
  );
}

export default AddMovie;