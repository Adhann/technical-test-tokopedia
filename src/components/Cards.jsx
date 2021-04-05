import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import '../components/Cards.css'
import { GlobalContext } from '../context/GlobalState';
import Swal from 'sweetalert2'

export default function Cards({ pokemon }) {
 
  const isFromMyPokemonList = window.location.pathname ? window.location.pathname === "/my-pokemon-list" : false;
  const { removeMyPokemon } = useContext(GlobalContext);
  
  const handleRelease = (id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, release it!'
    }).then((result) => {
      if (result.isConfirmed) {
        removeMyPokemon(id)
        Swal.fire(
          'Release!',
          'Your pokemon has been release.',
          'success'
        )
      }
    })
  }
  return (
      <div className="card">
        <div className="card-container">
          <Link
            to={{
              pathname: "/pokemon-details",
              state: { pokemon: pokemon },
            }}
            key={pokemon?.id}
            className="card-link"
          > 
            <img
              src={pokemon?.image}
              className="card-img"
              alt={pokemon?.name}
            />
            <div className="card-title">{pokemon?.name}</div>
          </Link>
          {/* <div className="card-owned-text">OWNED: {pokemon?.count}</div> */}
          {!isFromMyPokemonList ? (
            <div className="card-owned-text">OWNED: {pokemon?.count}</div>
          ) : (
            <button
              className="button-container button card-link"
              onClick={() => handleRelease(pokemon?.id)}
            >
              <div className="card-button-text">RELEASE</div>
            </button>
          )}
        </div>
      </div>
  )
}