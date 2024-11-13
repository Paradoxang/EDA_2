import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchPokemon } from '../store/pokemonSlice';
import useCounter from '../components/PokemonComponents/UseCounter';
import PokemonFetcher from '../components/PokemonComponents/PokeFetcher';

const MultipleCustomHooks = () => {
  const { counter, increment, decrement } = useCounter(1);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPokemon(counter));
  }, [counter, dispatch]);

  return (
    <div id="root">
      <h1>Pokémon ID: {counter}</h1>
      <div className="button-container">
        <button onClick={decrement}>Previous Pokémon</button>
        <button onClick={increment}>Next Pokémon</button>
      </div>
      <PokemonFetcher />
    </div>
  );
};
export default MultipleCustomHooks;
