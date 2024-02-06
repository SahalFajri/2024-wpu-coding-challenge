// WPU Coding Challenge 2024
// 11/366
// https://www.codewars.com/kata/5672a98bdbdd995fad00000f

const rps = (p1, p2) => {
  let winner = 0;
  if (p1 === p2) {
    return 'Draw!';
  } else {
    if (p1 === 'rock') {
      if (p2 === 'scissors') {
        winner = 1;
      } else {
        winner = 2;
      }
    } else if (p1 === 'scissors') {
      if (p2 === 'paper') {
        winner = 1;
      } else {
        winner = 2;
      }
    } else if (p1 === 'paper') {
      if (p2 === 'rock') {
        winner = 1;
      } else {
        winner = 2;
      }
    }
  }

  return `Player ${winner} won!`;
};

// const rps = (p1, p2) => {
//   const rules = {
//     rock: 'scissors',
//     scissors: 'paper',
//     paper: 'rock',
//   };

//   return p1 === p2 ? 'Draw!' : `Player ${rules[p1] === p2 ? '1' : '2'} won!`;
// };


const getMsg = (n) => `Player ${n} won!`;


console.log(rps('rock', 'scissors'), getMsg(1));
console.log(rps('scissors', 'paper'), getMsg(1));
console.log(rps('paper', 'rock'), getMsg(1));



console.log(rps('scissors', 'rock'), getMsg(2));
console.log(rps('paper', 'scissors'), getMsg(2));
console.log(rps('rock', 'paper'), getMsg(2));



console.log(rps('rock', 'rock'), 'Draw!');
console.log(rps('scissors', 'scissors'), 'Draw!');
console.log(rps('paper', 'paper'), 'Draw!');
