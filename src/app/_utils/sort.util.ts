export function sortArray( arr, propiedad ) {
  arr.sort((a,b) => {
    const Akey = a[propiedad];
    const Bkey = b[propiedad];
    if (Akey < Bkey) // Sort de forma ascendente
      return -1
    if (Akey > Bkey)
      return 1
    return 0 // devuelve el default y no le sort
  })
}
