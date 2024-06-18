# Datos objeto en JavaScript

## Tipos de Datos No Primitivos

| Tipo | Descripción | Ejemplo |
|-|-|-|
| **undefined** | Indica que una variable ha sido declarada pero no inicializada. | ```let x; console.log(x); // undefined``` |
| **null** | Representa la ausencia intencional de cualquier valor de objeto. | ```let y = null;``` |
| **Object** | Representa una colección de pares clave-valor. | ```let persona = { nombre: "Juan", edad: 30 };``` |
| **Array** | Representa una colección ordenada de elementos. | ```let numeros = [1, 2, 3, 4, 5];``` |
| **Function** | Representa una función en JavaScript. | ```function saludar() { console.log("Hola"); }``` |
| **Date** | Representa una fecha y hora. | ```let fecha = new Date();``` |
| **RegExp** | Representa una expresión regular. | ```let regex = /ab+c/;``` |
| **Map** | Representa una colección de pares clave-valor donde las claves pueden ser de cualquier tipo. | ```let mapa = new Map(); mapa.set('clave', 'valor');``` |
| **Set** | Representa una colección de valores únicos. | ```let conjunto = new Set([1, 2, 3, 4, 5]);``` |
| **WeakMap** | Similar a Map, pero permite que las claves sean recogidas por el recolector de basura si no son referenciadas en otro lugar. | ```let mapaDebil = new WeakMap();``` |
| **WeakSet** | Similar a Set, pero permite que los valores sean recogidos por el recolector de basura si no son referenciados en otro lugar. | ```let conjuntoDebil = new WeakSet();``` |

### [undefined](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined)

```javascript
// Ejemplo de variable no inicializada
let x;
console.log(x); // undefined

// Ejemplo de propiedad inexistente en un objeto
let obj = {};
console.log(obj.propiedadInexistente); // undefined
```

### [null](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null)

```javascript
// Ejemplo de asignación de null
let y = null;
console.log(y); // null

// Ejemplo práctico
let persona = {
  nombre: "Ana",
  edad: null
};

if (persona.edad === null) {
  console.log("La edad no está especificada."); // La edad no está especificada.
}
```

### Diferencias Clave entre `null` y `undefined`

- **undefined**: Es el valor predeterminado para variables que han sido declaradas pero no inicializadas. También se usa para propiedades de objetos que no existen.

```javascript
let a;
console.log(a); // undefined

let obj = {};
console.log(obj.propiedadInexistente); // undefined
```

- **null**: Es un valor que se asigna explícitamente para indicar que una variable no tiene un valor.

```javascript
let b = null;
console.log(b); // null
```

### [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)

- Introduccion
- Propiedades y Métodos
- Iterar sobre las propiedades de un objeto
- Relación con JSON
- Diferencias entre objetos y JSON

#### Introduccion

  En JavaScript, un objeto es una colección de pares clave-valor.

#### Propiedades y Métodos

- Creación y uso de metodos de objetos:

```javascript
// Ejemplo de Creación y uso de objetos
let persona = {
  nombre: "Juan",
  edad: 30,
  saludar: function() {
    console.log("Hola, mi nombre es " + this.nombre);
  }
};

persona.saludar(); // "Hola, mi nombre es Juan"
```

- Acceso a propiedades:

```javascript
// Ejemplo de acceso a propiedades de un objeto
console.log(persona.nombre);  // "Juan"
console.log(persona["edad"]); // 30
```

- Agregar y modificar propiedades:

```javascript
// Agregar y modificar propiedades:
persona.altura = 175; // agregando la nueva propiedasd "altura"
persona.edad = 31; // modificando "edad" de 30 a 31

console.log(persona.altura); // 175
console.log(persona["edad"]); // 31
```

- Eliminar propiedades:

```javascript
delete persona.altura;
console.log(persona.altura); // undefined
```

#### Iterar sobre las propiedades de un objeto

- Usando for...in:

```javascript
for (let clave in persona) {
  console.log(`${clave}: ${persona[clave]}`);
}
```

#### Relación con JSON

  JSON (JavaScript Object Notation) es un formato de texto ligero para el intercambio de datos.

- Conversión de objeto a JSON:

