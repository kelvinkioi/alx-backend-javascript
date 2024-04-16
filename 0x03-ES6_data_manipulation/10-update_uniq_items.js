export default function updateUniqueItems(uniqueItems) {
  if (!(uniqueItems instanceof Map)) {
    throw new Error('Cannot process');
  }
  for (const [key, value] of uniqueItems) {
    if (value === 1) {
      uniqueItems.set(key, 100);
    }
  }
  return uniqueItems;
}
