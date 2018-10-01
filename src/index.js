module.exports = function longestConsecutiveLength(array) {
  // your solution here
  let newSet = new Set(array);
  let max = 0;
  for (let i = 0; i < newSet.size; i++) {
    if (!newSet.has(array[i] - 1)) {
      let current = array[i];
      while (newSet.has(current)) {
        current++;
      }
      if (max < current - array[i]) {
        max = current - array[i];
      }
    }
  }
  return max;
};
