# Estructuras lógicas - Bucles

- Introducción a los Bucles
- Bucles en JavaScript
- Comparacion entre bucles
- Buenas practicas

## Introducción a los Bucles

### ¿Qué es un bucle?

- Es una estructura de control que permite repetir un bloque de código múltiples veces.
- En programación, los bucles son esenciales para realizar tareas repetitivas sin tener que escribir el mismo código varias veces.

### Importancia de los bucles en la programación

- Permiten automatizar y simplificar tareas repetitivas.
- Mejoran la eficiencia del código al evitar la duplicación.
- Facilitan la ejecución de operaciones en estructuras de datos como arrays y objetos.

### Diferencias entre bucles y otras estructuras de control

- Condicionales (if-else):

  - Ejecutan bloques de código basados en una condición, pero no repiten la ejecución.

- Bucles:

  - Repetirán la ejecución de un bloque de código mientras una condición sea verdadera.

## Bucles en JavaScript

- `for`
- `for of`
- `for in` (solo para objetos)
- `while`
- `do while`

### Bucle `for`

1. Sintaxis basica

    ```javascript
    for (inicialización; condición; actualización) {
        // Código a ejecutar
    }
    ```

2. Desglose de Componentes

    - **Inicialización**:
      - Es una expresión que se evalúa una vez al comienzo del bucle.
      - Se usa generalmente para declarar y inicializar una variable de control.

    - **Condición**:
      - Una expresión que se evalúa antes de cada iteración del bucle.
      - Si la condición es true, el bucle continúa; si es false, el bucle termina.

    - **Actualización**:
      - Una expresión que se evalúa al final de cada iteración del bucle.
      - Se usa comúnmente para actualizar la variable de control.

    ```javascript
    for (let i = 0; i < 5; i++) {
        console.log(i);
    }
    ```

#### Ejercicio `for`

Imprima los indices de posicion del array para los numeros mayores de 5

```javascript
let numeros = [1,6,9,2,3,1,10,4,5,7,8,2]

function imprimirNumerosAltos(coleccion) {
  // return coleccion
}
```

### Bucle `for of`

1. Sintaxis basica

    ```javascript
    for (let value of iterable) {
        // Código a ejecutar
    }
    ```

2. Desglose de Componentes

    - Value: Una variable que representa el valor actual del iterable en cada iteración.
    - Iterable: Una estructura de datos iterable (como un array, string, Map, Set, etc.).

      ```javascript
      const array = [10, 20, 30];

      for (let value of array) {
          console.log(value);
      }
      ```

3. Usos Comunes

    - Iterar sobre los valores de un array.
    - Iterar sobre los caracteres de una cadena de texto.
    - Iterar sobre los elementos de un Map o Set.

### Ejercicio `for of`

Genere una frase con visual studio code escribiendo lorem en un documento html, luego almacene esa frase en una variable y genere un algoritmo que imprima por consola las palabras que contengan la letra "e"

```javascript
function imprimirPalabrasConLaE(frase) {
  // return palabrasConE
}
```

### Bucle `for in`

- Enfocado en la iteracion sobre las propiedades de objetos, no en elementos tipicamente iterables

1. Sintaxis basica

    ```javascript
    for (let key in object) {
        // Código a ejecutar
    }
    ```

2. Desglose de Componentes

- **key**: Una variable que representa la clave actual del objeto en cada iteración.
- **object**: El objeto cuyas propiedades se están iterando.

  ```javascript
  const person = {
      name: 'John',
      age: 30,
      city: 'New York'
  };

  for (let key in person) {
      console.log(key + ": " + person[key]);
  }
  ```

3. Usos Comunes

- Iterar sobre las propiedades de un objeto.

#### Ejercicio `for in`

Desarrolle un algoritmo que imprima por consola (console.log) aquellas propiedades cuya longitud de nombre sea mayor a 9 caracteres

```javascript
const objeto = {
  prop: "valor1",
  propiedad: "valor2",
  caracteristica: "valor3",
  algomas: "valor4",
  otraPropiedadMasLarga: "valor5",
  sol: "valor6",
  nombreLargoPropiedad: "valor7"
};

function propiedadesLargas(obj) {
  // return obj
}
```

### Bucle `while`

1. Sintaxis Básica

    ```javascript
    while (condición) {
        // Código a ejecutar
    }
    ```

2. Desglose de Componentes

- Condición: Una expresión que se evalúa antes de cada iteración del bucle. Si la condición es true, el bucle continúa; si es false, el bucle termina.

  ```javascript
  let i = 0;
  while (i < 5) {
      console.log(i);
      i++;
  }
  ```

