export default function cleanSet(sett, startString) {
  const result = [];
  for (const item of sett) {
    if (item.slice(0, 3) === startString) {
      result.push(item.slice(startString.length));
    }
  }
  return result.join('-');
}
