# Funciones Generadoras y Timers

- Funciones Generadoras
- Timers

## Funciones Generadoras

- Introducción a las Funciones Generadoras
- Sintaxis básica
- `yield`... Proposito
- Casos de uso de Generadores
- Ejercicios

### Introducción a las Funciones Generadoras

- Las funciones generadoras son funciones que pueden ser pausadas y resumidas, lo que les permite mantener su estado entre ejecuciones.
- Se definen con la palabra clave `function*`.

### Sintaxis básica

```javascript
function* nombreDeLaGeneradora() {
    yield valor1;
    yield valor2;
    // ...
}
```

### `yield`... Proposito

La palabra clave yield se utiliza para pausar la ejecución de la generadora y devolver un valor. La siguiente llamada a next() reanuda la ejecución desde el punto donde se pausó.

Ejemplo:

```javascript
function* contar() {
    yield 1;
    yield 2;
    yield 3;
}

const generador = contar();
console.log(generador.next().value); // 1
console.log(generador.next().value); // 2
console.log(generador.next().value); // 3
```

### Casos de uso de Generadores

- Pausar la Ejecución
- Devolver Valores
- Comunicación Bidireccional

Ejemplo:

```javascript
function* rango(inicio, fin) {
    for (let i = inicio; i <= fin; i++) {
        yield i;
    }
}

const iterador = rango(1, 5);
for (let valor of iterador) {
    console.log(valor);
}
```

#### Pausar la Ejecución

`yield` pausa la ejecución de la función generadora y devuelve el valor especificado al código que invocó la generadora. La función puede ser reanudada desde el punto en que fue pausada en la siguiente llamada al método `next()` de la generadora.

```javascript
function* contador() {
    let i = 0;
    while (true) {
        yield i++;
    }
}

const generador = contador();
console.log(generador.next().value); // 0
console.log(generador.next().value); // 1
console.log(generador.next().value); // 2
```

#### Devolver Valores

`yield` se utiliza para devolver valores secuencialmente cada vez que la función generadora es iterada. Cada llamada a `next()` devuelve un objeto con dos propiedades:

- value: El valor producido por `yield`.
- done: Un booleano que indica si la función generadora ha terminado (true si la generadora ha terminado, false si hay más valores que producir).

```javascript
function* colores() {
    yield 'rojo';
    yield 'verde';
    yield 'azul';
}

const generador = colores();
console.log(generador.next().value); // 'rojo'
console.log(generador.next().value); // 'verde'
console.log(generador.next().value); // 'azul'
```

#### Comunicación Bidireccional

`yield` puede recibir un valor que es pasado de vuelta a la función generadora en la próxima llamada a `next()`. Esto permite la comunicación bidireccional entre el generador y el código que lo consume.

```javascript
function* calculadoraSumas(inicial) {
    let total = inicial;
    while (true) {
        const suma = yield total;
        total += suma;
    }
}

const sumador = calculadoraSumas(10);
console.log(sumador.next().value); // 10
console.log(sumador.next(5).value); // 15
console.log(sumador.next(3).value); // 18
console.log(sumador.next(7).value); // 25
```

#### Ejercicios

1. Generadora de Números Pares
Crea una función generadora que produzca números pares de 2 en 2.

2. Generadora de Factoriales
Crea una función generadora que calcule los factoriales de los números consecutivos (1!, 2!, 3!, ...).

3. Generadora de Caracteres de una Cadena
Crea una función generadora que reciba una cadena y devuelva cada uno de sus caracteres uno por uno.

## Timers

- ¿Qué son los timers y para qué se utilizan?
- Tipos de Timers:

### ¿Qué son los timers y para qué se utilizan?

- Los timers en JavaScript permiten ejecutar código después de un cierto período de tiempo. Son fundamentales para crear comportamientos asíncronos en las aplicaciones web.

### Tipos de Timers

- `setTimeout`
- `setInterval`

#### [`setTimeout`](https://developer.mozilla.org/es/docs/Web/API/setTimeout)

- Ejecuta una función una sola vez después de un tiempo especificado.
- Requiere del uso explicito de la funcion `clearTimeout` para impedir su ejecucion en el tiempo acordado.

Sintaxis:

```javascript
let timeoutID = setTimeout(función, milisegundos, parámetro1, parámetro2, ...);
```

Ejemplo:

```javascript
function sayHello() {
    console.log('Hello, World!');
}
setTimeout(sayHello, 2000); // 'Hello, World!' se mostrará en la consola después de 2 segundos
```

Uso de `clearTimeout`:

```javascript
let timeoutID = setTimeout(sayHello, 2000);
clearTimeout(timeoutID); // Cancela el timer si es llamado antes de los 2 segundos
```

#### [`setInterval`](https://developer.mozilla.org/es/docs/Web/API/setInterval)

- Ejecuta una función repetidamente, con un intervalo de tiempo fijo entre cada ejecución.
- Requiere del uso explicito de la funcion `clearInterval` para impedir su ejecucion en el tiempo acordado.

Sintaxis:

```javascript
let intervalID = setInterval(función, milisegundos, parámetro1, parámetro2, ...);
```

Ejemplo:

```javascript
function sayHello() {
    console.log('Hello again!');
}
setInterval(sayHello, 2000); // 'Hello again!' se mostrará en la consola cada 2 segundos
```

Uso de `clearTimeout`:

```javascript
let intervalID = setInterval(sayHello, 2000); // 'Hello again!' se mostrará en la consola cada 2 segundos
clearInterval(intervalID); // Detiene la ejecución repetitiva de la función
```
