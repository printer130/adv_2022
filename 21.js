function printTable(gifts) {
  const maxNameLength = Math.max(
    ...gifts.map(gift => gift.name.length),
    4
  )
  const maxQuantityLength = Math.max(
    ...gifts.map(gift => gift.quantity.toString().length),
    8
  )

  function row(name, quantity, padChar = ' ') {
    return '| ' +
      name.padEnd(maxNameLength, padChar) +
      ' | ' +
      quantity.padEnd(maxQuantityLength, padChar) +
      ' |'
  }
  const top = '+'.repeat(maxNameLength + maxQuantityLength + 7)
  const bottom = '*'.repeat(maxNameLength + maxQuantityLength + 7)
  const header = row('Gift', 'Quantity')
  const subheader = row('', '', '-')

  const dataRows = gifts.map(gift =>
    row(gift.name, gift.quantity.toString())
  )
  console.log([top, header, subheader, ...dataRows, bottom].join('\n'))
  return [top, header, subheader, ...dataRows, bottom].join('\n')
}

printTable([
  { name: 'Game', quantity: 2 },
  { name: 'Bike', quantity: 1 },
  { name: 'Book', quantity: 3 }
])

printTable([
  { name: 'PlayStation 5', quantity: 9234782374892 },
  { name: 'Book Learn Web Dev', quantity: 23531 }
])

printTable([
  { name: 'Leoanrdo', quantity: 2 },
  { name: 'Apelpisia', quantity: 394573783451231231231 },
  { name: 'Computa-Doraxx', quantity: 23 },
  { name: 'Cokahina', quantity: 777 }
])

/* console.table([
  { name: 'Leoanrdo', quantity: 2 },
  { name: 'Apelpisia', quantity: 394573783451231231231 },
  { name: 'Computa-Doraxx', quantity: 23 },
  { name: 'Cokahina', quantity: 777 }
]) */