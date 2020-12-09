const fs = require("fs");
const { parseTicket } = require("./parse-ticket");
const text = fs.readFileSync("input.txt", { encoding: "utf8" });

const tickets = text.split(/\n/);

const getMaxId = (tickets) => {
  let max = 0;
  for (const ticket of tickets) {
    if (ticket.length > 0) {
      const { id } = parseTicket(ticket);
      max = Math.max(max, id);
    }
  }
  return max;
};

// console.log(getMaxId(tickets));

const findMySeat = (tickets) => {
  const allIds = new Set(tickets.map((rawTicket) => parseTicket(rawTicket).id));
  const seatsWithMissingNeighbours = new Set();
  for (const id of allIds.values()) {
    if (!allIds.has(id + 1) || !allIds.has(id - 1)) {
      seatsWithMissingNeighbours.add(id);
    }
  }
};

findMySeat(tickets);
