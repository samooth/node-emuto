test('works properly', () => {
  const emuto = require('./index');

  const filter = emuto('4 + 3');
  const filtered_data = filter([]);
  expect(filtered_data).toEqual(7);
});
