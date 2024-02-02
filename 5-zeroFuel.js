// WPU Coding Challenge 2024
// 5/366
// https://www.codewars.com/kata/5861d28f124b35723e00005e

const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
  return distanceToPump / mpg <= fuelLeft;
};

// const zeroFuel = (_,__,___) => ___*__>=_;

console.log(zeroFuel(50, 25, 2), true);
console.log(zeroFuel(100, 50, 1), false);