const groupArray = require('../src/groupArray.js');

describe('Group Array', () => {
  it('should return the array when N = 1', () => {
    expect(groupArray([1, 2, 3, 4, 5], 1)).toEqual([[1, 2, 3, 4, 5]]);
  });
  it('should equally divide a divisible array', () => {
    expect(groupArray([1, 2, 3, 4], 2)).toEqual([[1, 2], [3, 4]]);
  });
  it('should split an indivisible array with a smaller final array', () => {
    expect(groupArray([1, 2, 3, 4, 5], 3)).toEqual([[1, 2], [3, 4], [5]]);
  });
  it('should return N empty arrays when passed an empty array', () => {
    expect(groupArray([], 4)).toEqual([[], [], [], []]);
  });
  it('should return some empty arrays when N > array.length', () => {
    expect(groupArray([1, 2], 5)).toEqual([[1], [2], [], [], []]);
  });
});
