import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faGear, faMicrophone } from '@fortawesome/free-solid-svg-icons';
import { Link, NavLink } from 'react-router-dom';
import css from './Navigation.module.css';

const Navigation = () => {
  const navLink = ({ isActive }) => (isActive ? `${css.navLink} ${css.active}` : `${css.navLink}`);

  return (
    <nav className={css.navbar}>
      <Link to="/" className={css.logoWrapper}>
        <FontAwesomeIcon icon={faChevronLeft} />
        {' '}
        2023
      </Link>
      <Link to="/" className={css.logoWrapper}>
        City/London
      </Link>
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
