import reducer from '../redux/locations/locationsSlice';

test('Location initial state', () => {
  expect(reducer(undefined, { type: undefined })).toEqual(
    { locations: [], locationLoading: false, locationsErros: null },
  );
});
