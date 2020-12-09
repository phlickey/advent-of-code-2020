const fs = require("fs");
const validations = require("./validations");
const text = fs.readFileSync("input.txt", { encoding: "utf8" });

const passportsRaw = text.split(/\n\n/); // double new line to find blank lines

const passportsSplit = passportsRaw.map((passportText) =>
  passportText.split(/\s/)
);

const passportMaps = passportsSplit.map((keyValueStrings) => {
  return keyValueStrings.reduce((map, keyValueString, idx) => {
    const [key, value] = keyValueString.split(":");
    return {
      ...map,
      [key]: value,
    };
  }, {});
});

const requiredKeys = ["byr", "iyr", "eyr", "hgt", "hcl", "ecl", "pid"];

const validPassports = passportMaps.filter((passport) => {
  let isValid = true;
  const passportKeys = Object.keys(passport);
  for (let requiredKey of requiredKeys) {
    isValid =
      isValid &&
      passportKeys.includes(requiredKey) &&
      validations[requiredKey](passport);
  }
  return isValid;
});

console.log(validPassports.length);
