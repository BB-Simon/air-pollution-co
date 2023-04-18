import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchLocationsData } from '../../redux/locations/locationsSlice';
import { fetchAirPollutionData } from '../../redux/air-pollution/airPollutionsSlice';

const Home = () => {
  const { locations, locationsLoading } = useSelector((state) => state.locations);
  const { airPollutions } = useSelector((state) => state.airPollutions);
  const dispatch = useDispatch();

  useEffect(() => {
    if (locations.length === 0) {
      dispatch(fetchLocationsData());
      dispatch(fetchAirPollutionData({ lat: 30.0443879, lon: 31.2357257 }));
    }
  }, [dispatch, locations.length]);

  console.log('locations', locations);
  console.log('airPollutions', airPollutions);

  return <div>index</div>
};

export default Home;
