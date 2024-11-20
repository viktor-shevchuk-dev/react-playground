import { useEffect, useState, useRef } from 'react';

export default function SkipEffectOnFirstRender() {
  const [count, setCount] = useState(0);

  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    // console.log(`${Date.now()}`);
  });

  return (
    <div>
      <p>
        <code>useEffect</code> of this component is not executed at the first
        render
      </p>
      <button onClick={() => setCount((prevState) => prevState + 1)}>
        {count}
      </button>
    </div>
  );
}
