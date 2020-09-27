function isNumberPalindrome(num) {
  var temp = num,
    rev = 0;
  while (num > 0) {
    dig = num % 10;
    rev = rev * 10 + dig;
    num = Math.floor(num / 10);
  }
  if (temp === rev) return true;
  else return false;
}

console.log(isNumberPalindrome(1234321));
console.log(isNumberPalindrome(12344321));
console.log(isNumberPalindrome(1234567));
