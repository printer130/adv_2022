function decorateTree(base) {
  let res = [base]
  let aux = 0
  const dicc = {
    "BP": "R ",
    "PB": "R ",
    "RR": "R ",
    "BR": "P ",
    "RB": "P ",
    "PP": "P ",
    "RP": "B ",
    "BB": "B ",
    "PR": "B "
  }

  for (let j = aux; j < base.split(' ').length - 1; j++) {
    let line = ''
    const new_line = res[aux].split(' ')
    for (let i = aux; i < new_line.length - 1; i++) {
      line += `${dicc[`${new_line[i] + new_line[i + 1]}`]}`
    }
    res.unshift(line.trimEnd())
  }
  console.log(res)
  return res
}
decorateTree('B P R P')
// [
// 'R',
// 'P B',
// 'R B B',
// 'B P R P'
// ]

/* P     R     B     P
   P P   B P   R P   B R */