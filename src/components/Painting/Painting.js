import PropTypes from 'prop-types';

import defaultImage from './default.jpg';

export default function Painting({
  imageUrl = defaultImage,
  title,
  profileUrl,
  author = 'Not known',
  price,
  quantity,
}) {
  return (
    <div>
      <img src={imageUrl} alt={title} width={480} />
      <h2>{title}</h2>
      <p>
        Author: <a href={profileUrl}>{author}</a>
      </p>
      <p>Price: {price} credits</p>
      <p>Availabiltiy: {quantity < 10 ? 'ending' : 'available'}</p>
      <button type="button">Add to the busket</button>
    </div>
  );
}

Painting.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  profileUrl: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired,
};
