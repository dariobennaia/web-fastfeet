export default (name) => {
  const arr = name.split(' ');
  const { length } = arr;

  if (length === 0) return '';
  if (length === 1) return arr[0][0];

  const first = arr[0][0];
  const last = arr[length - 1][0];
  return `${first}${last}`;
};
