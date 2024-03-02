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

// Insertion Sort algorithm
async function insertionSort() {
    const bars = document.querySelectorAll('.bar');
    const n = bars.length;
    for (let i = 1; i < n; i++) {
        let key = parseInt(bars[i].style.height);
        let j = i - 1;
        bars[i].style.backgroundColor = 'red'; // Highlight current bar being inserted
        await new Promise(resolve => setTimeout(resolve, 100)); // Delay for visualization
        while (j >= 0 && parseInt(bars[j].style.height) > key) {
            await swap(bars[j], bars[j + 1]); // Swap bars
            bars[j].style.backgroundColor = '#007bff'; // Restore color
            j--;
        }
        bars[j + 1].style.height = `${key}px`; // Move key to correct position
        bars[i].style.backgroundColor = '#007bff'; // Restore color
    }
}

// Add event listener to Insertion Sort button
const insertionSortBtn = document.getElementById('insertionSortBtn');
insertionSortBtn.addEventListener('click', insertionSort);
