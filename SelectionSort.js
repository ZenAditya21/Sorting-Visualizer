async function selectionSort() {
    const bars = document.querySelectorAll('.bar');
    const n = bars.length;
    for (let i = 0; i < n - 1; i++) {
        let minIndex = i;
        bars[i].style.backgroundColor = 'red'; // Highlight current bar being compared
        for (let j = i + 1; j < n; j++) {
            bars[j].style.backgroundColor = 'yellow'; // Highlight next bar being compared
            await new Promise(resolve => setTimeout(resolve, 100)); // Delay for visualization
            if (parseInt(bars[j].style.height) < parseInt(bars[minIndex].style.height)) {
                if (minIndex !== i) {
                    bars[minIndex].style.backgroundColor = '#007bff'; // Restore color
                }
                minIndex = j;
            } else {
                bars[j].style.backgroundColor = '#007bff'; // Restore color
            }
        }
        await swap(bars[minIndex], bars[i]); // Swap the minimum element with the first unsorted element
        bars[i].style.backgroundColor = 'green'; // Mark sorted element
    }
}

// Add event listener to Selection Sort button
const selectionSortBtn = document.getElementById('selectionSortBtn');
selectionSortBtn.addEventListener('click', selectionSort);