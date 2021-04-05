import React, { useContext } from 'react'
import { GlobalContext } from "../context/GlobalState";
import Cards from '../components/Cards';

export default function MyPokemonList() {
  const { myPokemons, editMyPokemon } = useContext(GlobalContext);
  return (
    <>
    {myPokemons.length > 0 ? (
      <div className="cards-container">
        {myPokemons.map((pokemon) => (
          <Cards key={pokemon.id} pokemon={pokemon}/>
        ))}
      </div>
    ) : (
      <div className="cards-container">
        <div style={{color: "white"}}>You don't have Pokemons yet!</div>
      </div>
    )}
    </>
  )
}