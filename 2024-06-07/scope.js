//// AMBITO (SCOPE) GLOBAL
const constanteBloqueGlobal = "constanteBloqueGlobal"
let variableBloqueGlobal = "variableBloqueGlobal"

function unaFuncion() {
  //// AMBITO (SCOPE) LOCAL DE LA FUNCION
  const constanteBloqueLocal = "constanteBloqueLocal"
  let variableBloqueLocal = "variableBloqueLocal"

  const constanteBloqueGlobal = "constanteBloqueGlobal desde la funcion"
  let variableBloqueGlobal = "variableBloqueGlobal desde la funcion"

  console.log("unaFuncion","constanteBloqueGlobal",constanteBloqueGlobal)
  console.log("unaFuncion","variableBloqueGlobal",variableBloqueGlobal)
  console.log("unaFuncion","constanteBloqueLocal",constanteBloqueLocal)
  console.log("unaFuncion","variableBloqueLocal",variableBloqueLocal)
}

console.log("constanteBloqueGlobal", constanteBloqueGlobal)
console.log("variableBloqueGlobal", variableBloqueGlobal)
console.log("constanteBloqueLocal", constanteBloqueLocal)
console.log("variableBloqueLocal", variableBloqueLocal)

for (let index = 0; index < 3; index++) {
  //// AMBITO (SCOPE) LOCAL DEL BUCLE
  const constanteBloqueLocalFor = "constanteBloqueLocalFor"
  let variableBloqueLocalFor = "variableBloqueLocalFor"

  console.log(index, "for", "constanteBloqueGlobal", constanteBloqueGlobal)
  console.log(index, "for", "variableBloqueGlobal", variableBloqueGlobal)
  console.log(index, "for", "constanteBloqueLocal", constanteBloqueLocal)
  console.log(index, "for", "variableBloqueLocal", variableBloqueLocal)
  console.log(index, "for", "constanteBloqueLocalFor", constanteBloqueLocalFor)
  console.log(index, "for", "variableBloqueLocalFor", variableBloqueLocalFor)

  unaFuncion()
}