### Bucle `do while`

1. Sintaxis Básica

    ```javascript
    do {
        // Código a ejecutar
    } while (condición);
    ```

2. Desglose de Componentes

- Condición: Una expresión que se evalúa después de cada iteración del bucle. Esto garantiza que el bloque de código se ejecute al menos una vez.

  ```javascript
  let i = 0;
  do {
      console.log(i);
      i++;
  } while (i < 5);
  ```

  ```javascript
  let num;
  do {
      num = prompt("Introduce un número mayor que 10:");
  } while (num <= 10);
  ```

## Comparacion entre bucles

- `for`: Se usa cuando se conoce el número exacto de iteraciones que se desean realizar. Es ideal para bucles contados.
- `while`: Se usa cuando el número de iteraciones no está definido previamente y depende de una condición que se evalúa antes de cada iteración.
- `do...while`: Similar al while, pero la condición se evalúa después de la primera iteración, garantizando que el código se ejecute al menos una vez.
- `for in`: Se usa para iterar sobre las propiedades de un objeto.
- `for of`: Se usa para iterar sobre valores en una estructura de datos iterable (arrays, strings, Maps, Sets, etc.).

## Buenas practicas

- Evitar bucles infinitos: Asegúrate de que tu bucle tenga una condición de salida válida para evitar que se ejecute indefinidamente.
- Nombres de variables significativos: Utiliza nombres de variables que indiquen claramente su propósito dentro del bucle.
- Comentar el código: Agrega comentarios para explicar la lógica y el propósito del bucle, facilitando la comprensión y el mantenimiento del código.
- Usar el bucle adecuado: Selecciona el tipo de bucle que mejor se adapte a la tarea que necesitas realizar para mejorar la legibilidad y eficiencia de tu código.

## Ejercicio 2024-06-12

Dada la siguiente coleccion de hoteles, ordene por cantidad de habitaciones de menor a mayor, e imprima los nombres de los hoteles.

```javascript
const hotelLaLuz = {
  nombre: 'La Luz',
  fechaFundacion: '2024-01-01',
  pisos: 10,
  habitacionPorPiso: 5,
  habitaciones: 51,
  suites: 1
}

const hotelLaSombra = {
  nombre: 'La Sombra',
  fechaFundacion: '1924-01-01',
  pisos: 3,
  habitacionPorPiso: 10,
  habitaciones: 31,
  suites: 1
}

const hotelElSol = {
  nombre: 'El Sol',
  fechaFundacion: '2000-05-15',
  pisos: 5,
  habitacionPorPiso: 8,
  habitaciones: 41,
  suites: 1
}

const hotelLaEstrella = {
  nombre: 'La Estrella',
  fechaFundacion: '1980-10-10',
  pisos: 7,
  habitacionPorPiso: 6,
  habitaciones: 43,
  suites: 1
}

const hotelElCielo = {
  nombre: 'El Cielo',
  fechaFundacion: '1990-07-21',
  pisos: 12,
  habitacionPorPiso: 4,
  habitaciones: 49,
  suites: 1
}

const hotelLaLuna = {
  nombre: 'La Luna',
  fechaFundacion: '1975-12-25',
  pisos: 8,
  habitacionPorPiso: 7,
  habitaciones: 57,
  suites: 1
}

const hotelElOceano = {
  nombre: 'El Oceano',
  fechaFundacion: '2010-03-18',
  pisos: 6,
  habitacionPorPiso: 9,
  habitaciones: 55,
  suites: 1
}

const hotelElJardin = {
  nombre: 'El Jardin',
  fechaFundacion: '2005-09-30',
  pisos: 4,
  habitacionPorPiso: 7,
  habitaciones: 29,
  suites: 1
}

const hotelLaMontaña = {
  nombre: 'La Montaña',
  fechaFundacion: '2015-06-06',
  pisos: 9,
  habitacionPorPiso: 5,
  habitaciones: 46,
  suites: 1
}

const hotelElRio = {
  nombre: 'El Rio',
  fechaFundacion: '1995-11-11',
  pisos: 3,
  habitacionPorPiso: 12,
  habitaciones: 37,
  suites: 1
}

const hoteles = [
  hotelLaLuz,
  hotelLaSombra,
  hotelElSol,
  hotelLaEstrella,
  hotelElCielo,
  hotelLaLuna,
  hotelElOceano,
  hotelElJardin,
  hotelLaMontaña,
  hotelElRio
]

function ordenarHoteles(coleccionDeHoteles) {
  // return hotelesOrdenados
}
```
