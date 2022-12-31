function howManyReindeers(reindeerTypes, gifts) {
  const reversed_reindeers = reindeerTypes
    .sort((a, b) => a.weightCapacity - b.weightCapacity)

  function Reducer({ actual_wei, weight, reversed_reindeers, reindeers, country }) {
    if (actual_wei === weight) return {
      country,
      reindeers: Object.entries(reindeers)
        .map(([type, num]) => ({
          type,
          num
        })).reverse()
    }
    reversed_reindeers.forEach(({ type, weightCapacity }) => {
      (typeof reindeers[type] === 'undefined'
        && weight > weightCapacity)
        && (reindeers[type] = 0)

      if (actual_wei + weightCapacity <= weight) {
        actual_wei += weightCapacity
        reindeers[type] += 1
      }
    })
    const recursive = Reducer({
      actual_wei,
      weight,
      reversed_reindeers,
      reindeers,
      country
    })

    return recursive
  }

  const res = gifts.map(({ country, weight }) => {
    let reindeers = {}
    let actual_wei = 0

    const q = Reducer({ actual_wei, weight, reversed_reindeers, reindeers, country })
    console.log({ q, reindeers })

    let final_obj = {
      country,
      reindeers: Object.entries(reindeers)
        .map(([type, num]) => ({
          type,
          num
        })).reverse()
    }

    return final_obj
  })

  return res
}


const reindeerTypes = [
  { type: 'Nuclear', weightCapacity: 50 },
  { type: 'Electric', weightCapacity: 10 },
  { type: 'Gasoline', weightCapacity: 5 },
  { type: 'Diesel', weightCapacity: 1 }
]

const gifts = [
  { country: 'Spain', weight: 30 },
  { country: 'France', weight: 17 },
  { country: 'Italy', weight: 50 }
]

howManyReindeers(reindeerTypes, gifts)

// [{
//   country: 'Spain',
//   reindeers: [
//     { type: 'Electric', num: 1 },
//     { type: 'Gasoline', num: 3 },
//     { type: 'Diesel', num: 5 }
//   ]
// }, {
//   country: 'France',
//   reindeers: [
//     { type: 'Electric', num: 1 },
//     { type: 'Gasoline', num: 1 },
//     { type: 'Diesel', num: 2 }
//   ]
//  }, {
//   country: 'Italy',
//   reindeers: [
//     { type: 'Electric', num: 3 },
//     { type: 'Gasoline', num: 3 },
//     { type: 'Diesel', num: 5 }
//   ]
// }]
