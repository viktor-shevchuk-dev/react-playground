import { useState, useEffect } from 'react';

export default function useLocalStorage(
  key,
  serialize = JSON.stringify,
  deserialize = JSON.parse
) {
  const [state, setState] = useState(
    () => deserialize(window.localStorage.getItem(key)) ?? ''
  );

  useEffect(() => {
    window.localStorage.setItem(key, serialize(state));
  }, [state, key, serialize]);

  return [state, setState];
}
