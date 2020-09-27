function upcase(x) {
  if (x.length % 2 == 0) return x[0].toUpperCase() + x.slice(1);
  else return x.slice(0, x.length - 1) + x[x.length - 1].toUpperCase();
}

console.log(upcase("hello"));
console.log(upcase("good morning"));
