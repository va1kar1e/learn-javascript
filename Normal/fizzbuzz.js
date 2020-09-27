function fizzbuzz(x) {
  if (typeof x !== "number") return null;
  if (x % 3 == 0 && x % 5 == 0) return "fizzbuzz";
  else if (x % 3 == 0) return "fizz";
  else if (x % 5 == 0) return "buzz";
  else return x.toString();
}

function test(x) {
  return x;
}

console.log(fizzbuzz(-9));
console.log(fizzbuzz(-10));
console.log(fizzbuzz(-15));
console.log(fizzbuzz(0));
console.log(fizzbuzz(9));
console.log(fizzbuzz(10));
console.log(fizzbuzz(15));
console.log(fizzbuzz("15"));
console.log(fizzbuzz("A"));
console.log(fizzbuzz(true));
console.log(fizzbuzz(0x1));
console.log(fizzbuzz(4));
console.log(fizzbuzz(7));
console.log(fizzbuzz(test(0)));
console.log(fizzbuzz(test(7)));
console.log(fizzbuzz(test("7")));
