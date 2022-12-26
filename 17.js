function carryGifts(gifts, maxWeight) {
  let cage = ''
  let result = []

  for (let i = 0; i < gifts.length - 1; i++) {
    if (gifts.every(gift => gift.length > maxWeight)) return []
    let tempGifts = []
    let separateGifts = []
    let giftWeight = 0

    gifts.forEach(gift => {
      if (giftWeight + gift.length > maxWeight) {
        separateGifts.push(tempGifts.join(" "))
        giftWeight = 0
        tempGifts = []
      }

      giftWeight += gift.length
      tempGifts.push(gift)
    })

    separateGifts.push(tempGifts.join(" "))

    return separateGifts
    // SAVE
    /* else if (cage.length + next_str.length < maxWeight + spaces) {
      cage = curr_str + " " + next_str
      console.log({ cage })
      spaces++
      i++
      // cage = ''
      // result.push(cage.trim())
    } */
  }

  console.log({ result, cage })
  return []
}


// carryGifts(['toy', 'gamme', 'toy', 'bike'], 6)
// ['toy', 'gamme', 'toy', 'bike']
// en cada saco se puede llevar 6kg
// cada saco sólo puede llevar un regalo
// fíjate que no se puede llevar 'toy toy' en un saco
// porque no está uno al lado del otro

/* 
carryGifts(['game', 'bike', 'book', 'toy'], 7)
// ['game', 'bike', 'book toy']
// en cada saco se puede llevar 7kg
// el primer saco sólo puede llevar 'game' que pesa 4kg
// el segundo saco sólo puede llevar 'bike' que pesa 4kg
// el tercer saco lleva 'book' y 'toy' que pesan 4kg y 3kg

 */
//carryGifts(['game', 'bike', 'book', 'toy'], 4)
carryGifts(['game', 'bike', 'book', 'toy'], 10)
