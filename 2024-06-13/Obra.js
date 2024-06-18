// Hoy vamos a la Obra!
// Aprenderemos que es el Scope,
// Los tipos de scope y un programa que gestione la obra de construir una pared

// https://neuttro.es/como-hacer-una-pared-de-ladrillo/

let materiales = {
  mortero: 0, // este material es esencial para proporcionar resistencia y cohesión a la pared
  ladrillos: 300, // la fundacion que usaremos para levantar nuestra pared
  cemento: 100, // existen variedades de colores y durezas al solidificar este material
  arena: 100, // material de transicion para facilitar la union del mortero con los ladrillos
  agua: 100
}

let herramientas = {
  nivel: 2, // para asegurar que la pared este recta y nivelada.
  paleta: 2, // tambien llamada "llana" para extender y alisar el yeso o el mortero.
  cucharaDeAlbanileria: 2, // para mezclar los materiales para hacer el mortero,
  cintaMetrica: 2, // para medir y marcar las dimensiones de la pared.
  cepillo: 2, // para limpiar y preparar la superficie antes de aplicar los materiales.
  gafasDeSeguridad: 2, // para proteger tus ojos  durante el proceso de construcción.
  guantesDeSeguridad: 2, // para proteger tus manos durante el proceso de construcción.guantesDeSeguridad--
}

let personas = [
  {
    nombre: "Juan",
    ocupado: false,
    equipamiento: []
  },
]

let obreros = []

// No estar preparado para la obra implica peligro para la persona
function prepararPersonaParaLaObra() {
  console.log('inicia proceso de preparacion de obrero');
  let obrero

  console.log('seleccionado persona')
  let persona = personas.pop()

  let estaListaLaPersonaParaTrabajar = persona.equipamiento.length > 0
  if (!estaListaLaPersonaParaTrabajar) {

    console.log('sacar herramientas de almacen')
    herramientas.gafasDeSeguridad--
    herramientas.guantesDeSeguridad--

    // entregar herramientas a persona
    console.log('entregando herramientas equipo de seguridad a persona')
    persona.equipamiento.push('gafasDeSeguridad')
    persona.equipamiento.push('guantesDeSeguridad')
  }

  for (
    let indice = 0;
    indice < materiales.length;
    indice++
  ) {
    construirTrozoPared()
  }

  // persona equipada para trabajar
  if (persona.equipamiento !== 0) {
    // una persona con equipamiento
    // esta preparada para trabajar
    obrero = persona
    // apuntamos al obrero a la lista de obreros disponibles
    obreros.push(obrero)
  } else {
    throw new Error("Detenida la obra por falta de personal!")
  }

  // enviar obrero a la obra
  return obrero
}

// la gente tiene que descansar luego de un arduo trabajo
function descansarObreroDeLaobra() {
  console.log('inicia proceso de mandar a descansar a obrero');
  let persona
  let obrero = obreros.pop()

  // obrero entrega herramientas
  if (obrero.equipamiento !== 0) {
    // soltar herramientas
    herramientas.gafasDeSeguridad++
    herramientas.guantesDeSeguridad++

    // recoger gafasDeSeguridad de obrero
    obrero.equipamiento.pop()
    // recoger guantesDeSeguridad de obrero
    obrero.equipamiento.pop()
  }

  if (obrero.equipamiento === 0) {
    persona = obrero
  }

  // enviar persona a su descanso
  return persona
}


function prepararMortero() {
  // Traer cemento, arena y agua al sitio de la mezcla
  materiales.cemento--
  materiales.arena--
  materiales.agua--
  materiales.mortero++

  let mortero = 3
  return mortero
}

//
function armarPared() {

}


function construirPared() {
  // mientras haya ladrillos sueltos la pared no esta lista
  while (materiales.ladrillos !== 0) {
    armarPared()
  }
}

construirPared()
