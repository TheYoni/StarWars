import React, { useState, useEffect, useContext } from "react";
import StoreContext from "../store/store";
import useFetch from "./../hooks/useFetch";
import "./table.module.css";
import { StoreTypes } from "../store/store";

const Starships = (props) => {
  const ctx = useContext(StoreContext);
  const { isLoading, error, sendRequest: getStarships } = useFetch();

  useEffect(() => {
    if (ctx.starships.length === 0) {
      const handleStarshipsResponse = (data) => {
        ctx.saveToStore(StoreTypes.Starships, data.results);
      };
      getStarships(
        {
          url: "https://swapi.dev/api/starships",
        },
        handleStarshipsResponse
      );
    }
  }, [getStarships]);

  const generateStarships = () => {
    return ctx.starships.map((starship) => (
      <tr key={starship.name}>
        <td>{starship.name}</td>
        <td>{starship.model}</td>
        <td>{starship.cargo_capacity}</td>
        <td>{starship.cost_in_credits}</td>
      </tr>
    ));
  };

  return isLoading ? (
    <p>Loading...</p>
  ) : (
    !error && (
      <table>
        <tbody>
          <tr>
            <th>name</th>
            <th>model</th>
            <th>cargo capacity</th>
            <th>cost</th>
          </tr>
          {generateStarships()}
        </tbody>
      </table>
    )
  );
};
export default Starships;
