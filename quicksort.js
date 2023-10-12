

function partition(array, low, high) {
  const pivotIndex = high; // choose rightmost element as pivot
  let pivot = array[pivotIndex];
  let i = low;

  for (let j = low; j < high; j++) {
    if (array[j] <= pivot) {
      [array[i], array[j]] = [array[j], array[i]];
      i++;
    }
  }

  [array[i], array[high]] = [array[high], array[i]];
  return i;
}

function quicksort(array, low = 0, high = array.length - 1) {
  if (low < high) {
    const pivotIndex = partition(array, low, high);
    quicksort(array, low, pivotIndex - 1);
    quicksort(array, pivotIndex + 1, high);
  }

  return array;
}

// Test cases
const arr1 = [3, 2, 1, 4];
console.log(quicksort(arr1)); // Expected output: [1, 2, 3, 4]

const arr2 = [1, 2, 2, 3, 4];
console.log(quicksort(arr2)); // Expected output: [1, 2, 2, 3, 4]


function quicksort(array, low = 0, high = array.length - 1) {
 quicksort(array, low, high); // partion (9, 0, array.length - 1)
 partition(array, low, high); quicksort(array, low, pivotIndex - 1); quicksort(array, pivotIndex + 1, high); [array.length-1] = [array[high], array[pivotIndex]];

}
return [high = array.length - 1];


if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: [1, 2, 3, 4]");
  console.log(quicksort([3, 2, 1, 4]));

  console.log("");

  console.log("Expecting: [1, 2, 2, 3, 4]");
  console.log(quicksort([1, 2, 2, 3, 4]));
}

module.exports = quicksort;

// Please add your pseudocode to this file
// And a written explanation of your solution


if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: [1, 2, 3, 4]");
  console.log(quicksort([3, 2, 1, 4]));

  console.log("");

  console.log("Expecting: [1, 2, 2, 3, 4]");
  console.log(quicksort([1, 2, 2, 3, 4]));
}

module.exports = quicksort;

// Please add your pseudocode to this file

//Explanation:
//The partition () function correctly chooses the rightmost element as the pivot and partitions the array into two sub arrays. it uses two pointers (i and j) to iterate through the array and 
//Instructions
///1.CHoose the rightmost element as the pivot
//2, Declare a variable called pivotIndex and set it equal to high
//3, Iterate over the portion of the array that needs processing
//4, use a while loop to control the index, we only want to increment it
//5, if we encounter an element that's less than or equal to the pivot
//6, Swap it with the element just before the pivot, and then swap the pivot with that element(i.e. the pivot will now be at  it's original index -)
//7.Decrement the pivot Index, since the pivot has been moved to the left by one place
//8. if an element is equal to the pivot,leave it in place.
//9. return the pivot index
//Pseudocode
// In this code, partition is a helper function that takes an array, a low index, and a high index as parameters. It chooses the rightmost element as the pivot, partitions the array into two sub-arrays, and returns the final index of the pivot.

//The quicksort function is the main function that applies the quicksort algorithm. It takes an array, a low index, and a high index as parameters. It recursively sorts the sub-arrays by calling the partition function and then calling itself on the left and right sub-arrays.
///You can test the code with different arrays by calling quicksort and passing in the array, the low index (usually 0), and the high index (usually array.length - 1). The sorted array will be returned.
//swaps elements as necessary to olace them on the orrect side of the pivot.
//Lastly it swaps the pivot with the element as index i and returns i, which is the final index of the pivot after partitioning.
//The quicksort() function and recursively sorts the left and right sub-arrays. it uses the low and high indices to specify the range of the current sub-array being sorted. The base case is when low is less than high, and in that case,it performs the partitioning and recursive calls. Finally, this returns the sorted array.


// And a written explanation of your solution
