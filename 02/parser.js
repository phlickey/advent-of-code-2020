const fs = require("fs");

const text = fs.readFileSync("input.txt", { encoding: "utf8" });

const rows = text.split("\n");

const validatePassword = ({ password, letter, min, max }) => {
  const count = password.split("").filter((char) => char === letter).length;
  return count >= min && count <= max;
};

const newValidatePassword = ({ password, letter, min, max }) => {
  const chars = password.split("");
  const minChar = chars[min - 1];
  const maxChar = chars[max - 1];
  if (minChar === maxChar) return false;
  return maxChar === letter || minChar === letter;
};

let countSuccess = 0;
let countFailure = 0;
for (let row of rows) {
  const [minMax, letterRaw, password] = row.split(/\s/);
  if (minMax && letterRaw && password) {
    const [minStr, maxStr] = minMax.split("-");
    const min = parseInt(minStr);
    const max = parseInt(maxStr);
    const letter = letterRaw.replace(":", "");

    const isValid = newValidatePassword({ password, letter, min, max });
    if (isValid) {
      countSuccess++;
    } else {
      countFailure++;
    }
  }
}
console.log({ countSuccess, countFailure, total: rows.length });
