/* const reindeerTypes = [
  { type: 'Nuclear', weightCapacity: 50 },
  { type: 'Electric', weightCapacity: 10 },
  { type: 'Gasoline', weightCapacity: 5 },
  { type: 'Diesel', weightCapacity: 1 }
]
console.log(reindeerTypes)

for (let { type, weightCapacity } of reindeerTypes.sort((a, b) => a.weightCapacity - b.weightCapacity)) {
  console.log({ type, weightCapacity })
}
console.log(reindeerTypes)

 */
/* 

console.log(reindeerTypes.sort((a, b) => a.weightCapacity - b.weightCapacity)) */
const arr = ["a", "b", "c", "d"]
const test = []

for (let v of arr) {
  test[v] = 0
}

console.log(test)