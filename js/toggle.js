'use strict';

// Toggle btn & theme
const theme1 = document.getElementById('theme1');
const theme2 = document.getElementById('theme2');
const theme3 = document.getElementById('theme3');
const toggle = document.querySelector('.toggle');
let state = 0;

toggle.addEventListener(
    'click', () => {
        state = (state + 1) % 3;
        switch (state) {
            case 0:
                theme1.disabled = false;
                theme2.disabled = true;
                theme3.disabled = true;
                break;
            case 1:
                theme1.disabled = true;
                theme2.disabled = false;
                theme3.disabled = true;
                break;
            case 2:
                theme1.disabled = true;
                theme2.disabled = true;
                theme3.disabled = false;
                break;
        }
    }
);
