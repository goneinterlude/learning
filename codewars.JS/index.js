Return the number (count) of vowels in the given string.

We will consider a, e, i, o, u as vowels for this Kata (but not y).

The input string will only consist of lower case letters and/or spaces.


const stringToNumber = function(str){
  return Number(str);
}


Create a function with two arguments that will return an array of the first n multiples of x.

Assume both the given number and the number of times to count will be positive numbers greater than 0.

Return the results as an array or list ( depending on language ).

function countBy(x, n) {
  let z = [];
  for (let i = 1; i <= n; i++) {
  z.push(x * i)}
  return z;
}

This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.

function simpleMultiplication(number) {
    if (number % 2 === 0) {
  return number * 8} else {
  return number * 9}
}