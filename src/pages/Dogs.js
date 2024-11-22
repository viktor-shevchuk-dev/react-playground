import { useState, useMemo } from 'react';
import { Link, useSearchParams, useLocation } from 'react-router-dom';

const Dogs = () => {
  const [dogs, setDogs] = useState([
    'dog-1',
    'dog-2',
    'dog-3',
    'dog-4',
    'dog-5',
  ]);
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();

  const dogId = searchParams.get('dogId') ?? '';

  const filteredDogs = useMemo(
    () => dogs.filter((dog) => dog.includes(dogId)),
    [dogId, dogs]
  );

  // useEffect(() => {
  // HTTP request, if needed
  // }, [])

  const updateQueryString = (event) => {
    const dogIdValue = event.target.value;
    const nextParams = dogIdValue === '' ? {} : { dogId: dogIdValue };

    setSearchParams(nextParams);
  };

  return (
    <div>
      <input value={dogId} type="text" onChange={updateQueryString} />
      <button onClick={() => setSearchParams({ b: 'hi' })}>
        Change Search Param
      </button>

      <ul>
        {filteredDogs.map((dog) => {
          return (
            <li key={dog}>
              <Link state={{ from: location }} to={`${dog}`}>
                {dog}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Dogs;
