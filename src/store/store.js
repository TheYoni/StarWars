import React from "react";
import { useState } from "react";

const StoreContext = React.createContext({
  saveToStore: (storeType, dataToStore) => {},
  charecters: [],
  planets: [],
  starships: [],
});

export const StoreTypes = {
  Charecters: 0,
  Planets: 1,
  Starships: 2,
};

export const StoreContextProvider = (props) => {
  const [charecters, setCharecters] = useState([]);
  const [planets, setPlanets] = useState([]);
  const [starships, setStarships] = useState([]);

  const saveToStore = (storeType, dataToStore) => {
    switch (storeType) {
      case StoreTypes.Charecters:
        setCharecters(dataToStore);
        break;
      case StoreTypes.Planets:
        setPlanets(dataToStore);
        break;
      case StoreTypes.Starships:
        setStarships(dataToStore);
        break;
      default:
        break;
    }
  };

  return (
    <StoreContext.Provider
      value={{
        charecters,
        planets,
        starships,
        saveToStore,
      }}
    >
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContext;
