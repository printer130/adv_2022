function checkJump(heights) {
  const maxVal = Math.max(...heights)
  const indexValue = heights.indexOf(maxVal)
  const major = heights.slice(0, indexValue)
  const minor = heights.slice(indexValue + 1)
  const minorEval = minor.slice(1).every((item, idx) => item <= minor[idx])
  console.log(minorEval)
  const majorEval = major.slice(1).every((item, idx) => item >= major[idx])
  return major.length > 0 && minor.length > 0 && minorEval && majorEval
}
//const h = [1, 3, 8, 5, 2]
//const h = [1, 3, 2, 5, 4, 3, 2, 1] // false
//const heights = [1, 7, 3, 5]  // false
const heights = [1, 3, 5, 8, 5, 4, 3, 2]
console.log(checkJump(heights))