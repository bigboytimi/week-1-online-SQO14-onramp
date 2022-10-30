function sumMix(arr) {
  let i;
  let add = 0;

  for (i = 0; i < arr.length; i++) {
    add += Number(arr[i]);
  }
  return add;
}
module.exports = sumMix;
