// logic for input focus and blur effect
// if user click on any input field changing background and clicking elsewhere will remove that effect

const descField = document.querySelector('.desc-field');
const catgField = document.querySelector('.catg-field');
const dateField = document.querySelector('.date-field');

const desc = document.querySelector('.desc');
const catg = document.querySelector('.catg');
const date = document.querySelector('.date');

desc.addEventListener('focus', ()=> descField.style.background= 'var(--dark-white');
desc.addEventListener('blur', ()=> descField.style.background= '');

catg.addEventListener('focus', ()=> catgField.style.background= 'var(--dark-white');
catg.addEventListener('blur', ()=> catgField.style.background= '');

date.addEventListener('focus', ()=> dateField.style.background= 'var(--dark-white');
date.addEventListener('blur', ()=> dateField.style.background= '');