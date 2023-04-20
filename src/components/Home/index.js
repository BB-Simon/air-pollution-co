import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchLocationsData } from '../../redux/locations/locationsSlice';
import LocationCard from '../LocationCard';

import css from './Home.module.css';

const Home = () => {
  const { locations, locationsLoading } = useSelector((state) => state.locations);
  const dispatch = useDispatch();
  console.log('locations', locations);

  useEffect(() => {
    if (locations.length === 0) {
      dispatch(fetchLocationsData());
    }
  }, [dispatch, locations.length]);

  if (locationsLoading) {
    return <p className={css.loading}>Data loading...!</p>;
  }

  return (
    <div className={css.home}>
      <section className={css.bannerContainer}>
        <h1 className={css.heroTitle}>Asia</h1>
        <p className={css.heroDescription}>6 cities</p>
      </section>
      <section className={css.locationContainer}>
        <h3 className={css.locationTitle}>Locations coordinates by city</h3>
        <ul className={css.locationCardContainer}>
          {locations && locations.map((l) => (
            <LocationCard key={l.name} location={l} />
          ))}
        </ul>
      </section>
    </div>
  );
};

export default Home;
