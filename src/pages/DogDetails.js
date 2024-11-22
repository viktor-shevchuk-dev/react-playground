import { Suspense, useRef } from 'react';
import { Link, Outlet, useParams, useLocation } from 'react-router-dom';

const DogDetails = () => {
  const { dogId } = useParams();
  const location = useLocation();

  // useEffect(() => {
  // HTTP request, if needed
  // }, [])

  const backLinkLocationRef = useRef(location.state?.from ?? '/dogs');

  return (
    <>
      <h1>DogDetails: {dogId}</h1>
      <Link to={backLinkLocationRef.current}>Back to the Collection Page</Link>
      <ul>
        <li>
          <Link to="subbreeds">Subbreeds</Link>
        </li>
        <li>
          <Link to="gallery">Gallery</Link>
        </li>
      </ul>
      <Suspense fallback={<p>Loading SubPage...</p>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default DogDetails;
