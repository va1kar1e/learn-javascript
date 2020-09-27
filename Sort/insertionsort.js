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

x = [15, 1, 8, 12, 4, 14, 3, 2, 10];
console.log(x);
console.log(insertionSort(x));
