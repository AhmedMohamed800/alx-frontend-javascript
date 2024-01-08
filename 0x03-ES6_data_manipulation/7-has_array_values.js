export default function hasValuesFromArray(sett, arr) {
  for (const num of arr) {
    if (!sett.has(num)) {
      return false;
    }
  }
  return true;
}
