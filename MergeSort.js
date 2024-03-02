// Function to merge two subarrays
async function merge(bars, l, m, r) {
    const n1 = m - l + 1;
    const n2 = r - m;
    const L = [];
    const R = [];
    for (let i = 0; i < n1; i++) {
        L[i] = bars[l + i];
    }
    for (let j = 0; j < n2; j++) {
        R[j] = bars[m + 1 + j];
    }
    let i = 0;
    let j = 0;
    let k = l;
    while (i < n1 && j < n2) {
        if (parseInt(L[i].style.height) <= parseInt(R[j].style.height)) {
            bars[k] = L[i];
            i++;
        } else {
            bars[k] = R[j];
            j++;
        }
        await new Promise(resolve => setTimeout(resolve, 100)); // Adjust delay as needed
        k++;
    }
    while (i < n1) {
        bars[k] = L[i];
        i++;
        k++;
    }
    while (j < n2) {
        bars[k] = R[j];
        j++;
        k++;
    }
}

// Merge Sort algorithm
async function mergeSort(bars, l, r) {
    if (l >= r) {
        return;
    }
    const m = Math.floor((l + r) / 2);
    await mergeSort(bars, l, m);
    await mergeSort(bars, m + 1, r);
    await merge(bars, l, m, r);
}

// Add event listener to Merge Sort button
const mergeSortBtn = document.getElementById('mergeSortBtn');
mergeSortBtn.addEventListener('click', async function () {
    const bars = document.querySelectorAll('.bar');
    const n = bars.length;
    await mergeSort(bars, 0, n - 1);
});
