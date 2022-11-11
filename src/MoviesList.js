import React , { useState } from "react";
import MovieCard from "./MovieCard";
import "bootstrap/dist/css/bootstrap.min.css";
import Add from "./Add";
const MoviesList = ({ movies , addMovie}) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div /*className="flexing"*/>
      <button onClick={handleShow}>Add </button>
      <Add addMovie={addMovie} show={show} handleClose={handleClose}/>
      {movies.map((el) => (
        <MovieCard movie={el} />
      ))}
    </div>
  );
};

export default MoviesList;
