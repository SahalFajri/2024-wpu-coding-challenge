// WPU Coding Challenge 2024
// 9/366
// https://www.codewars.com/kata/577a98a6ae28071780000989

var min = function (list) {
  return Math.min(...list);
}

var max = function (list) {
  return Math.max(...list);
}

// const min = (list) => list.sort((a, b) => a - b)[0];
// const max = (list) => list.sort((a, b) => b - a)[0];

console.log(min([-52, 56, 30, 29, -54, 0, -110]), -110);
console.log(min([42, 54, 65, 87, 0]), 0);
console.log(max([4, 6, 2, 1, 9, 63, -134, 566]), 566);
console.log(max([5]), 5);