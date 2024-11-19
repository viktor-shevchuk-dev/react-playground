const PokemonErrorView = ({ message }) => {
  return (
    <div role="alert">
      <p>{message}</p>
    </div>
  );
};

export default PokemonErrorView;
