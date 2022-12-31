function sortToys(toys, positions) {
  const res = []

  for (let i in toys) {
    res.push([positions[i], toys[i]])
  }


  console.log(res)
  const sorted = res.sort((a, b) => a[0] - b[0])
  console.log({ sorted })
  return []
}

const toys = ['ball', 'doll', 'car', 'puzzle']
const positions = [2, 3, 1, 0]

sortToys(toys, positions)
// ['puzzle', 'car', 'ball', 'doll']
/* 
const moreToys = ['pc', 'xbox', 'ps4', 'switch', 'nintendo']
const morePositions = [8, 6, 5, 7, 9]

sortToys(moreToys, morePositions)
// ['ps4', 'xbox', 'switch', 'pc', 'nintendo']
 */