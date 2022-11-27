function analyzeArray(array) {
  return {
    length: array.length,
    min: Math.min(...array),
    max: Math.max(...array),
    average: array.reduce((prev, cur) => prev + cur, 0) / array.length,
  };
}

export { analyzeArray };
