import React, { useContext, useEffect, useState } from 'react'
import { useQuery } from '@apollo/client'
import { GET_POKEMONS } from '../graphql/'
import Cards from '../components/Cards';
import { GlobalContext } from '../context/GlobalState';
import Loading from '../components/Loading';
export default function Home() {

  const [limit, setLimit] = useState(20);

	const { loading, error, data } = useQuery(GET_POKEMONS, {
    variables: { limit: limit, offset: 0 }
  })
  const { myPokemons} = useContext(GlobalContext)
  const [pokemonsData, setPokemonsData] = useState(data?.pokemons?.results)
  useEffect(() => {
    if (!loading) {
      setPokemonsData(data?.pokemons?.results)
    }
  }, [loading, myPokemons, pokemonsData, data])


  let newPokemon = []

  if (pokemonsData) {
    pokemonsData.forEach((pokemon) => {
      let count = 0;
      let temp = JSON.parse(JSON.stringify(pokemon)) // for handle object is not extensible
      myPokemons.forEach((myPokemon) => {
        if (pokemon.id === myPokemon.id) {
          count++;
        }
      })
      newPokemon.push({...temp, count: count})
    });
  }

  const handleClick = () => {
    setLimit(limit + 20);
  }
  
  // if (loading) return 'Loading...';
  if (loading) return <Loading text=""/>

  if (error) return `Error! ${error.message}`;

  return (
    <>
      <div className="cards-container">
        {newPokemon.map((pokemon) => (
          <Cards key={pokemon.id} pokemon={pokemon}/>
        ))}
      </div>
        <div className="button-container">
          {!loading ? (
            <div className="button" onClick={handleClick}>
              Load more
            </div>
          ) : (
            <Loading text=""/>
          )}
        </div>
    </>
  )
}