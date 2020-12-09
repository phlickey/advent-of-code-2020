const fs = require("fs");
const { parseTicket } = require("./parse-ticket");
const text = fs.readFileSync("input.txt", { encoding: "utf8" });

const tickets = text.split(/\n/);

let max = 0;

for (const ticket of tickets) {
  if (ticket.length > 0) {
    const { id } = parseTicket(ticket);

    max = Math.max(max, id);
  }
}
console.log(max);
