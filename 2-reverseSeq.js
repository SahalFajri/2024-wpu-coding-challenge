// WPU Coding Challenge 2024
// 2/366
// https://www.codewars.com/kata/5a00e05cc374cb34d100000d/javascript

const reverseSeq = n => {
  const result = [];
  for (i = n; i > 0; i--) {
    result.push(i);
  }
  return result;
};

// const reverseSeq = n => [...Array(n)].map((el, i) => n - i);

console.log(reverseSeq(5), [5, 4, 3, 2, 1]);