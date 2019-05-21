import React from "react";
import { ModalLink } from "../../../src";

const MovieList = ({ movies }) => {
  return (
    <ul>
      {movies.map(movie => (
        <li key={movie.id}>
          <ModalLink to={`/movies/${movie.id}`}>{movie.title}</ModalLink>
        </li>
      ))}
    </ul>
  );
};

export default MovieList;
