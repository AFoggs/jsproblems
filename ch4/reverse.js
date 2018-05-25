// Program to reverse an array

function reverseArray(list){

let last = list.length - 1;
let swapStart = 0;
let swapEnd = 0;
let middle = -1;
let newList = [];

  if (list.length % 2 == 1) {
    middle = Math.round(list.length/2);
  }


  for (let x = 0; x < list.length; x++){

    if (x == middle || x + 1 == last){
      newList = list;
      return newList;
    }

    swapStart = list[x];
    swapEnd = list[last];
    list[x] = swapEnd;
    list[last] = swapStart;

    last--;
  }
}

function reverseArrayInPlace(list){

let last = list.length - 1;
let swapStart = 0;
let swapEnd = 0;
let middle = -1;

  if (list.length % 2 == 1) {
    middle = Math.round(list.length/2);
  }


  for (let x = 0; x < list.length; x++){

    if (x == middle || x + 1 == last){
      arrayValue = list;
      return null;
    }

    swapStart = list[x];
    swapEnd = list[last];
    list[x] = swapEnd;
    list[last] = swapStart;

    last--;
  }
}



console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];
let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]
