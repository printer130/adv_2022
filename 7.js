function getGiftsToRefill(a1, a2, a3) {
  let missing_gifts = {}

  const list = new Set([...a1, ...a2, ...a3])

  list.forEach(s => {
    missing_gifts[s] = a1.includes(s) + a2.includes(s) + a3.includes(s)

    if (missing_gifts[s] >= 2) {
      delete missing_gifts[s]
    }
  })
  return Object.keys(missing_gifts)
}



const a1 = ['bici', 'coche', 'bici', 'bici']
const a2 = ['coche', 'bici', 'muñeca', 'coche']
const a3 = ['bici', 'pc', 'pc']

/* El almacén a1 tiene "bici" y "coche".
El almacén a2 tiene "coche", "bici" y "muñeca".
El almacén a3 tiene "bici" y "pc".

El regalo "muñeca" y "pc" sólo están en los almacenes a2 y a3 respectivamente.
*/
/* 
const gifts = getGiftsToRefill(['a', 'b'], ['c', 'd'], ['e', 'f']) // ['muñeca', 'pc'] */
const gifts = getGiftsToRefill(a1, a2, a3)
console.log("[RES]", gifts)