```javascript
let personaJSON = JSON.stringify(persona);
console.log(personaJSON); // '{"nombre":"Juan","edad":31,"altura":175}'
```

- Conversión de JSON a objeto:

```javascript
let nuevaPersona = JSON.parse(personaJSON);
console.log(nuevaPersona); // {nombre: "Juan", edad: 31, altura: 175}
```

#### Diferencias entre objetos y JSON

- Sintaxis:
  - Los objetos en JavaScript pueden contener funciones y utilizar comillas simples o dobles para las claves.
  - JSON es un formato de texto estricto que solo admite comillas dobles y no puede contener funciones.

```javascript
// Objeto en JavaScript
let obj = {
  'clave': "valor",
  metodo: function() {
    console.log("Esto es un método");
  }
};

// JSON
let json = '{"clave": "valor"}';
```

- Uso:
  - Los objetos se utilizan en tiempo de ejecución en el código JavaScript.
  - JSON se utiliza principalmente para la transferencia de datos entre el cliente y el servidor.
- Limitaciones:
  - JSON no puede incluir métodos (funciones).
  - JSON requiere comillas dobles para las claves y valores.

### [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)

  Son estructuras de datos que permiten almacenar múltiples valores en una sola variable. En JavaScript, los arrays son objetos especiales que tienen un conjunto de métodos y propiedades útiles para trabajar con colecciones de datos.

- Creación de Arrays

  1. Usando la sintaxis de corchetes:

      ```javascript
      let frutas = ["manzana", "banana", "naranja"];
      ```

  2. Usando el constructor Array:

      ```javascript
      let numeros = new Array(1, 2, 3, 4, 5);
      ```

  3. Usando el constructor Array:

      ```javascript
      let vacio = [];
      let fijo = new Array(10); // Array con 10 elementos undefined
      ```

- Acceso a Elementos del Array

```javascript
let primerFruta = frutas[0]; // "manzana"
```

- Métodos Comunes de Arrays

1. Agregar y remover elementos:
    - `push()`: Agrega uno o más elementos al final del array.
    - `pop()`: Elimina el último elemento del array.
    - `unshift()`: Agrega uno o más elementos al inicio del array.
    - `shift()`: Elimina el primer elemento del array.

    ```javascript
    frutas.push("uva");
    frutas.pop();
    frutas.unshift("kiwi");
    frutas.shift();
    ```

2. Iteración sobre Arrays:
    - `forEach()`: Ejecuta una función para cada elemento del array.

    ```javascript
    frutas.forEach(fruta => console.log(fruta));
    ```

    - `map()`: Crea un nuevo array con los resultados de aplicar una función a cada elemento del array original.

    ```javascript
    let frutasEnMayusculas = frutas.map(fruta => fruta.toUpperCase());
    ```

3. Buscar y Filtrar:
    - `find()`: Retorna el primer elemento que cumple con una condición.
    - `filter()`: Crea un nuevo array con todos los elementos que cumplen con una condición.

    ```javascript
    let frutaEncontrada = frutas.find(fruta => fruta === "banana");
    let frutasConA = frutas.filter(fruta => fruta.includes("a"));
    ```

4. Transformación y Reducción:
    - `reduce()`: Aplica una función a un acumulador y cada elemento del array (de izquierda a derecha) para reducirlo a un solo valor.

    ```javascript
    let suma = numeros.reduce((acumulador, numero) => acumulador + numero, 0);
    ```

5. Ordenar y Revertir:
    - `sort()`: Ordena los elementos del array.

    ```javascript
    let numerosOrdenados = numeros.sort((a, b) => a - b);
    ```

    - `reverse()`: Invierte el orden de los elementos del array.

    ```javascript
    let numerosRevertidos = numeros.reverse();
    ```

- Propiedades Útiles de Arrays

  - `length`: Devuelve el número de elementos en un array.

  ```javascript
  let longitud = frutas.length;
  ```

### [Function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function)

Son bloques de código diseñados para realizar una tarea particular.

En JavaScript, las funciones son ciudadanos de primera clase, lo que significa que pueden ser tratadas como cualquier otra variable: pueden ser asignadas a variables, pasadas como argumentos a otras funciones, y devueltas por otras funciones.

- Declaración de Funciones
- Parámetros y Argumentos

