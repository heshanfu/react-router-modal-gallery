import React from "react";
import MovieList from "./MovieList";
import { getDirectorById } from "../data";
import styled from "styled-components";

const Root = styled.div`
  padding: 12px;
`;

const Movie = ({
  match: {
    params: { id }
  }
}) => {
  const director = getDirectorById(id);

  return (
    <Root>
      <h4>{director.name}</h4>
      <hr />
      <p>Movies by {director.name}:</p>
      <MovieList movies={director.movies} />
    </Root>
  );
};

export default Movie;
