
function countTime(leds) {
  leds = leds.join("").split('1')
  leds[0] = leds[0] + leds[leds.length - 1]
  const newArr = leds.map(led => led.length)
  return Math.max(...leds.map(led => led.length)) * 7
}
//const leds = [1, 0, 0, 1, 0, 0]
//const leds = [0, 0, 1, 0, 0]
//const leds = [0, 1, 1, 0, 1]
//const leds = [0, 0, 0, 1]
//console.log(leds.at(0) === 1)
//console.log(countTime(leds))
// 7 segundos ya que en el primer cambio
// todas las luces se encendieron
// 0s: [0, 1, 1, 0, 1]
// 7s: [1, 1, 1, 1, 1]