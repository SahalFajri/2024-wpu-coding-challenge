// WPU Coding Challenge 2024
// 4/366
// https://www.codewars.com/kata/53dc23c68a0c93699800041d

const smash = (words) => words.join(' ');

// function smash(words) {
//   let result = '';
//   for (let i = 0; i < words.length; i++) {
//     result += words[i];
//     if (i != words.length - 1) result += ' ';
//   }
//   return result;
// }

console.log(smash([]), "");
console.log(smash(["hello"]), "hello");
console.log(smash(["hello", "world"]), "hello world");
console.log(smash(["hello", "amazing", "world"]), "hello amazing world");
console.log(smash(["this", "is", "a", "really", "long", "sentence"]), "this is a really long sentence");