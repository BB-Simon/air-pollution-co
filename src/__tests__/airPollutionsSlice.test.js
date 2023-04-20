import reducer from '../redux/air-pollution/airPollutionsSlice';

test('Metrics initial state', () => {
  expect(reducer(undefined, { type: undefined })).toEqual(
    { airPollutions: {}, airpollutionsLoading: false, airpollutionsErros: null },
  );
});
