import { useQuery } from '@apollo/client';
import { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import '../components/Details.css'
import { GET_POKEMON } from '../graphql';
import { GlobalContext } from "../context/GlobalState";
import Swal from 'sweetalert2'
import pokeball from "../images/pokeball.png";
import Loading from './Loading';

export default function Details({pokemon}) {

  const history = useHistory()
  const isFromMyPokemonList = window.location.pathname ? window.location.pathname === "/my-pokemon-list" : false;
  const { addMyPokemon, editMyPokemon} = useContext(GlobalContext);
  const [pokemonData, setPokemonData] = useState(pokemon ? pokemon : null);
  const [pokemonName, setPokemonName] = useState(
    {
      pokemonName : pokemon?.name
    }
  )

  const { loading, error, data } = useQuery(GET_POKEMON, {
    variables: { name: pokemon?.name }
  })
  
  useEffect(() => {
    setPokemonName({
      pokemonName: pokemon?.name
    })
  }, [pokemon])

  const isSuccessful = Math.random() < 0.9 ? true : false;

  // function handleChange(e) {
  //   let { name, value } = e.target
  //   console.log(value, '<<<<< VALUE');
  //   // setPokemonName((prev) => ({ ...prev, [name]: value }))
  // }

  console.log();

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   // console.log(pokemonData, '<<<< POKEMON DATA');
  //   // addMyPokemon(data)
  //   // setPokemonData({ ...pokemonData, name: pokemonData.name });
  // }

  const Toast = Swal.mixin({
    toast: true,
    position: 'top',
    showConfirmButton: false,
    timer: 1500,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  })

  const handleCatch = (e) => {
    e.preventDefault();
    if(isSuccessful) {
      Toast.fire({
        icon: 'success',
        title: 'Gotcha !!'
      })
      addMyPokemon(pokemon)
      history.push('/')
    } else {
      Toast.fire({
        icon: 'error',
        title: 'Oh no!! it ran away'
      })
      history.push('/')
    }
  }

  if (loading) return <Loading text=""/>
  if (error) return `Error! ${error.message}`;

  return (
    <>
      <div className="details-container">
        <div className="details-header">
          {data?.pokemon?.sprites ? (
            <img
              src={data?.pokemon?.sprites.front_default}
              className="details-img"
              alt="item"
            />
            ) : null
          }
          <form className="details-name-container">
            <input
              className={isFromMyPokemonList ? "details-name" : "details-name center"}
              type="text"
              name="pokemonName"
              value={pokemonName.pokemonName}
              // onChange={handleChange}
              // onClick={handleSubmit}
              disabled={isFromMyPokemonList ? "" : "disabled"}
            />
           
          </form>
          {data?.pokemon?.types ? (
            <div className="details-types-container">
              <div className="details-values">
                {data?.pokemon?.types.map((type) => (
                  <div
                    key={type.type.name}
                    className={`details-value ${type.type.name}`}
                  >
                    {type.type.name}
                  </div>
                ))}
              </div>
            </div>
          ) : null}
        </div>
        
        <div className="details">
          {data?.pokemon?.abilities ? (
            <div className="details-pokemon-container">
              <div className="details-title">ABILITIES</div>
              <div className="details-values">
                {data?.pokemon?.abilities.map((ability) => (
                  <div key={ability.ability.name} className="details-value">
                    {ability.ability.name}
                  </div>
                ))}
              </div>
            </div>
          ) : null}
          {data?.pokemon?.moves ? (
            <div className="details-pokemon-container">
              <div className="details-title">MOVES</div>
              <div className="details-values">
                {data?.pokemon?.moves.map((move) => (
                  <div key={move.move.name} className="details-value">
                    {move.move.name}
                  </div>
                ))}
              </div>
            </div>
          ) : null}
        </div>
        
        <button
          onClick={handleCatch}
          className="details-button-container"
        >
          <div className="details-button">
            <img
              src={pokeball}
              className="details-button-img"
              alt={pokeball}
            />
            <div className="details-button-text">CATCH</div>
          </div>
        </button>
      </div>
    </>
  )
}