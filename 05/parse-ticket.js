const parseBSPString = (input, upChar, downChar) => {
  let min = 0;
  let max = Math.pow(2, input.length);
  let arr = input.split("");
  let output;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === downChar) {
      max = max - (max - min) / 2;
      if (i === arr.length - 1) output = min;
    } else if (arr[i] === upChar) {
      min = min + (max - min) / 2;
      if (i === arr.length - 1) output = min;
    }
    //   console.log({ min, max, output, char: arr[i] });
  }
  return output;
};
const getId = (row, column) => row * 8 + column;

const parseTicket = (ticket) => {
  const rowBSPString = ticket.replace(/[^BF]+/gi, "");
  const colBSPString = ticket.replace(/[^LR]+/gi, "");
  const row = parseBSPString(rowBSPString, "B", "F");
  const column = parseBSPString(colBSPString, "R", "L");
  const id = getId(row, column);
  return { column, row, id };
};

module.exports = { parseTicket };
