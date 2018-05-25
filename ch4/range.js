// Program to find the range of an array.

function range(start, end, step){
  let list = [];

  if (step == null){
    if (start < end)
      step = 1;
    else
      step = -1;
  }

  if (start > end){
    for (let x = start; x >= end; x += step)
    list.push(x);
  }

  else if (start < end){
    for (let x = start; x <= end; x += step)
      list.push(x);
  }
  return list;
}

function sum(list){
 let total = 0;

  for(let x = 0; x < list.length; x++){
    total += list[x];
  }
  return total;
}


console.log(range(1, 10));
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(5, 2, -1));
// → [5, 4, 3, 2]
console.log(sum(range(1, 10)));
// → 55
