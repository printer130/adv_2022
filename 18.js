
function dryNumber(dry, numbers) {
  const res = []
  for (let i = 1; i <= numbers; i++) {
    const includes = i.toString().includes(dry)
    if (includes) res.push(i)
  }
  return res
}

dryNumber(1, 15) // [1, 10, 11, 12, 13, 14, 15]
console.log(numbers.toString().includes(1))