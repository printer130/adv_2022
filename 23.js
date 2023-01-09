/* Estamos probando una nueva CPU para el trineo de Papá Noel.Pero todavía tenemos que programar el software para que funcione.

La CPU tiene 8 registros disponibles, que se llaman V00..V07.Al comienzo del programa, todos los registros contienen 0. La CPU admite las siguientes instrucciones:

   
 la constante numérica n al registro Vxx(sobrescribe si ya tiene un valor);
  
    MOV Vxx,Vyy: copia el valor del registro Vxx al registro Vyy;
    MOV n,Vxx: asigna la constante numérica n al registro Vxx (sobrescribe si ya tiene un valor);
    ADD Vxx,Vyy: calcula (Vxx + Vyy) y almacena el resultado en Vxx;
    DEC Vxx: decrementa el valor de Vxx en 1.
    INC Vxx: incrementa el valor de Vxx en 1.
    JMP i: salta a la instrucción número i si V00 es diferente de 0. i está garantizado que sea un número de instrucción válido y 0 sería la primera instrucción.

Como la CPU es de 8 bits, el número que podría representar va desde 0 hasta 255. Si incrementas el número 255 causa un desbordamiento y resulta en 0. Y si decrementas 0, resulta en 255. Ten en cuenta, entonces, que el número 280 sería 24 en la CPU.

Después de que se haya ejecutado la última instrucción, debes devolver una matriz con el resultado para cada registro.De V00 a V07.Ejemplos: */



function executeCommands(commands) {

  const values = {
    "V00": 0,
    "V01": 0,
    "V02": 0,
    "V03": 0,
    "V04": 0,
    "V05": 0,
    "V06": 0,
    "V07": 0
  }

  const machine = {
    "MOV": (Vxx, Vyy) => {
      const includesV = Vxx.includes('V')
      includesV ? values[Vyy] = values[Vxx] : values[Vyy] = Number(Vxx)
    },
    "ADD": (Vxx, Vyy) => {
      values[Vxx] += values[Vyy]
      values[Vxx] = overflow(values[Vxx])
    },
    "DEC": (Vxx) => {
      values[Vxx] = values[Vxx] - 1
      values[Vxx] = overflow(values[Vxx])
    },
    "INC": (Vxx) => {
      values[Vxx] = values[Vxx] + 1
      values[Vxx] = overflow(values[Vxx])
    },
    "JMP": (i, index) => {
      const sliced = mapped.slice(i, index)
      jump(sliced)
    }
  }
  const mapped = commands.map(cmd => cmd.split(' '))

  function overflow(num) {
    if (num >= 0) return num % 256
    const n = (256 + num) % 256
    const callback = overflow(n)
    return callback
  }
  function jump(sliced) {
    if (values["V00"] === 0) return
    sliced.forEach(([cmd, registers]) => {
      const action = machine[cmd]
      const [arg1, arg2] = registers.split(',')
      action(arg1, arg2)
    })
    const callback = jump(sliced)
    return callback
  }
  const JMP = 'JMP'
  mapped.forEach(([cmd, registers], index) => {
    const [arg1, arg2] = registers.split(',')
    const action = machine[cmd]
    const isJump = cmd === JMP
    if (isJump) {
      action(arg1, index)
    } else {
      action(arg1, arg2)
    }
  })
  console.log(values)
  return Object.entries(values).map(([_, val]) => val)
}
/* executeCommands([
  'MOV 5,V00',  // V00 es 5
  'MOV 10,V01', // V01 es 10
  'DEC V00',    // V00 ahora es 4
  'ADD V00,V01' // V00 = V00 + V01 = 14
]) */
// Output: [14, 10, 0, 0, 0, 0, 0]

/* executeCommands([
  'MOV 255,V00', // V00 es 255
  'INC V00',     // V00 es 256, desborda a 0
  'DEC V01',     // V01 es -1, desborda a 255
  'DEC V01'      // V01 es 254
]) */

executeCommands([
  'MOV 10,V00',
  'MOV V00,V01',
  'MOV V01,V02',
  'MOV V02,V03',
  'MOV V03,V04'
])

// Output: [ 0, 10, 0, 0, 0, 0, 1, 0 ]

const data = [
  'MOV 10,V00',
  'MOV V00,V01',
  'MOV V01,V02',
  'MOV V02,V03',
  'MOV V03,V04'
]

console.log(data.map(command => command.split(' ')))