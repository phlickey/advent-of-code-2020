const fs = require("fs");

const text = fs.readFileSync("input.txt", { encoding: "utf8" });

const groups = text.split(/\n\n/);

const countAnswers = (group) => {
  const answers = group.replace(/[^a-z]/gi, "");
  const uniqueAnswers = new Set(answers.split(""));
  return uniqueAnswers.size;
};

const countAllUniqueAnswers = groups
  .map(countAnswers)
  .reduce((total, count) => total + count, 0);

console.log(countAllUniqueAnswers);
