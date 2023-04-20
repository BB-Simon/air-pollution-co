import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleArrowRight } from '@fortawesome/free-solid-svg-icons';

import css from './LocationCard.module.css';

const LocationCard = ({ location }) => {
  const { lat, lon, name } = location;

  return (
    <li className={css.card}>
      <Link to={`/metrics?city=${name}&lat=${lat}&lon=${lon}`} className={css.cardInfo}>
        <FontAwesomeIcon icon={faCircleArrowRight} />
        <div>
          <h4 className={css.title}>{name}</h4>
          <p className={css.description}>
            {lat}
            {' - '}
            {lon}
          </p>
        </div>
      </Link>
    </li>
  );
};

LocationCard.propTypes = {
  location: PropTypes.shape({
    country: PropTypes.string,
    lat: PropTypes.number,
    lon: PropTypes.number,
    name: PropTypes.string,
    state: PropTypes.string,
  }).isRequired,
};

export default LocationCard;
