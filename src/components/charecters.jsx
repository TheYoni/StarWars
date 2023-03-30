import React, { useState, useEffect, useContext } from "react";
import StoreContext from "../store/store";
import useFetch from "./../hooks/useFetch";
import "./table.module.css";
import { StoreTypes } from "../store/store";

const Charecters = (props) => {
  const ctx = useContext(StoreContext);
  const { isLoading, error, sendRequest: getCharecters } = useFetch();

  useEffect(() => {
    if (ctx.charecters.length === 0) {
      const handleCharectersResponse = (data) => {
        ctx.saveToStore(StoreTypes.Charecters, data.results);
      };
      getCharecters(
        {
          url: "https://swapi.dev/api/people",
        },
        handleCharectersResponse
      );
    }
  }, [getCharecters]);

  const generateCharecters = () => {
    return ctx.charecters.map((charecter) => (
      <tr key={charecter.name}>
        <td>{charecter.name}</td>
        <td>{charecter.height}</td>
        <td>{charecter.gender}</td>
        <td>{charecter.mass}</td>
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
            <th>height</th>
            <th>gender</th>
            <th>mass</th>
          </tr>
          {generateCharecters()}
        </tbody>
      </table>
    )
  );
};
export default Charecters;
