# Herramientas de depuración

- DevTools
- Descripción General del Interfaz
- console y debugger

## DevTools

Son un conjunto de herramientas de desarrollo integradas en el navegador Google Chrome. Estas herramientas están diseñadas para ayudar a los desarrolladores web a depurar, editar y perfilar aplicaciones web directamente desde el navegador.

Las DevTools proporcionan una variedad de paneles y funciones que permiten a los desarrolladores:

1. Inspeccionar y editar el código HTML, CSS y JavaScript en tiempo real

    Los desarrolladores pueden examinar la estructura del Document Object Model (DOM), modificar estilos CSS y depurar código JavaScript directamente desde el navegador.

1. Depurar JavaScript

    Las DevTools ofrecen un depurador JavaScript completo que permite establecer puntos de interrupción (breakpoints), inspeccionar variables y ejecutar código paso a paso para diagnosticar y corregir errores en el código.

1. Analizar el rendimiento de la página web

    Los desarrolladores pueden utilizar las DevTools para analizar el rendimiento de la página web, identificar cuellos de botella en la carga y ejecución del código, y optimizar la velocidad de carga y la eficiencia del sitio.

1. Monitorizar las solicitudes de red

    Las DevTools permiten visualizar todas las solicitudes de red realizadas por la página web, incluyendo archivos HTML, CSS, JavaScript, imágenes, etc. Los desarrolladores pueden analizar los tiempos de carga, las cabeceras HTTP y la eficiencia de las solicitudes de red.

1. Auditar la accesibilidad y el SEO

    Las DevTools incluyen herramientas de auditoría que permiten evaluar la accesibilidad y la optimización para motores de búsqueda (SEO) de una página web, identificando posibles problemas y proporcionando recomendaciones para mejorar la experiencia del usuario y el posicionamiento en los motores de búsqueda.

## Descripción General del Interfaz

Paneles principales:

- Elements
- Console
- Sources
- Network

### Panel Elements

Introducción al Panel Elements

- Visión general:

      El panel Elements permite inspeccionar y modificar el HTML y CSS de una página web en tiempo real.

- Componentes principales:

  - Árbol DOM:
    - Representación jerárquica de los elementos HTML de la página.

  - Estilos CSS:
    - Visualización y modificación de estilos aplicados a los elementos.

- Inspección y Edición de HTML
  - Navegación por el DOM:
    - Exploración de la estructura de la página web.
    - Selección y resaltado de elementos.
  - Edición en línea:
    - Modificación directa del HTML para realizar cambios temporales o de prueba.

- Manipulación de Estilos CSS
  - Estilos Computed y Box Model:
    - Visualización de estilos computados y modelo de caja de los elementos.

  - Modificación de Estilos:
    - Ajuste de propiedades CSS en tiempo real para observar cambios visuales inmediatos.

- Herramientas Adicionales
  - Colores y Fuentes:
    - Inspección de colores y fuentes aplicados a los elementos.

  - Capturas de Pantalla y Medición:
    - Captura de capturas de pantalla de elementos individuales y medición de distancias.

### Panel Console

Introducción a la Consola

- Visión general:

      La consola es una herramienta para depurar JavaScript y registrar información.

- Componentes principales:
  - Navegador de archivos: Ver la estructura de archivos del proyecto
  - Editor de código: Visualizar y editar código
  - Depurador: Herramientas de depuración como breakpoints y call stack

- Comandos Básicos

- Ejecución de JavaScript:

```javascript
let counter = 0
let intervalo

function crearIntervalo() {
  if (intervalo) {
    destruirIntervalo()
    counter = 0
  }
  intervalo = setInterval(() => {
    counter++
    console.log(counter)
  }, 1000)
}

function destruirIntervalo() {
  clearInterval(intervalo)
}

crearIntervalo()
```

- Manipulación del DOM:

```javascript
document.querySelector('body').innerHTML = ''

const prf = document.createElement('p')
prf.setAttribute('id', 'prf')
prf.textContent = 'Esto es un parrafo'

document.querySelector('body').appendChild(prf)
```

### Panel Sources

Introducción al Debugger

- Visión general:

      El Debugger permite inspeccionar y depurar el código fuente en tiempo real.

