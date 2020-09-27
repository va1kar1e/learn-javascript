function linearSearch(arr, x) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === x) return i;
  }
  return null;
}

function linearSearchRecurrive(arr, i, x) {
  if (arr[i] === x) {
    return i;
  } else {
    return linearSearchRecurrive(arr, i + 1, x);
  }
  return null;
}

var arr = [...Array(11).keys()].slice(1);

console.log(arr);
console.log(linearSearch(arr, 6));
console.log(linearSearchRecurrive(arr, 0, 6));
