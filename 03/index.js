const fs = require("fs");

const text = fs.readFileSync("input.txt", { encoding: "utf8" });

const rows = text.split("\n");
const grid = rows.map((row) => row.split(""));

function traverse(offsetX = 3, offsetY = 1) {
  let x = 0;
  let y = 0;

  let output = {};

  while (y < grid.length) {
    y += offsetY;
    if (grid[y]) {
      x = (x + offsetX) % grid[y].length;
      const val = grid[y][x];
      if (!output[val]) output[val] = 0;
      output[val] += 1;
    }
  }

  return output;
}

console.log(traverse());

const inputs = [
  [1, 1],
  [3, 1],
  [5, 1],
  [7, 1],
  [1, 2],
];

let outputs = [];
for (let [x, y] of inputs) {
  outputs.push(traverse(x, y));
}

console.log(
  outputs.reduce(
    (numberOfTrees, currentOutput) => numberOfTrees * currentOutput["#"],
    1
  )
);
