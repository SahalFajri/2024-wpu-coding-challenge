// WPU Coding Challenge 2024
// 15/366
// https://www.codewars.com/kata/576b93db1129fcf2200001e6

function sumArray(array) {
  if (!array || array.length <= 2) {
    return 0;
  }

  return array.reduce((acc, curr) => acc + curr) - (Math.min(...array) + Math.max(...array));
}

// const sumArray = (array) => array ? array.sort((a, b) => a - b).slice(1, -1).reduce((acc, curr) => acc + curr, 0) : 0;

console.log(sumArray(null), 0);
console.log(sumArray([]), 0);
console.log(sumArray([3]), 0);
console.log(sumArray([3, 5]), 0);
console.log(sumArray([6, 2, 1, 8, 10]), 16);
console.log(sumArray([0, 1, 6, 10, 10]), 17);
console.log(sumArray([-6, -20, -1, -10, -12]), -28);
console.log(sumArray([-6, 20, -1, 10, -12]), 3);