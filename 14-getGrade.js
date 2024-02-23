// WPU Coding Challenge 2024
// 14/366
// https://www.codewars.com/kata/55cbd4ba903825f7970000f5

function getGrade(s1, s2, s3) {
  let score = (s1 + s2 + s3) / 3
  return score >= 90 ? 'A' : score >= 80 ? 'B' : score >= 70 ? 'C' : score >= 60 ? 'D' : 'F';
}

// function getGrade(...s) {
//   let score = s.reduce((curr, acc) => curr + acc) / s.length
//   return score >= 90 ? 'A' : score >= 80 ? 'B' : score >= 70 ? 'C' : score >= 60 ? 'D' : 'F';
// }

console.log(getGrade(95, 90, 93), 'A')
console.log(getGrade(100, 85, 96), 'A')
console.log(getGrade(92, 93, 94), 'A')

console.log(getGrade(70, 70, 100), 'B')
console.log(getGrade(82, 85, 87), 'B')
console.log(getGrade(84, 79, 85), 'B')
console.log(getGrade(89, 89, 90), 'B')

console.log(getGrade(70, 70, 70), 'C')
console.log(getGrade(75, 70, 79), 'C')
console.log(getGrade(60, 82, 76), 'C')

console.log(getGrade(65, 70, 59), 'D')
console.log(getGrade(66, 62, 68), 'D')
console.log(getGrade(58, 62, 70), 'D')

console.log(getGrade(44, 55, 52), 'F')
console.log(getGrade(48, 55, 52), 'F')
console.log(getGrade(58, 59, 60), 'F')