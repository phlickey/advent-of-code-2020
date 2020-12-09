const { describe, expect, it } = require("@jest/globals");
const { countUnanimousAnswers } = require("./count-unanimous-answers");

const exampleInput = `abc

a
b
c

ab
ac

a
a
a
a

b`;

describe("part 02", () => {
  it("counts right", () => {
    const groups = exampleInput.split(/\n\n/);

    expect(countUnanimousAnswers(groups[0])).toBe(3);
    expect(countUnanimousAnswers(groups[1])).toBe(0);
    expect(countUnanimousAnswers(groups[2])).toBe(1);
    expect(countUnanimousAnswers(groups[3])).toBe(1);

    const answer = groups
      .map(countUnanimousAnswers)
      .reduce((total, cur) => total + cur, 0);
    expect(answer).toBe(6);
  });
});
