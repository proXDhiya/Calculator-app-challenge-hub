'use strict';

// Calculator button
const btnNum1 = document.querySelector('#num_1');
const btnNum2 = document.querySelector('#num_2');
const btnNum3 = document.querySelector('#num_3');
const btnNum4 = document.querySelector('#num_4');
const btnNum5 = document.querySelector('#num_5');
const btnNum6 = document.querySelector('#num_6');
const btnNum7 = document.querySelector('#num_7');
const btnNum8 = document.querySelector('#num_8');
const btnNum9 = document.querySelector('#num_9');
const btnNum0 = document.querySelector('#num_0');
const btnAdd = document.querySelector('#add');
const btnSub = document.querySelector('#sub');
const btnMul = document.querySelector('#mul');
const btnDiv = document.querySelector('#div');
const btnDel = document.querySelector('#del');
const btnEql = document.querySelector('#result');
const btnReset = document.querySelector('#reset');
const btnDot = document.querySelector('#point');

// Screen
const screen = document.querySelector('.screen > p');


// Limit range
const clamp = (min, max, val) => Math.min(Math.max(min, +val), max);



// Update screen function
let floutingPoint = false;
let shift = 1;
const screenUpdate = (value) => {
    let data = parseFloat(screen.textContent);
    if (!floutingPoint) {
        data = data * 10 + value;
    } else {
        data += parseFloat((Math.pow(0.1, shift) * value).toFixed(shift));
        shift++;
    }

    screen.textContent = data;
}



// Reset calculator function
const resetCalculator = () => {
    screen.textContent = '0';
    floutingPoint = false;
    shift = 1;
}



// Delete function
const deleteNum = () => {
    let data = screen.textContent / 10;

    if (data >= 0)
        screen.textContent = Math.floor(data);
    else
        screen.textContent = Math.ceil(data);
}



// Active flout mode
const ActiveFlout = () => {
    floutingPoint = true;
}



// Events listener
btnNum0.addEventListener('click', () => screenUpdate(0));
btnNum1.addEventListener('click', () => screenUpdate(1));
btnNum2.addEventListener('click', () => screenUpdate(2));
btnNum3.addEventListener('click', () => screenUpdate(3));
btnNum4.addEventListener('click', () => screenUpdate(4));
btnNum5.addEventListener('click', () => screenUpdate(5));
btnNum6.addEventListener('click', () => screenUpdate(6));
btnNum7.addEventListener('click', () => screenUpdate(7));
btnNum8.addEventListener('click', () => screenUpdate(8));
btnNum9.addEventListener('click', () => screenUpdate(9));
btnReset.addEventListener('click', () => resetCalculator());
btnDel.addEventListener('click', () => deleteNum());
btnDot.addEventListener('click', () => ActiveFlout());