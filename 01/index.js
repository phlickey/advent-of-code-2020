const input = require("./input.json");

// dumb solution:
for (let num1 of input) {
  for (let num2 of input) {
    for (let num3 of input) {
      if (num1 + num2 + num3 === 2020) {
        console.log({ num1, num2, num3, ans: num1 * num2 * num3 });
      }
    }
  }
}
