export default function updateUniqueItems(map) {
  // eslint-diable-next-line_no-restricted-syntax
  if (!(map instanceof Map)) {
    throw new Error('Cannot process');
  }

  for (const [key, value] of map) {
    if (value === 1) {
      map.set(key, 100);
    } else {
      map.set(key, value);
    }
  }
  return map;
}
