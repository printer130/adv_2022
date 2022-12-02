const gifts = ['book', 'game', 'socks']

function wrapping(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    let text = ""
    const len = gifts[i].length + 2
    const s = gifts[i]
    for (let j = 0; j < len; j++) {
      text += "*"
    }
    gifts[i] = `${text}\n*${s}*\n${text}`
  }
  return gifts
}


const wrapped = wrapping(gifts)
console.log(wrapped)