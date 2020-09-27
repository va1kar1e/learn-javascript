function mergeSort(arr) {
  if (arr.length > 1) {
    var mid = Math.floor(arr.length / 2), // Finding the middle of the array
      left = arr.slice(0, mid), // Dividing the array elements
      right = arr.splice(mid); // into 2 halves

    mergeSort(left); // Sorting the first half
    mergeSort(right); // Sorting the second half

    var i = 0,
      j = 0,
      k = 0;

    // Copy data to temp arrays L[] and R[]
    for (; i < left.length && j < right.length; k++) {
      if (left[i] < right[j]) {
        arr[k] = left[i];
        i += 1;
      } else {
        arr[k] = right[j];
        j += 1;
      }
    }
    // Checking if any element still left in the left array and right array
    while (i < left.length) {
      arr[k] = left[i];
      i += 1;
      k += 1;
    }
    while (j < right.length) {
      arr[k] = right[j];
      j += 1;
      k += 1;
    }
  }
  return null;
}

arr = [12, 11, 13, 5, 6, 7, 9, 1, 15, 8, 10, 13];
console.log(arr);
mergeSort(arr);
console.log(arr);
