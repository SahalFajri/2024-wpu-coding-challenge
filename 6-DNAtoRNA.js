// WPU Coding Challenge 2024
// 6/366
// https://www.codewars.com/kata/5556282156230d0e5e000089

// function DNAtoRNA(dna) {
//   rna = '';
//   for (let i of dna) {
//     rna += i !== 'T' ? i : 'U';
//   }
//   return rna;
// }

// const DNAtoRNA = (dna) => dna.split('').map((el) => el !== 'T' ? el : 'U').join('');

// const DNAtoRNA =(dna) => dna.replace(/T/g, 'U');
// const DNAtoRNA = (dna) => dna.replaceAll('T', 'U');

const DNAtoRNA = (dna) => dna.split('T').join('U');

console.log(DNAtoRNA("TTTT"), "UUUU")
console.log(DNAtoRNA(""), "")
console.log(DNAtoRNA("GCAT"), "GCAU")
console.log(DNAtoRNA("GACCGCCGCC"), "GACCGCCGCC")