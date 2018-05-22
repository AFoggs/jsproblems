// Program to count Bs and specific characters

function countBs(string){
  let amount = 0;
  for(x = 0; x < string.length; x++)
  {
    if (string[x] === "B")
      amount += 1;
  }
  return amount;
}

function countChar(string, char){
  let amount = 0;
  for(x = 0; x < string.length; x++)
  {
    if (string[x] == char)
      amount += 1;
  }
  return amount;
}


console.log(countBs("BBC"));
// → 2
console.log(countChar("kakkerlak", "k"));
// → 4
