// Program to determine whether a number is even or not

function isEven(x)
{
  if (x < 0)
    x = -x;
  if (x%2 === 0)
    return true;
  else
    return false;
}

console.log(isEven(50));
// → true
console.log(isEven(75));
// → false
console.log(isEven(-1));
// → ??
