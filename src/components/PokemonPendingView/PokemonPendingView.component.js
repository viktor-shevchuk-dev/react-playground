import PokemonDataView from '../PokemonDataView/PokemonDataView.component';

import pendingImage from './skeleton_card.svg';

const PokemonPendingView = ({ pokemonName }) => {
  const pokemon = {
    name: pokemonName,
    imgUrl: pendingImage,
    stats: [],
  };

  return (
    <div role="alert">
      <p>Loading...</p>
      <PokemonDataView {...pokemon} />
    </div>
  );
};

export default PokemonPendingView;
