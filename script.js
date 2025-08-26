// Part 1: Variables & Conditionals
// -------------------------------
const ageInput = document.getElementById('ageInput');
const checkAgeBtn = document.getElementById('checkAgeBtn');
const ageResult = document.getElementById('ageResult');

checkAgeBtn.addEventListener('click', function() {
  const age = parseInt(ageInput.value);
  if (isNaN(age)) {
    ageResult.textContent = 'Please enter a valid number.';
  } else if (age >= 18) {
    ageResult.textContent = 'You are an adult.';
  } else {
    ageResult.textContent = 'You are a minor.';
  }
});

// Part 2: Custom Functions
// -------------------------
function sum(a, b) {
  return a + b;
}

function formatResult(value) {
  return `Result: ${value}`;
}

const num1 = document.getElementById('num1');
const num2 = document.getElementById('num2');
const sumBtn = document.getElementById('sumBtn');
const sumResult = document.getElementById('sumResult');

sumBtn.addEventListener('click', function() {
  const a = parseFloat(num1.value) || 0;
  const b = parseFloat(num2.value) || 0;
  const total = sum(a, b);
  sumResult.textContent = formatResult(total);
});

// Part 3: Loops — Countdown Examples
// -----------------------------------
const countdownBtn = document.getElementById('countdownBtn');
const countdownDisplay = document.getElementById('countdownDisplay');

countdownBtn.addEventListener('click', function() {
  countdownDisplay.innerHTML = '';
  // Using a for loop
  for (let i = 5; i >= 1; i--) {
    const p = document.createElement('p');
    p.textContent = `Countdown (for): ${i}`;
    countdownDisplay.appendChild(p);
  }
  // Using a while loop
  let j = 5;
  while (j >= 1) {
    const p = document.createElement('p');
    p.textContent = `Countdown (while): ${j}`;
    countdownDisplay.appendChild(p);
    j--;
  }
});

// Part 4: DOM Manipulation Interactions
// -------------------------------------
const colorBox = document.getElementById('colorBox');
colorBox.addEventListener('click', function() {
  colorBox.classList.toggle('active'); // toggles CSS class
});

const addItemBtn = document.getElementById('addItemBtn');
const itemList = document.getElementById('itemList');
let itemCount = 0;

addItemBtn.addEventListener('click', function() {
  itemCount++;
  const li = document.createElement('li');
  li.textContent = `Item ${itemCount}`;
  itemList.appendChild(li);
});
