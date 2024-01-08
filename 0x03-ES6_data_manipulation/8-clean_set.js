export default function cleanSet(sett, startString) {
  if (startString.length === 0) {
    return '';
  }
  const result = [];
  for (const item of sett) {
    if (item.slice(0, startString.length) === startString) {
      result.push(item.slice(startString.length));
    }
  }
  return result.join('-');
}
