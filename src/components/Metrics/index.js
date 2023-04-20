import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleArrowRight } from '@fortawesome/free-solid-svg-icons';
import { useLocation } from 'react-router-dom';
import { fetchAirPollutionData } from '../../redux/air-pollution/airPollutionsSlice';

import css from './Metrics.module.css';

const Metrics = () => {
  const dispatch = useDispatch();
  const { search } = useLocation();
  const searchParams = new URLSearchParams(search);
  const city = searchParams.get('city');
  const lat = searchParams.get('lat');
  const lon = searchParams.get('lon');
  const {
    airPollutions: metrics,
    airpollutionsLoading: loading,
  } = useSelector((state) => state.airPollutions);

  useEffect(() => {
    (async () => {
      dispatch(fetchAirPollutionData());
    })();
  }, [dispatch, lat, lon]);

  if (loading) {
    return <p className={css.loading}>Data loading...!</p>;
  }

  return (
    <section className={css.metrics}>
      <article className={css.metricsHero}>
        <h1 className={css.heroTitle}>{city}</h1>
        <p className={css.heroDescription}>
          Lat:
          {' '}
          {lat}
        </p>
        <p className={css.heroDescription}>
          Lng:
          {' '}
          {lon}
        </p>
        <p className={css.heroDescription}>
          Dt:
          {' '}
          {metrics.dt}
        </p>
        <p className={css.heroDescription}>
          Air Quality:
          {' '}
          {metrics.aqi}
        </p>
      </article>
      <article className={css.metricsWrapper}>
        <h3 className={css.itemTitle}>City air pollution composition</h3>
        <ul className={css.listContainer}>
          {Object.keys(metrics).map((m) => (
            <li key={m} className={css.listItem}>
              <p className={css.itemKey}>{m}</p>
              <div className={css.itemValueWrapper}>
                <p className={css.itemValue}>{metrics[m]}</p>
                <FontAwesomeIcon color="#ffffff" cursor="pointer" icon={faCircleArrowRight} />
              </div>
            </li>
          ))}
        </ul>
      </article>
    </section>
  );
};

export default Metrics;
