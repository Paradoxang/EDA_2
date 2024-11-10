//AAAAA
import React from 'react';
import useFetch from './useFetch';

const PokemonFetcher = ({ url }) => {
  const { data, isLoading, hasError } = useFetch(url);

  if (isLoading) return <p>Loading...</p>;
  if (hasError) return <p>Error: {hasError}</p>;

  return (
    <blockquote>
      <h2>{data.name}</h2>
      <img src={data.sprites.front_default} alt={data.name} />
      <p>Height: {data.height}</p>
      <p>Weight: {data.weight}</p>
    </blockquote>
  );
};

export default PokemonFetcher;
