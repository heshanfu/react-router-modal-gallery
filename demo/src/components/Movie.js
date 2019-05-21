import React from "react";
import MovieList from "./MovieList";
import { getDirectorByMovieId, getMovieById } from "../data";
import { ModalLink } from "../../../src";
import styled from "styled-components";

const Root = styled.div`
  padding: 12px;
`;

const Movie = ({
  match: {
    params: { id }
  }
}) => {
  const movie = getMovieById(id);

  const director = getDirectorByMovieId(id);

  const otherMovies = director.movies.filter(movie => movie.id !== id);

  return (
    <Root>
      <h4>{movie.title}</h4>
      <ModalLink to={`/directors/${director.id}`} style={{ fontSize: 14 }}>
        {director.name}
      </ModalLink>
      <hr />
      <p>Other movies by {director.name}:</p>
      <MovieList movies={otherMovies} />
    </Root>
  );
};

export default Movie;