#### Declaración de Funciones

Existen varias formas de crear funciones en JavaScript:

- Forma Declarativas

  ```javascript
  function saludar(nombre) {
    return `Hola, ${nombre}`;
  }
  ```

- Forma Expresada

    ```javascript
    const sumar = function(a, b) {
      return a + b;
    };
    ```

- Forma de Funcion Flecha (Arrow Function)

  ```javascript
  const restar = (a, b) => a - b;
  ```

#### Parámetros y Argumentos

Las funciones al ser mecanismos para definir bloques logicos permiten la creacion de un contexto independiente en el que podemos crear o inyectar variables

- Parametros inyectados

  Puedes asignar parámetros a una funcion para que trabaje con ellos en su contexto interno.

  ```javascript
  function multiplicar(a, b) {
    return a * b;
  }
  ```

- Parámetros con valor por Defecto

  Puedes asignar valores por defecto a los parámetros en caso de que no se pase ningún valor al invocar la función.

  ```javascript
  function multiplicar(a, b = 1) {
    return a * b;
  }
  ```

- Operador Rest

    Permite a una función aceptar un número indefinido de argumentos como un array.

    ```javascript
    function sumarTodos(...numeros) {
      return numeros.reduce((acumulador, numero) => acumulador + numero, 0);
    }
    ```

### [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)

```javascript
// Ejemplo de uso de Date
let ahora = new Date();
console.log(ahora); // Fecha y hora actual

let fechaEspecifica = new Date('2024-06-06');
console.log(fechaEspecifica); // 2024-06-06T00:00:00.000Z

console.log(ahora.getFullYear()); // Año actual
console.log(ahora.getMonth() + 1); // Mes actual (0-11, por eso se suma 1)
console.log(ahora.getDate()); // Día del mes
```

### [RegExp](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp)

```javascript
// Ejemplo de uso de expresiones regulares
let regex = /hola/i; // 'i' hace la búsqueda insensible a mayúsculas/minúsculas
let texto = "Hola, mundo!";

console.log(regex.test(texto)); // true
console.log(texto.match(regex)); // ["Hola"]
```

### [Map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map)

```javascript
// Ejemplo de uso de Map
let mapa = new Map();
mapa.set('clave1', 'valor1');
mapa.set('clave2', 'valor2');

console.log(mapa.get('clave1')); // valor1
console.log(mapa.has('clave2')); // true

mapa.forEach((valor, clave) => {
  console.log(clave + ': ' + valor);
});
// clave1: valor1
// clave2: valor2
```

### [Set](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set)

```javascript
// Ejemplo de uso de Set
let conjunto = new Set([1, 2, 3, 4, 5, 5, 5]); // Valores duplicados no se añaden

console.log(conjunto); // Set { 1, 2, 3, 4, 5 }

conjunto.add(6);
console.log(conjunto); // Set { 1, 2, 3, 4, 5, 6 }

conjunto.delete(3);
console.log(conjunto); // Set { 1, 2, 4, 5, 6 }
```

### [WeakMap](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakMap)

```javascript
// Ejemplo de uso de WeakMap
let objeto1 = { nombre: "Objeto 1" };
let objeto2 = { nombre: "Objeto 2" };

let mapaDebil = new WeakMap();
mapaDebil.set(objeto1, 'valor1');
mapaDebil.set(objeto2, 'valor2');

console.log(mapaDebil.get(objeto1)); // valor1
console.log(mapaDebil.get(objeto2)); // valor2

// Si los objetos se eliminan, también se eliminan del WeakMap
objeto1 = null; // objeto1 ya no es accesible y puede ser recogido por el GC
```

### [WeakSet](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakSet)

```javascript
// Ejemplo de uso de WeakSet
let objetoA = { nombre: "Objeto A" };
let objetoB = { nombre: "Objeto B" };

let conjuntoDebil = new WeakSet();
conjuntoDebil.add(objetoA);
conjuntoDebil.add(objetoB);

console.log(conjuntoDebil.has(objetoA)); // true
console.log(conjuntoDebil.has(objetoB)); // true

// Si los objetos se eliminan, también se eliminan del WeakSet
objetoA = null; // objetoA ya no es accesible y puede ser recogido por el GC
```
