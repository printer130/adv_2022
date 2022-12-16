function checkPart(part) {
  for (let i = 0; i < part.length; i++) {
    let str = ''

    for (let j = 0; j < part.length; j++) {
      if (i !== j) {
        str = str + part[j]
      }
    }

    const reverse = str.split('').reverse().join('')

    if (str === reverse || part === reverse) {
      return true
    }
  }

  return false
}

console.log(checkPart("uwu"))
