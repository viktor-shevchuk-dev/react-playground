import { useEffect, useState } from 'react';

import PokemonPendingView from '../PokemonPendingView/PokemonPendingView.component';
import PokemonErrorView from '../PokemonErrorView/PokemonErrorView.component';
import PokemonDataView from '../PokemonDataView/PokemonDataView.component';

const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  REJECTED: 'rejected',
  RESOLVED: 'resolved',
};

export default function PokemonInfo({ pokemonName }) {
  const [pokemon, setPokemon] = useState(null);
  const [status, setStatus] = useState(Status.IDLE);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (pokemonName === '') return;

    setStatus(Status.PENDING);

    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
      .then((response) => {
        return response.ok
          ? response.json()
          : Promise.reject(
              new Error(`No pokemon with the name "${pokemonName}".`)
            );
      })
      .then((pokemon) => {
        setStatus(Status.RESOLVED);
        setPokemon(pokemon);
      })
      .catch((error) => {
        setStatus(Status.REJECTED);
        setError(error);
      });
  }, [pokemonName]);

  if (status === Status.IDLE) {
    return <div>Enter a pokemon's name.</div>;
  }

  if (status === Status.PENDING) {
    return <PokemonPendingView pokemonName={pokemonName} />;
  }

  if (status === Status.REJECTED) {
    return <PokemonErrorView message={error.message} />;
  }

  if (status === Status.RESOLVED) {
    return (
      <PokemonDataView
        name={pokemon.name}
        imgUrl={pokemon.sprites.other['official-artwork'].front_default}
        stats={pokemon.stats}
      />
    );
  }
}
