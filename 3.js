function distributeGifts(packOfGifts, reindeers) {
  const count_letters = list => {
    let w = 0
    for (s of list) {
      for (letter of s) {
        w += 1
      }
    }
    return w
  }

  return Math.floor((count_letters(reindeers) * 2) / count_letters(packOfGifts))
}

const packOfGifts = ["book", "doll", "ball"]
const reindeers = ["dasher", "dancer"]

const res = distributeGifts(packOfGifts, reindeers)
console.log(res)