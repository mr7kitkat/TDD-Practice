function caesarCipher(input) {
  return input
    .split("")
    .map((letter, idx) => {
      if (charIsLetter(letter)) {
        const asciiCode = input.charCodeAt(idx);

        if (isSmallLetter(letter)) {
          let returnIdx = (asciiCode + 1) % 122;
          returnIdx = returnIdx == 0 ? returnIdx + 122 : returnIdx;
          const code = returnIdx <= 96 ? returnIdx + 96 : returnIdx;
          return String.fromCharCode(code);
        } else {
          let returnIdx = (asciiCode + 1) % 90;
          returnIdx = returnIdx == 0 ? returnIdx + 90 : returnIdx;

          const code = returnIdx <= 64 ? returnIdx + 64 : returnIdx;
          return String.fromCharCode(code);
        }
      }
      return letter;
    })
    .join("");
}

function isSmallLetter(letter) {
  let pattern = /[a-z]/;
  return pattern.test(letter);
}

function isCapitalLetter(letter) {
  let pattern = /[A-Z]/;
  return pattern.test(letter);
}

function charIsLetter(char) {
  if (typeof char !== "string") {
    return false;
  }

  return /^[a-zA-Z]/.test(char);
}

export { caesarCipher };
