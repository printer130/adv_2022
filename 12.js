function selectSleigh(distance, sleighs) {
  let str = null

  for (let i = sleighs.length - 1; i >= 0; i--) {
    if (sleighs[i].consumption * distance <= 20) {
      str = sleighs[i].name
      break
    }
  }
  return str
}

const distance = 30
const sleighs = [
  { name: "Dasher", consumption: 0.3 },
  { name: "Dancer", consumption: 0.5 },
  { name: "Rudolph", consumption: 0.7 },
  { name: "Midu", consumption: 1 }
]

//selectSleigh(distance, sleighs) // => "Dancer"
selectSleigh(50, [
  { name: 'Pedrosillano', consumption: 1 },
  { name: 'SamarJaffal', consumption: 2 },
  { name: 'marcospage', consumption: 3 }
])
