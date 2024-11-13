import React from 'react';
import { useSelector } from 'react-redux';

const PokemonFetcher = () => {
  const { data, isLoading, error } = useSelector((state) => state.pokemon);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return data ? (
    <blockquote>
      <h2>{data.name}</h2>
      <img src={data.sprites.front_default} alt={data.name} />
      <p>Height: {data.height}</p>
      <p>Weight: {data.weight}</p>
    </blockquote>
  ) : null;
};

export default PokemonFetcher;

