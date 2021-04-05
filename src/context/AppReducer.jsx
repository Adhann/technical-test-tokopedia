export default function AppReducer(state, action) {
  switch (action.type) {
    case "ADD_MY_POKEMON":
      return {
        ...state,
        myPokemons: [...state.myPokemons, action.payload],
      };

    case "EDIT_MY_POKEMON":
      const updatedMyPokemon = action.payload;
      const updatedMyPokemons = state.myPokemons.map((myPokemon) => {
        if (myPokemon.id === updatedMyPokemon.id) {
          return updatedMyPokemon;
        }
        return myPokemon;
      });

      return {
        ...state,
        myPokemons: updatedMyPokemons,
      };

    case "REMOVE_MY_POKEMON":
      return {
        ...state,
        myPokemons: state.myPokemons.filter(
          (myPokemon) => myPokemon.id !== action.payload
        ),
      };

    default:
      return state;
  }
};