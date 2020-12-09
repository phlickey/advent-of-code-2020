// @ts-nocheck
const { expect } = require("@jest/globals");
const { parseTicket } = require("./parse-ticket");

describe("ticket parser", () => {
  it("returns correct input for known data", () => {
    const ticket1 = parseTicket("BFFFBBFRRR");
    const ticket2 = parseTicket("FFFBBBFRRR");
    const ticket3 = parseTicket("BBFFBBFRLL");

    expect(ticket1).toHaveProperty("row", 70);
    expect(ticket1).toHaveProperty("column", 7);
    expect(ticket1).toHaveProperty("id", 567);

    expect(ticket2).toHaveProperty("row", 14);
    expect(ticket2).toHaveProperty("column", 7);
    expect(ticket2).toHaveProperty("id", 119);

    expect(ticket3).toHaveProperty("row", 102);
    expect(ticket3).toHaveProperty("column", 4);
    expect(ticket3).toHaveProperty("id", 820);
  });
});
