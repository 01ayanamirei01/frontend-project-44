#!/usr/bin/env node
import readlineSync from 'readline-sync';

// Функция для генерации случайного числа в заданном диапазоне
const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

// Функция для генерации случайной математической операции
const getRandomOperation = () => {
  const operations = ['+', '-', '*'];
  const randomIndex = Math.floor(Math.random() * operations.length);
  return operations[randomIndex];
};

// Функция для вычисления результата математического выражения
const calculateExpression = (num1, num2, operation) => {
  switch (operation) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      return null;
  }
};

const playCalculatorGame = () => {
  console.log('brain-calc');
  console.log('Welcome to the Brain Games! May I have your name?');
  const name = readlineSync.question();

  console.log(`Hello, ${name}!`);
  console.log('What is the result of the expression?');

  for (let i = 0; i < 3; i += 1) {
    // Генерируем два случайных числа и математическую операцию
    const number1 = getRandomNumber(1, 20);
    const number2 = getRandomNumber(1, 20);
    const operation = getRandomOperation();

    console.log(`Question: ${number1} ${operation} ${number2}`);
    const userAnswer = readlineSync.question('Your answer: ');

    const correctAnswer = calculateExpression(number1, number2, operation);

    if (parseInt(userAnswer, 10) === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }

  console.log(`Congratulations, ${name}!`);
};

// Запуск игры
playCalculatorGame();
