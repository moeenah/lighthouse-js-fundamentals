function lastIndexOf (array, num) {
  var i = 0;
  if (array.length == 0) {
    return (-1);
  }
  while (i < array.length) {
    if (array[i] === num) {
      var numb = i;
    }
    i = i + 1;
  }
  if (numb === undefined) {
    return (-1);
  }
  return numb;
}

console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 1), "=?", 3);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 2), "=?", 4);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 3), "=?", -1);
console.log(lastIndexOf([ 5, 5, 5 ], 5), "=?", 2);
console.log(lastIndexOf([], 3), "=?", -1);