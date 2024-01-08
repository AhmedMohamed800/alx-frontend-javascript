export default function createInt8TypedArray(length, position, value) {
  if (position < 0 || position >= length) {
    throw Error('Position outside range');
  }
  const buffer = new ArrayBuffer(length);
  const newView = new DataView(buffer, 0, length);
  const int8Array = new Int8Array(buffer);
  int8Array[position] = value;

  return newView;
}
