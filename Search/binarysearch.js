function binarySearch(arr, x) {
  var left = 0,
    right = arr.length - 1;
  while (left <= right) {
    var middle = left + Math.floor((right - left) / 2);
    if (x > arr[middle]) left = middle + 1;
    else if (x < arr[middle]) right = middle - 1;
    else return middle;
  }
  return null;
}

function binarySearchRecurrive(arr, left, right, x) {
  if (left <= right) {
    var middle = left + Math.floor((right - left) / 2);
    if (x > arr[middle])
      return binarySearchRecurrive(arr, middle + 1, right, x);
    else if (x < arr[middle])
      return binarySearchRecurrive(arr, left, middle - 1, x);
    else return middle;
  } else {
    return null;
  }
}
var arr = [...Array(11).keys()].slice(1);

console.log(binarySearch(arr, 2));
console.log(binarySearch(arr, 9));
console.log(binarySearchRecurrive(arr, 0, arr.length, 9));
