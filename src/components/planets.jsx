import React, { useState, useEffect, useContext } from "react";
import StoreContext from "../store/store";
import useFetch from "./../hooks/useFetch";
import "./table.module.css";
import { StoreTypes } from "../store/store";

const Planets = (props) => {
  const ctx = useContext(StoreContext);
  const { isLoading, error, sendRequest: getPlanets } = useFetch();

  useEffect(() => {
    if (ctx.planets.length === 0) {
      const handlePlanetsResponse = (data) => {
        ctx.saveToStore(StoreTypes.Planets, data.results);
      };
      getPlanets(
        {
          url: "https://swapi.dev/api/planets",
        },
        handlePlanetsResponse
      );
    }
  }, [getPlanets]);

  const generatePlanets = () => {
    return ctx.planets.map((planets) => (
      <tr key={planets.name}>
        <td>{planets.name}</td>
        <td>{planets.diameter}</td>
        <td>{planets.gravity}</td>
        <td>{planets.terrain}</td>
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
            <th>diameter</th>
            <th>gravity</th>
            <th>terrain</th>
          </tr>
          {generatePlanets()}
        </tbody>
      </table>
    )
  );
};
export default Planets;
