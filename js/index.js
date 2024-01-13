'use strict';

const input = document.createElement('input');
const p = document.createElement('p');

input.type = text;

document.body.append(input, p);

const showText = () => p.textContent = input.value;

let timeout;

const debounce = () => {
  clearTimeout(timeout);
  timeout = setTimeout(showText, 300);
};

input.addEventListener('keyup', debounce);