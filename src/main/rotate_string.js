function rotate(string, times) {
  loop(times).map(() => rotateOneTime());

  return string;

  function rotateOneTime() {
    const lastCharacterIndex = string.length - 1;
    const lastCharacter = string.charAt(lastCharacterIndex);
    string = lastCharacter + string.substring(0, lastCharacterIndex);
  }

  function loop(times) {
    return [...Array(times).keys()];
  }
}

module.exports = rotate;
