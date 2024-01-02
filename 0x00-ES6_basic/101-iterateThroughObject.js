export default function iterateThroughObject(reportWithIterator) {
  let stringy = '';
  for (let i = 0; i < reportWithIterator.length; i += 1) {
    stringy += reportWithIterator[i];
    if (i !== reportWithIterator.length - 1) {
      stringy += ' | ';
    }
  }
  return stringy;
}
