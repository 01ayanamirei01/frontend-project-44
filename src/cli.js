#!/usr/bin/env node
console.log("Welcome to the Brain Games!")
import readlineSync from 'readline-sync';
const user = () => {
const userName = readlineSync.question('May I have your name?: ');
console.log(`Hello, ${userName}!`);
return userName;
};
export default user;





