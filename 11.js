/* Papa Noél está un poco preocupado porque los preparativos están llevando mucho tiempo. Hace poco se ha sacado una certificación de Scrum y ha decidido usar la metodología para organizar el trabajo de sus elfos.

Le dicen la duración esperada de las tareas con un string con el formato hh:mm:ss y en el mismo formato cuánto tiempo llevan trabajando en ella.

Pero Papa Noél no se entera rápidamente si falta o mucho para que termine, así que nos ha pedido que hagamos un programa que nos indique la porción de la tarea que ya se ha completado.
Por ejemplo, si la tarea dura 03:00:00 y llevan trabajando 01:00:00 entonces ya han completado 1/3 de la tarea. En código:

Ten en cuenta:
    El formato de la hora es hh:mm:ss.
    El formato de la salida es un string a/b donde a es la porción de la tarea que ya se ha completado y b es la porción de la tarea que falta por completar.
    La porción siempre se muestra con la menor fracción posible. (por ejemplo, nunca se mostraría 2/4 porque se puede representar como 1/2).
    Si ya se ha completado la tarea, la fracción sería 1/1.
    Ningun elfo ha sido maltradado durante la ejecución de este reto ni han tenido que usar Scrum de verdad.
*/

function getCompleted(part, total) {
  const [h_total, m_total, s_total] = total.split(':')
  const [h_part, m_part, s_part] = part.split(':')

  const toSeconds = (h, m, s) => {
    return (Number(h) * 3600 + Number(m) * 60 + Number(s))
  }

  let total_to_seconds = toSeconds(h_total, m_total, s_total)
  let part_to_seconds = toSeconds(h_part, m_part, s_part)
  let tol_to_sec = total_to_seconds
  let part_to_sec = part_to_seconds
  while (tol_to_sec) {
    let aux = tol_to_sec
    tol_to_sec = part_to_sec % tol_to_sec
    part_to_sec = aux
  }

  console.log({ total_to_seconds, part_to_seconds, tol_to_sec, part_to_sec })
  console.log("Numerator:", `${part_to_seconds / part_to_sec}`)
  console.log("Denominator: ", total_to_seconds / part_to_sec)
  console.log(`${part_to_seconds / part_to_sec}/${total_to_seconds / part_to_sec}`)
  return `${part_to_seconds / part_to_sec}/${total_to_seconds / part_to_sec}`
}
/* getCompleted('02:00:00', '04:00:00')  */// '1/2'
//getCompleted('01:00:00', '03:00:00') // '1/3'
//getCompleted('01:00:00', '01:00:00') // '1/1'
getCompleted('00:10:00', '01:00:00') // '1/6'
/*getCompleted('01:10:10', '03:30:30') // '1/3'*/
//getCompleted('03:30:30', '05:50:50') // '3/5