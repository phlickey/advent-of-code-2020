const numericalValidator = (passport, key, min, max) => {
  try {
    const val = parseInt(passport[key]);
    return val >= min && val <= max;
  } catch {
    return false;
  }
};

const validateBirthYear = (passport) => {
  return numericalValidator(passport, "byr", 1920, 2002);
};

const validateIssueYear = (passport) => {
  return numericalValidator(passport, "iyr", 2010, 2020);
};

const validateExpiryYear = (passport) => {
  return numericalValidator(passport, "eyr", 2020, 2030);
};

const validateHeight = (passport) => {
  try {
    const height = passport.hgt;
    const unit = height.replace(/\d/g, "");
    const mag = parseFloat(height.replace(/[^\d]/g, ""));
    switch (unit) {
      case "in": {
        return mag >= 59 && mag <= 76;
      }
      case "cm": {
        return mag >= 150 && mag <= 193;
      }
      default: {
        return false;
      }
    }
  } catch {
    return false;
  }
};

const validateHair = (passport) => {
  const hair = passport.hcl;
  return !!hair.match(/^#[0-9a-f]{6}$/i);
};

const validEyes = ["amb", "blu", "brn", "gry", "grn", "hzl", "oth"];
const validateEyes = (passport) => {
  const eyeColour = passport.ecl;
  return validEyes.includes(eyeColour);
};

const validatePassportNumber = (passport) => {
  return !!passport.pid.match(/^\d{9}$/);
};

module.exports = {
  byr: validateBirthYear,
  iyr: validateIssueYear,
  eyr: validateExpiryYear,
  hgt: validateHeight,
  hcl: validateHair,
  ecl: validateEyes,
  pid: validatePassportNumber,
};
