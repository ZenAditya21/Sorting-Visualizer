async function bubbleSort() {
    const bars = document.querySelectorAll('.bar');
    for (let i = 0; i < bars.length; i++) {
        for (let j = 0; j < bars.length - i - 1; j++) {
            // Change color of bars being compared
            bars[j].style.backgroundColor = 'yellow';
            bars[j + 1].style.backgroundColor = 'red';
            await new Promise(resolve => setTimeout(resolve, 100)); // Delay for visualization
            if (parseInt(bars[j].style.height) > parseInt(bars[j + 1].style.height)) {
                await swap(bars[j], bars[j + 1]);
            }
            // Restore default color after comparison
            bars[j].style.backgroundColor = '#007bff';
            bars[j + 1].style.backgroundColor = '#007bff';
        }
        // Change color of bar at correct position
        bars[bars.length - i - 1].style.backgroundColor = 'green';
    }
  }
  
  // Add event listener to Bubble Sort button
  const bubbleSortBtn = document.getElementById('bubbleSortBtn');
  bubbleSortBtn.addEventListener('click', bubbleSort);
  