- Componentes principales:

  - Navegador de archivos: Ver la estructura de archivos del proyecto
  - Editor de código: Visualizar y editar código
  - Depurador: Herramientas de depuración como breakpoints y call stack

Breakpoints

- Tipos de breakpoints:
  - Breakpoints de línea
  - Breakpoints condicionales
  - Breakpoints en eventos de DOM
  - Breakpoints en excepciones

- Cómo establecer y gestionar breakpoints:
  -Añadir y eliminar breakpoints
  -Breakpoints condicionales: Añadir condiciones para pausar la ejecución

Control de Ejecución

- Herramientas de control:
  - Reanudar ejecución (Resume script execution)
  - Paso a paso (Step over, Step into, Step out)
- Call Stack:
  - Análisis de la pila de llamadas
  - Navegación entre diferentes niveles de la pila

Watch Expressions

- Watch Expressions:
  - Monitorear variables y expresiones específicas
  - Añadir y eliminar expresiones

Scope:

- Inspeccionar el alcance de variables (locales y globales)
- Identificación de valores en diferentes contextos de ejecución

### Panel Network

Introducción al Panel Network

- Visión general:

      El panel Network permite monitorear las solicitudes de red realizadas por una página web, incluyendo archivos HTML, CSS, JavaScript, imágenes, etc.

- Componentes principales:
  - Lista de Solicitudes: Muestra todas las solicitudes realizadas por la página web, incluyendo detalles como URL, método, estado, tamaño, tiempo de carga, entre otros.
  - Filtros: Permite filtrar las solicitudes por tipo (XHR, Imágenes, CSS, etc.) o por texto.
  - Detalles de Solicitudes: Brinda información detallada sobre cada solicitud, incluyendo cabeceras, parámetros, y temporización.

Monitorización de Solicitudes de Red

- Registros de Solicitudes: Muestra en tiempo real las solicitudes realizadas por la página web.
- Análisis de Tiempos de Carga: Permite identificar cuellos de botella y optimizar el rendimiento de la página.
- Visualización de Cabeceras: Inspección detallada de las cabeceras HTTP de cada solicitud.

Herramientas Adicionales

- Simulación de Condiciones de Red: Permite simular diferentes condiciones de red (3G, 4G, etc.) para probar el rendimiento de la página en diferentes escenarios.
- Captura de Pantalla de Solicitudes: Posibilidad de realizar capturas de pantalla de las solicitudes individuales para un análisis más detallado.
- Exportación de Registros: Permite exportar los registros de solicitudes para análisis fuera de las DevTools.

## console y debugger

En JavaScript es esencial para la depuración y el seguimiento de errores en tus aplicaciones. Aquí tienes una explicación de cómo usar cada uno:

### 1. Uso de console

#### Registro de Mensajes

Puedes usar métodos como `console.log()`, `console.error()`, `console.warn()` y `console.info()` para imprimir mensajes en la consola del navegador.

```javascript
console.log("Este es un mensaje de registro.");
console.error("Esto es un error.");
console.warn("¡Atención! Este es un mensaje de advertencia.");
console.info("Información adicional.");
```

#### Interpolación de Cadenas

Puedes incrustar valores de variables dentro de cadenas usando la sintaxis `${}`.

```javascript
const nombre = "Juan";
console.log(`Hola, ${nombre}!`);
```

#### Registro de Objetos

Puedes imprimir objetos y arrays para inspeccionar su contenido.

```javascript
const persona = { nombre: "Juan", edad: 30 };
console.log(persona);


const colores = ["rojo", "verde", "azul"];
console.log(colores);
```

### 2. Uso de debugger

#### Establecer Breakpoints

Puedes insertar la palabra clave debugger en tu código para pausar la ejecución y abrir las DevTools del navegador en ese punto.

```javascript
function suma(a, b) {
    debugger; // El código se pausará aquí
    return a + b;
}
```

### Depuración Interactiva

Una vez que la ejecución se pausa en un breakpoint, puedes inspeccionar el estado del código y las variables en las DevTools. Puedes avanzar paso a paso, retroceder, o reanudar la ejecución.

### Inspección de Variables

Puedes examinar el valor de las variables en ese punto del código.

### Cambio de Valores

En tiempo de ejecución, puedes modificar el valor de las variables para probar diferentes escenarios.
