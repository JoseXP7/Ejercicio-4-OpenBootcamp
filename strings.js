let nombre = "Jose "
let apellido = "Graterol"

let estudiante = nombre.concat(apellido)

console.log(estudiante)

let estudianteMayus = estudiante.toUpperCase()
console.log(estudianteMayus)

let estudianteMinus = estudiante.toLowerCase()
console.log(estudianteMinus)

let estudianteNumeroDeLetras = estudiante.length
console.log(estudianteNumeroDeLetras)

let primeraLetraNombre = nombre.charAt(0)
console.log(primeraLetraNombre)

let ultimaLetraNombre = apellido[7]
console.log(ultimaLetraNombre)

let eliminarEspacios = estudiante.replace(/ /g,"")
console.log(eliminarEspacios)

let buscarNombre = estudiante.startsWith(nombre)
console.log(buscarNombre)