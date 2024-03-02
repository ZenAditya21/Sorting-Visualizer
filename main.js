document.addEventListener('DOMContentLoaded', function () {
  const barsContainer = document.getElementById('bars-container');
  const generateArrayBtn = document.getElementById('generateArrayBtn');

  // Function to generate random array and create bars
  function createBars() {
      barsContainer.innerHTML = ''; // Clear previous bars
      const array = [];
      for (let i = 0; i < 100; i++) {
          array.push(Math.floor(Math.random() * 100)); // Random number between 0 and 100
      }
      array.forEach(height => {
          const bar = document.createElement('div');
          bar.classList.add('bar');
          bar.style.height = `${height * 3}px`; // Scale the height for visualization
          barsContainer.appendChild(bar);
      });
  }

  // Call createBars() initially
  createBars();

  // Add event listener to generate array button
  generateArrayBtn.addEventListener('click', createBars);
});
// Function to swap two bars
async function swap(el1, el2) {
  const style1 = window.getComputedStyle(el1);
  const style2 = window.getComputedStyle(el2);
  const transform1 = style1.getPropertyValue("height");
  const transform2 = style2.getPropertyValue("height");
  el1.style.height = transform2;
  el2.style.height = transform1;
  await new Promise(resolve => setTimeout(resolve, 100)); // Adjust delay as needed
}

// Function to create bars based on the number of bars input
function createBars() {
  const barsContainer = document.getElementById('bars-container');
  barsContainer.innerHTML = ''; // Clear previous bars
  const arraySize = document.getElementById('arr_sz').value;
  const array = [];
  for (let i = 0; i < arraySize; i++) {
      array.push(Math.floor(Math.random() * 100) + 1); // Random number between 1 and 100
  }
  array.forEach(height => {
      const bar = document.createElement('div');
      bar.classList.add('bar');
      bar.style.height = `${height * 3}px`; // Scale the height for visualization
      barsContainer.appendChild(bar);
  });
}

// Event listener for number of bars input
const arrSizeInput = document.getElementById('arr_sz');
arrSizeInput.addEventListener('input', createBars);

// Event listener for speed input
const speedInput = document.getElementById('speed');
speedInput.addEventListener('input', function() {
  // Update delay time for sorting algorithms based on speed input
  delayTime = 100 - parseInt(speedInput.value);
});
