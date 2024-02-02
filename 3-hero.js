// WPU Coding Challenge 2024
// 3/366
// https://www.codewars.com/kata/59ca8246d751df55cc00014c/javascript

const hero = (bullets, dragons) => (bullets / 2) >= dragons ? true : false;

// function hero(bullets, dragons) {
//   if (bullets / 2 >= dragons){
//     return true;
//   } else {
//     return false;
//   }
// }

// const hero = (bullets, dragons) => bullets / 2 >= dragons;

console.log(hero(10, 5), true);
console.log(hero(7, 4), false);
console.log(hero(4, 5), false);
console.log(hero(100, 40), true);
console.log(hero(1500, 751), false);
console.log(hero(0, 1), false);