function rotate(string, times) {
  for (let i = 0; i < times; i++) {
    let stringLenght = string.length;
    const lastCharacterIndex = stringLenght - 1;
    let lastCharacter = string.charAt(lastCharacterIndex);
    string = lastCharacter + string.substring(0, lastCharacterIndex);
  }

  return string;
}

module.exports = rotate;
