function createCube(size) {
  let str1 = ''
  let str2 = ''
  const s1 = '/'
  const s2 = '_'
  const s3 = '\\'

  for (let i = size; i > 0; i--) {
    str1 += ' '.repeat(i - 1)
    str1 += `${s1 + s3}`.repeat(size - i + 1)
    str1 += `${s2 + s3}`.repeat(size) + '\n'

    str2 += ' '.repeat(size - i)
    str2 += `${s3 + s1}`.repeat(i) + `${s2 + s1}`.repeat(size) + '\n'
  }

  return `${str1 + str2}`.slice(0, -1)
}
console.log(createCube(4))