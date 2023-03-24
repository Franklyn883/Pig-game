'use strict';
//selection elements
const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');
const diceEl = document.getElementsByClassName('dice')[0];
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current -- 1')
const btnNew = document.getElementsByClassName('btn--new')[0];
const btnRoll = document.getElementsByClassName('btn--roll')[0];
const btnHold = document.getElementsByClassName('btn--hold')[0];


//setting initial values and display
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden')
let currentScore = 0
//add eventlistener to the btnRoll
btnRoll.addEventListener('click', () =>{
  //generate a random number from 1 - 6;
  const dice = Math.floor(Math.random() * 6) + 1
  console.log(dice);
  diceEl.classList.remove('hidden');
  //display the dice img
  diceEl.setAttribute("src", `resources/dice-${dice}.png`)
  //if dice roll != 1 update currentScore
  if(dice !== 1){
    currentScore +=dice;
    current0El.textContent = currentScore
  }
  else{
    //switch players
    
    //currentScore =0
    currentScore = 0;
    current0El.textContent = currentScore;
  }
})


