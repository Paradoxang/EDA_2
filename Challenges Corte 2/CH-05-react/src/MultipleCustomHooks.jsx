import React from 'react';
import useCounter from './UseCounter';
import PokemonFetcher from './PokeFetcher';

const MultipleCustomHooks = () => {
    const { counter, increment, decrement } = useCounter(1);
    const url = `https://pokeapi.co/api/v2/pokemon/${counter}`;
  
    return (
      <div id="root">
        <h1>Pokémon ID: {counter}</h1>
        <div className="button-container">
          <button onClick={decrement}>Previous Pokémon</button>
          <button onClick={increment}>Next Pokémon</button>
        </div>
        <PokemonFetcher url={url} />
      </div>
    );
  };
  
  export default MultipleCustomHooks;