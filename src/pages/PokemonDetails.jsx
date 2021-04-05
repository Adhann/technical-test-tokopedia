import React from 'react'
import Details from '../components/Details'
export default function PokemonDetails(props) {
  console.log(props, '<<<<<<<<<< PROPS');
  return (
    <>
      <Details pokemon={props?.location?.state?.pokemon}/>
    </>
  )
}