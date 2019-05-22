import React from "react";
import MovieList from "./MovieList";
import { getDirectorById } from "../data";
import styled from "styled-components";
import { Typography } from "@material-ui/core";

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
      <Typography variant="h6">{director.name}</Typography>
      <hr />
      <p>Movies by {director.name}:</p>
      <MovieList movies={director.movies} />
    </Root>
  );
};

export default Movie;
