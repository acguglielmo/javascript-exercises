function rotate(string, times) {
  for (let i = 0; i < times; i++) {
    rotateOneTime();
  }

  return string;

  function rotateOneTime() {
    const lastCharacterIndex = string.length - 1;
    const lastCharacter = string.charAt(lastCharacterIndex);
    string = lastCharacter + string.substring(0, lastCharacterIndex);
  }
}

module.exports = rotate;
