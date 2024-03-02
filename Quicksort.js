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

// Quick Sort algorithm
async function quickSort(bars, low, high) {
    if (low < high) {
        const pi = await partition(bars, low, high);
        await quickSort(bars, low, pi - 1); // Recursively sort elements before partition
        await quickSort(bars, pi + 1, high); // Recursively sort elements after partition
    }
}

// Function to partition the array and return the pivot index
async function partition(bars, low, high) {
    let pivot = parseInt(bars[high].style.height);
    let i = low - 1;
    for (let j = low; j < high; j++) {
        bars[j].style.backgroundColor = 'yellow'; // Highlight current partition
        await new Promise(resolve => setTimeout(resolve, 100)); // Delay for visualization
        if (parseInt(bars[j].style.height) < pivot) {
            i++;
            await swap(bars[i], bars[j]); // Swap bars
        }
        bars[j].style.backgroundColor = '#007bff'; // Restore color
    }
    await swap(bars[i + 1], bars[high]); // Swap pivot with correct position
    return i + 1;
}

// Add event listener to Quick Sort button
const quickSortBtn = document.getElementById('quickSortBtn');
quickSortBtn.addEventListener('click', async function () {
    const bars = document.querySelectorAll('.bar');
    const n = bars.length;
    await quickSort(bars, 0, n - 1);
});
