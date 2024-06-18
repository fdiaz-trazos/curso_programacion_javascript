# Funciones en Javascript y Contexto

- Operadores REST y SPREAD `...`
- Closures (Cierres de Scope)

## Operadores REST y SPREAD `...`

- Que son?
- Como se usan?
- Ejercicios

### Que son?

- Son operadores en JavaScript que se utilizan para trabajar con arrays y objetos de manera más sencilla y flexible. Aunque se ven similares, tienen usos distintos:

### Como se usan?

- Operador rest `...`
- Operador spread `...`

#### Operador rest `...`

- Que es?
- Sintaxis
- Ejemplos de uso
- Relación entre el operador rest `...` y `arguments`

##### Que es?

- Operador que permite agrupar múltiples parametros en un array. Se utiliza principalmente en la definición de funciones para capturar un número variable de argumentos.

- En el contexto de la declaración de una función:

  - Permite representar un número indefinido de argumentos como un array.
  - Se coloca al final de la lista de parámetros formales de la función.
  - Captura los argumentos restantes pasados a la función en un array, lo que permite trabajar con ellos de manera más fácil y flexible.
  - Es una característica de ECMAScript 6 (ES6) y posteriores.

##### Sintaxis

```javascript
function miFuncion(...args) {
    // args es un array que contiene todos los argumentos pasados a la función
}
```

##### Ejemplo de uso

```javascript
function callbackReduce (acum, actual) {
  return acum + actual
}

function sumarTodos(...numeros) {
  return numeros.reduce(callbackReduce, 0);
}

console.log(sumarTodos(1, 2, 3, 4)); // Devuelve 10
```

En este ejemplo, ...numeros agrupa todos los argumentos en un array llamado numeros.

##### Relación entre rest `...` y `arguments`

Ambos el operador rest `...` y el objeto `arguments` están relacionados en el sentido de que ambos permiten trabajar con un número variable de argumentos en funciones.

Sin embargo, el operador rest `...` proporciona una sintaxis más clara y expresiva para este propósito, mientras que `arguments` es una característica más antigua de JavaScript que sigue siendo útil en ciertos casos, como cuando se necesita acceder a los argumentos de una función sin importar cómo se definieron.

Además, el operador rest `...` es más versátil y puede ser preferible en términos de legibilidad y mantenibilidad del código.

#### Operador spread `...`

- Que es?
- Sintaxis
- Ejemplo de uso

- Se utiliza para descomponer o expandir elementos de un array o un objeto. Permite expandir elementos de un array u objeto. Se utiliza para crear copias superficiales de arrays/objetos, combinar arrays/objetos, y pasar un array como argumentos individuales a una función.

##### Sintaxis spread

```javascript
let nuevoArray = [...array];
let nuevoObjeto = {...objeto};
```

##### Ejemplo de uso spread

- Uso con arrays:
- Uso con objetos:

###### Uso con arrays

```javascript
let array1 = [1, 2, 3];
let array2 = [4, 5, 6];

let combinado = [...array1, ...array2];
console.log(combinado); // Salida: [1, 2, 3, 4, 5, 6]
```

###### Uso con objetos

```javascript
let objeto1 = { a: 1, b: 2 };
let objeto2 = { c: 3, d: 4 };

let combinado = { ...objeto1, ...objeto2 };
console.log(combinado); // Salida: { a: 1, b: 2, c: 3, d: 4 }
```

### Ejercicios con rest y spread `...`

*Ejercicio con Rest*:

- Complete la funcion `concatenarCadenas` para que acepte cualquier cantidad de cadenas de texto (`strings`) como argumentos y devuelva (`return`) una sola cadena de texto que sea la concatenación de todas las cadenas de texto proporcionadas.

```javascript
function concatenarCadenas(
  // ???
) {
    // return ???
}

console.log(concatenarCadenas('Hola', 'mundo', '!')); // Salida: "Hola mundo !"
```

*Ejercicio con Spread*:

- Complete en el array `numerosCombinados` para que combine los arrays [1, 2, 3] y [4, 5, 6] utilizando el operador Spread.

```javascript
let array1 = [1, 2, 3];
let array2 = [4, 5, 6];

let numerosCombinados = [
  // ??,
  // ??
];

console.log(numerosCombinados); // Salida: [1, 2, 3, 4, 5, 6]
```

## Closures (Cierres de Scope)

- Que son?
- Como se usan?
- Ejercicios

### Que son Closures?

- Un closure es una función que recuerda su entorno léxico, es decir, las variables que estaban en el alcance cuando la función fue definida, incluso después de que ese entorno haya terminado.

### Como se usan los Closures?

  ```javascript
  function crearContador() {
    let contador = 0;

    return function incrementar() {
      contador++;
      return contador;
    }
  }

  const contador1 = crearContador();
  console.log(contador1()); // 1
  console.log(contador1()); // 2

  const contador2 = crearContador();
  console.log(contador2()); // 1
  ```

  Aquí, incrementar es un closure que recuerda la variable contador definida en su entorno léxico.

### Ejercicios de closures

1. Contador
Crea una función `crearContador` que devuelva (`return`) una función que incremente y devuelva un contador. Cada vez que se llame a la función devuelta, el contador debe incrementarse en uno.

2. Generador de Saludos Personalizados
Crea una función `crearSaludo` que acepte un saludo inicial como argumento y devuelva (`return`) una función que acepte un nombre como argumento y devuelva una cadena que combine el saludo inicial con el nombre.

3. Cache de Numeros cuadrados
Crea una función `crearCache` que devuelva (`return`) una función que acepte un argumento numérico. Si el número ya ha sido pasado antes, la función debe devolver el resultado almacenado en la caché; de lo contrario, debe calcular un nuevo resultado (por ejemplo, el cuadrado del número), almacenarlo en la caché y devolver el resultado.
