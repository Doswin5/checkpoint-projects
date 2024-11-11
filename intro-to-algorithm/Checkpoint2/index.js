function insertionSort(arr) {
  // Start from the second element (index 1) as the first element is trivially sorted
  for (let i = 1; i < arr.length; i++) {
    // Select the element at index i to be placed correctly in the sorted part of the array
    let current = arr[i];

    // Initialize j as the last index of the sorted portion of the array
    let j = i - 1;

    // Shift elements of the sorted portion of the array to the right until the correct spot is found for arr[i]
    while (j >= 0 && arr[j] > current) {
      arr[j + 1] = arr[j]; // Move the element one position to the right
      j--;
    }

    // Place the current element at its correct position in the sorted portion
    arr[j + 1] = current;
  }

  return arr; // Return the sorted array
}

// Example usage:
const array = [29, 10, 14, 37, 13];
console.log("Original array:", array);
const sortedArray = insertionSort(array);
console.log("Sorted array:", sortedArray);
