// Create a function maxProfit, which, given a list of stock
// prices for a given day, returns the maximum profit that
// could have been made by buying a stock at the given price
// and then selling the stock later on. For this purpose we
// are assuming an array of integers as input

// Start timer
const time = process.hrtime();

// Merge Sort Implementation (Recursion)
const mergeSort = unsortedArray => {
  // No need to sort the array if the array only has one element or empty
  if (unsortedArray.length <= 1) {
    return unsortedArray;
  }

  // In order to divide the array in half, we need to figure out the middle
  const middle = Math.floor(unsortedArray.length / 2);

  // This is where we will be dividing the array into left and right
  const left = unsortedArray.slice(0, middle);
  const right = unsortedArray.slice(middle);

  // Using recursion to combine the left and right
  return merge(mergeSort(left), mergeSort(right));
};

const merge = (left, right) => {
  const sorted = [];
  let indexL = 0,
    indexR = 0;
  while (indexL < left.length && indexR < right.length) {
    if (left[indexL] < right[indexR]) {
      sorted.push(left[indexL]);
      indexL++;
    } else {
      sorted.push(right[indexR]);
      indexR++;
    }
  }
  return sorted.concat(left.slice(indexL)).concat(right.slice(indexR));
};

// Test
let testStocks = [1, 3, 9, 7];
console.log(mergeSort(testStocks));

// End timer
console.log(process.hrtime(time));
