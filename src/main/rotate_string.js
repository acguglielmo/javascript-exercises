const loop = require("../main/loop");

function rotate(string, times) {
  loop(times).map(() => rotateOneTime());

  return string;

  function rotateOneTime() {
    const lastCharacterIndex = string.length - 1;
    const lastCharacter = string.charAt(lastCharacterIndex);
    string = lastCharacter + string.substring(0, lastCharacterIndex);
  }
}

module.exports = rotate;
