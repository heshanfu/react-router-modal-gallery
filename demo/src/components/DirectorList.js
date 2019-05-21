import React from "react";
import { ModalLink } from "../../../src";

const DirectorList = ({ directors }) => {
  return (
    <ul>
      {directors.map(director => (
        <li key={director.id}>
          <ModalLink to={`/directors/${director.id}`}>{director.name}</ModalLink>
        </li>
      ))}
    </ul>
  );
};

export default DirectorList;
