#!/usr/bin/env node

const readlineSync = require('readline-sync');
function isPrime(number) {
  if (number <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}

function startGame() {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}! Answer "yes" if given number is prime. Otherwise answer "no".`);

  let correctAnswersCount = 0;
  while (correctAnswersCount < 3) {
    const number = Math.floor(Math.random() * 100) + 1; 
    console.log('Question:', number);
    const userAnswer = readlineSync.question('Your answer: ');

    const isNumberPrime = isPrime(number);
    if ((isNumberPrime && userAnswer === 'yes') || (!isNumberPrime && userAnswer === 'no')) {
      console.log('Correct!');
      correctAnswersCount++;
    } else {
      const correctAnswer = isNumberPrime ? 'yes' : 'no';
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'. Let's try again, ${name}!`);
      correctAnswersCount = 0;
    }
  }
  console.log(`Congratulations, ${name}!`);
}

startGame();
