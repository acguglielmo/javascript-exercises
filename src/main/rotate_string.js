function rotate(string, times) {
  range().map(() => rotateOneTime());

  return string;

  function rotateOneTime() {
    const lastCharacterIndex = string.length - 1;
    const lastCharacter = string.charAt(lastCharacterIndex);
    string = lastCharacter + string.substring(0, lastCharacterIndex);
  }

  function range() {
    return [...Array(times).keys()];
  }
}

module.exports = rotate;
