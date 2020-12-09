const countUnanimousAnswers = (group) => {
  const sortedResponses = group
    .split("\n")
    .filter((str) => str.length !== 0)
    .sort((a, b) => a.length - b.length);
  const shortestResponse = sortedResponses[0];
  const potentialAnswers = shortestResponse.split("");
  const unanimousAnswers = [];

  for (let potentialAnswer of potentialAnswers) {
    let isUnanimous = true;
    for (let i = 1; i < sortedResponses.length; i++) {
      isUnanimous =
        isUnanimous && sortedResponses[i].split("").includes(potentialAnswer);
      if (!isUnanimous) break;
    }
    if (isUnanimous) unanimousAnswers.push(potentialAnswer);
  }
  return unanimousAnswers.length;
};

module.exports = {
  countUnanimousAnswers,
};
