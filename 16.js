function fixLetter(letter) {
  let str_resp = ''
  const letter_f = letter.replace(/\s+/g, ' ').trim().replaceAll(',', ', ')
  let rest_cap = letter_f
  const last_letter = letter_f.slice(-1)

  if (last_letter !== '.' && last_letter !== '?' && last_letter !== '!') {
    rest_cap += '.'
  }

  if (rest_cap.includes(' ;') === true) {
    str_resp = rest_cap.replaceAll(' ;', ';')
    rest_cap = str_resp
  }
  if (rest_cap.includes(' .') === true) {
    str_resp = rest_cap.replaceAll(' .', '.')
    rest_cap = str_resp
  }


  str_resp = rest_cap
    .replace(/\s*\?+/g, '?')
    .replace(/\s*\,\s*/g, ', ')
    .replace(/santa claus/gi, 'Santa Claus')
  rest_cap = str_resp


  const upperCaseWordsAfterPunctuation = text => {
    text = text[0].toLocaleUpperCase() + text.substring(1);
    const regex = /[.!?]\s[a-z]/gi;
    return text.replace(regex,
      match => match[0] + ' ' + match[2].toUpperCase()
    );
  };
  rest_cap = upperCaseWordsAfterPunctuation(rest_cap)


  return `${rest_cap}`
}
fixLetter(` hello,how are you??     do you know if santa claus exists?  i really hope he ; does!  bye  .`)

/* Papá Noel está empezando a recibir un montón de cartas pero tienen un montón de problemas de formato. Para mejorar la lectura, va a escribir un programa que, dado un texto, lo formatea de acuerdo a las siguientes reglas:

    [*] Eliminar espacios al inicio y al final
    [*] Eliminar múltiples espacios en blanco y dejar sólo uno
    [*] Dejar un espacio después de cada coma
    [] Quitar espacios antes de coma o punto
    [] Las preguntas sólo deben terminar con un signo de interrogación
    [*] La primera letra de cada oración debe estar en mayúscula
    [*] Poner en mayúscula la palabra "Santa Claus" si aparece en la carta
    [*] Poner un punto al final de la frase si no tiene puntuación

Las cartas las escriben inglés y aquí tenemos un ejemplo:
// Hello, how are you? Do you know if Santa Claus exists? I really hope he does! Bye.

fixLetter("  Hi Santa claus. I'm a girl from Barcelona , Spain . please, send me a bike.  Is it possible?")
// Hi Santa Claus. I'm a girl from Barcelona, Spain. Please, send me a bike. Is it possible?

A tener en cuenta:

    No te tienes que preocupar por los signos de puntuación que no sean coma, punto o interrogación.
    Asegúrate de respetar los saltos de línea y espacios originales.
*/