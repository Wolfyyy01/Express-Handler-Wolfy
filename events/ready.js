const color = require("colors/safe");
const term = require("terminal-kit").terminal;

module.exports = function (text) {
  console.clear();
  term.bold.underline();
  term(color.rainbow(text));
};
