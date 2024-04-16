export const weakMap = new WeakMap();

export function queryAPI(endpoint) {
  let total = weakMap.get(endpoint) || 0;

  total += 1;

  weakMap.set(endpoint, total);

  if (total >= 5) {
    throw Error('Endpoint load is high');
  }

  return total;
}
