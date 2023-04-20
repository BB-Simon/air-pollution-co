import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faGear, faMicrophone } from '@fortawesome/free-solid-svg-icons';
import { Link, useLocation } from 'react-router-dom';
import css from './Navigation.module.css';

const Navigation = () => {
  const { search } = useLocation();
  const searchParams = new URLSearchParams(search);
  const city = searchParams.get('city');

  return (
    <nav className={css.navbar}>
      <Link to="/" className={css.logoWrapper}>
        <FontAwesomeIcon icon={faChevronLeft} />
        {' '}
        2023
      </Link>
      <p to="/">
        {city ? `City/${city}` : 'Cities/Asia'}
      </p>
      <ul className={css.navItemsWrapper}>
        <li className={css.navItem}>
          <FontAwesomeIcon icon={faMicrophone} />
        </li>
        <li className={css.navItem}>
          <FontAwesomeIcon icon={faGear} />
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
