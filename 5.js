function getMaxGifts(giftsCities, maxGifts, maxCities) {
  const ordened_list = giftsCities.sort((a, b) => b - a)

  const result = ordened_list.reduce((total, num) => {
    if (!maxCities || total + num > maxGifts || total + num === maxGifts - 1) {
      return total
    }
    maxCities -= 1
    return total += num
  }, 0)

  return result
}
/* function getMaxGifts(giftsCities, maxGifts, maxCities) {
  let clone_gifts_cities = giftsCities.slice()
  const max_packs = Math.max(...giftsCities)
  let result = []

  if (max_packs > maxGifts) {
    console.log("SUPER BAD")
    return 0
  }

  for (let i = 0; i < giftsCities.length; i++) {
    const max_city_pack = Math.max(...clone_gifts_cities)
    const max_city_idx = clone_gifts_cities.indexOf(max_city_pack)

    let sum = result.reduce((acc, i) => acc + i, 0)
    console.log('___SUM___', sum)
    if (max_city_pack < maxGifts & sum <= maxGifts) {
      result.push(max_city_pack)
      console.log("[result]", result)
    }
    if (max_city_pack + sum >= maxGifts) {
      console.log('POP')
      result.pop()
    }
    if (giftsCities.length - 1 == i) {
      console.log("ELSE IF")
      if (max_city_pack + sum <= maxGifts) {
        console.log("AKI")
        result.push(max_city_pack)
      }
    }
    clone_gifts_cities.splice(max_city_idx, 1)
    console.log("max_city_pack:", max_city_pack, i)
  }

  console.log("clone_gifts_cities:", clone_gifts_cities)
  console.table({ result, maxCities })
  return result.reduce((acc, i) => {
    console.log("ACC", acc)
    if (acc + i > maxGifts) {
      return acc
    } else {
      return acc + i
    }
  }, 0)
} */

const giftsCities = [12, 3, 11, 5, 7]
const maxGifts = 20
const maxCities = 3

// la suma más alta de regalos a repartir
// visitando un máximo de 3 ciudades
// es de 20: [12, 3, 5]

// la suma más alta sería [12, 7, 11]
// pero excede el límite de 20 regalos y tendría
// que dejar alguna ciudad a medias.

console.log(getMaxGifts([12, 3, 11, 5, 7], 20, 3)) // 20
//console.log(getMaxGifts([50], 15, 1)) // 0
//console.log(getMaxGifts([50], 100, 1)) // 50
//console.log(getMaxGifts([50, 70], 100, 1)) // 70
//console.log(getMaxGifts([50, 70, 30], 100, 2)) // 100
//console.log(getMaxGifts([50, 70, 30], 100, 3)) // 100
//console.log(getMaxGifts([50, 70, 30], 100, 4)) // 100
