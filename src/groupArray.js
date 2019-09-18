/**
 * Splits arr into n, equally-sized if possible, arrays in an array.
 * With any unequal remainder in the final array in the return value
 * 
 * groupArray([1, 2, 3, 4, 5], 3) === [[1, 2], [3, 4], [5]];
 * 
 * @param {Array} arr 
 * @param {Number} n 
 */
const groupArray = (arr, n) => {
  const elementsPerChild = Math.ceil(arr.length / n);
  let result = new Array(n).fill(1).map(() => []);

  arr.forEach((element, index) => {
    result[Math.floor(index / elementsPerChild)].push(element);
  })

  return result;
};

module.exports = groupArray;