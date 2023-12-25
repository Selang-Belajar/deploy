// use hash and compare from bcrypt
const { compare, hashSync } = require("bcrypt");

const salt = 10;

function generateHash(password) {
  return hashSync(password, salt);
}

function compareHash(password, hash) {
  return compare(password, hash);
}

module.exports = { generateHash, compareHash };
