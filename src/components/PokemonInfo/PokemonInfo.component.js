import { Component } from 'react';

import PokemonPendingView from '../PokemonPendingView/PokemonPendingView.component';
import PokemonErrorView from '../PokemonErrorView/PokemonErrorView.component';
import PokemonDataView from '../PokemonDataView/PokemonDataView.component';

const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  REJECTED: 'rejected',
  RESOLVED: 'resolved',
};

export default class PokemonInfo extends Component {
  state = { pokemon: null, status: Status.IDLE, error: null };

  componentDidUpdate(prevProps, _prevState) {
    if (prevProps.pokemonName !== this.props.pokemonName) {
      this.setState({ status: Status.PENDING });

      fetch(`https://pokeapi.co/api/v2/pokemon/${this.props.pokemonName}`)
        .then((response) => {
          return response.ok
            ? response.json()
            : Promise.reject(
                new Error(
                  `No pokemon with the name "${this.props.pokemonName}".`
                )
              );
        })
        .then((pokemon) => {
          this.setState({ pokemon, status: Status.RESOLVED });
        })
        .catch((error) => {
          this.setState({ error, status: Status.REJECTED });
        });
    }
  }

  render() {
    const {
      state: { pokemon, error, status },
      props: { pokemonName },
    } = this;

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
}
