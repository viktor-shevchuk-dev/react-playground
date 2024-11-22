const { useParams } = require('react-router-dom');

export default function SubBreeds() {
  const { dogId } = useParams();

  // useEffect(() => {
  // HTTP request, if needed
  // }, [])

  return <div>SubBreeds: {dogId}</div>;
}
