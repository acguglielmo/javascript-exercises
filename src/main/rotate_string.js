function rotate(string, times) {
  for (let i = 0; i < times; i++) {
    string = rotateOneTime(string);
  }

  return string;

  function rotateOneTime(string) {
    const stringLenght = string.length;
    const lastCharacterIndex = stringLenght - 1;
    const lastCharacter = string.charAt(lastCharacterIndex);
    return lastCharacter + string.substring(0, lastCharacterIndex);
  }
}

module.exports = rotate;
