// WPU Coding Challenge 2024
// 18/366
// https://www.codewars.com/kata/5772da22b89313a4d50012f7

function greet(name, owner) {
  return 'Hello ' + (name == owner ? 'boss' : 'guest');
}

console.log(greet('Daniel', 'Daniel'), 'Hello boss')
console.log(greet('Greg', 'Daniel'), 'Hello guest')