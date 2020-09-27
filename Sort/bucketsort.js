function insertionSort(b) {
  for (var i = 0; i < b.length; i++) {
    up = b[i];
    j = i - 1;
    while (j >= 0 && b[j] > up) {
      b[j + 1] = b[j];
      j -= 1;
    }
    b[j + 1] = up;
  }
  return b;
}

function bucketSort(x) {
  buckets = 10; //making 10 buckets, each bucket's size is 0.1
  arr = [];
  //Put array elements in different buckets
  x.forEach((j) => {
    index = Math.floor(buckets * j);
    if (arr[index]) arr[index].push(j);
    else arr[index] = [j];
  });

  //Sort individual buckets --> choose insertionSort to sort them
  arr.forEach((j) => insertionSort(j));

  //concatenate the result
  return arr.filter(Boolean).join(",");
}

var x = [0.897, 0.565, 0.124, 0.665, 0.626, 0.343, 0.692, 0.219];
console.log(bucketSort(x));
