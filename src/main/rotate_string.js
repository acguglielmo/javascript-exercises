function rotate(string, times) {
  for (let i = 0; i < times; i++) {
    let stringLenght = string.length;
    let lastCharacter = string.charAt(stringLenght - 1);
    string = lastCharacter + string.substring(0, stringLenght - 1);
  }

  return string;
}

module.exports = rotate;
