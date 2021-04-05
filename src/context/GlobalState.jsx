import React, { createContext, useReducer } from 'react';

import appReducer from './AppReducer';

const initialState = {
  myPokemons: []
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  function addMyPokemon(myPokemon) {
    dispatch({
      type: "ADD_MY_POKEMON",
      payload: myPokemon
    });
  }

  function editMyPokemon(myPokemon) {
    dispatch({
      type: "EDIT_MY_POKEMON",
      payload: myPokemon
    });
  }

  function removeMyPokemon(id) {
    dispatch({
      type: "REMOVE_MY_POKEMON",
      payload: id
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        myPokemons: state.myPokemons,
        addMyPokemon,
        editMyPokemon,
        removeMyPokemon
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};