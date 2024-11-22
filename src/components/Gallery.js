const { useParams } = require('react-router-dom');

export default function Gallery() {
  const { dogId } = useParams();

  // useEffect(() => {
  // HTTP request, if needed
  // }, [])

  return <div>Image Gallery: {dogId}</div>;
}
