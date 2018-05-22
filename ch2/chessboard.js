//Program to print chess board of any size

let size = prompt("Please enter an even Number");
let board = "";
for (row = 1; row <= size; row++)
{
  for (x = 1; x <= size/2; x++)
	{
      if (row%2 === 1)
        board += " #";
      else if (row%2 === 0)
        board += "# ";
    }
  console.log(board)
  board = "";
}
