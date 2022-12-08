const gifts = ['book', 'game', 'socks']

function wrapping(gifts) {
  let list = []
  for (let i in gifts) {
    let text = ""
    let toRange = gifts[i].length + 2
    for (let j = 0; j < toRange; j++) {
      text += "*"
    }
    list[i] = `${text}\n*${gifts[i]}*\n${text}`
  }
  return list
}


const wrapped = wrapping(gifts)
console.log(wrapped)