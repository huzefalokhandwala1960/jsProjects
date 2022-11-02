function palindrome(str) {
  str = str.toLowerCase().replace(/[\W_]/g, "");
  for (var h = 0, l = str.length - 1; h < l / 2; h++) {
    if (str[h] !== str[l - h]) {
      console.log("not palindrome")
      return false;
    }
  }
  console.log("palindrome")
  return true;
}

palindrome("eyes");