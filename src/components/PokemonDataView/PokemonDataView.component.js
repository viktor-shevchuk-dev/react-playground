const PokemonDataView = ({ name, imgUrl, stats }) => {
  return (
    <div>
      <img src={imgUrl} alt={name} width={240} />
      <h2>{name}</h2>
      <ul>
        {stats.map((entry) => (
          <li key={entry.stat.name}>
            {entry.stat.name}: {entry.base_stat}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PokemonDataView;
