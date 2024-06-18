# Datos primitivos en JavaScript y Variables

## Tipos de Datos Primitivos

| Tipo | Descripción | Ejemplo |
|-|-|-|
| **Number** | Representa valores numéricos, tanto enteros como de punto flotante. | ```let numero = 42;``` |
| **String** | Representa una cadena de caracteres. | ```let texto = "Hola, Mundo!";``` |
| **Boolean** | Representa un valor verdadero (true) o falso (false). | ```let esVerdad = true;``` |
| **Symbol** | Representa un valor único e inmutable. Se usa para identificar propiedades únicas de objetos. | ```let id = Symbol('id');``` |
| **BigInt** | Representa números enteros grandes que exceden el límite de los números Number estándar. | ```let numeroGrande = 1234567890123456789012345678901234567890n;``` |

### [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)

```javascript
// Ejemplo de operaciones básicas con Number
let numero1 = 10;
let numero2 = 5;

let suma = numero1 + numero2;
let resta = numero1 - numero2;
let multiplicacion = numero1 * numero2;
let division = numero1 / numero2;

console.log("Suma:", suma);               // Suma: 15
console.log("Resta:", resta);             // Resta: 5
console.log("Multiplicación:", multiplicacion); // Multiplicación: 50
console.log("División:", division);       // División: 2
```

Ademas de poder realizar operaciones aritmeticas con ellos, el tipo Number tiene asociados un conjunto de metodos que pueden llamarse, de manera estatica desde el tipo Number o desde la instancia representada en alguna variable de tipo Number.

- Ejemplo 1: Convertir String a Number

  ```javascript
  let cadena = "42";
  let numero = Number(cadena);

  console.log(numero); // 42
  console.log(typeof numero); // number
  ```

- Ejemplo 2: Métodos toFixed y toPrecision

  ```javascript
  let numero = 3.14159265359;

  // toFixed: Redondea el número a un número específico de decimales
  let redondeado = numero.toFixed(2);
  console.log(redondeado); // "3.14"

  // toPrecision: Formatea el número a una longitud específica
  let conPrecision = numero.toPrecision(4);
  console.log(conPrecision); // "3.142"
  ```

- Ejemplo 3: Comprobación de NaN (Not-a-Number)

  ```javascript
  let noNumero = "Hola" * 3; // Esto dará NaN

  if (isNaN(noNumero)) {
    console.log("No es un número"); // No es un número
  } else {
    console.log("Es un número");
  }
  ```

- Ejemplo 4: Valores Máximos y Mínimos

  ```javascript
  // Número máximo representable en JavaScript
  let max = Number.MAX_VALUE;
  console.log("Número máximo:", max); // 1.7976931348623157e+308

  // Número mínimo representable en JavaScript
  let min = Number.MIN_VALUE;
  console.log("Número mínimo:", min); // 5e-324
  ```

  - Ejemplo 5: Convertir a Entero (parseInt)

  ```javascript
  let cadena = "123.45";
  let entero = parseInt(cadena);

  console.log(entero); // 123
  ```

- Ejemplo 6: Convertir a Número de Punto Flotante (parseFloat)

  ```javascript
  let cadena = "123.45";
  let flotante = parseFloat(cadena);

  console.log(flotante); // 123.45
  ```

- Ejemplo 7: Método toExponential

  ```javascript
  let numero = 123456;
  let exponencial = numero.toExponential(2);

  console.log(exponencial); // "1.23e+5"
  ```

- Ejemplo 8: Comparar números con Number.isFinite y Number.isInteger

  ```javascript
  let finito = 123;
  let infinito = Infinity;
  let entero = 456;
  let decimal = 456.78;

  // Comprobar si es un número finito
  console.log(Number.isFinite(finito));    // true
  console.log(Number.isFinite(infinito));  // false

  // Comprobar si es un número entero
  console.log(Number.isInteger(entero));   // true
  console.log(Number.isInteger(decimal));  // false
  ```

- Ejemplo 9: Rango Seguro de Números Enteros

  ```javascript
  let seguro = Number.MAX_SAFE_INTEGER;
  let inseguro = seguro + 1;

  console.log("Máximo entero seguro:", seguro); // 9007199254740991
  console.log("¿Es seguro?", Number.isSafeInteger(seguro)); // true
  console.log("¿Es seguro?", Number.isSafeInteger(inseguro)); // false
  ```

- Ejemplo 10: Convertir Booleanos a Número

  ```javascript
  let verdadero = true;
  let falso = false;

  console.log(Number(verdadero)); // 1
  console.log(Number(falso));     // 0
  ```

### [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)

```javascript
// Ejemplo de manipulación de cadenas
let saludo = "Hola";
let nombre = "Juan";

let mensaje = saludo + ", " + nombre + "!";
console.log(mensaje); // Hola, Juan!

// Usando template literals
let mensajeTemplate = `${saludo}, ${nombre}!`;
console.log(mensajeTemplate); // Hola, Juan!
```

Ademas de las operaciones de concatenacion de cadenas de texto (string), el tipo String tiene metodos asociados que pueden sernos de mucha utilidad.

- Ejemplo 1: Convertir a Mayúsculas y Minúsculas

```javascript
let texto = "Hola Mundo";

let mayusculas = texto.toUpperCase();
let minusculas = texto.toLowerCase();

console.log(mayusculas); // "HOLA MUNDO"
console.log(minusculas); // "hola mundo"
```

- Ejemplo 2: Obtener la Longitud de una Cadena

```javascript
let texto = "Hola Mundo";
let longitud = texto.length;

console.log("Longitud:", longitud); // Longitud: 10

```

- Ejemplo 3: Acceder a un Carácter Específico

```javascript
let texto = "Hola Mundo";
let caracter = texto.charAt(5);

console.log("Carácter en la posición 5:", caracter); // "M"
```

- Ejemplo 4: Buscar una Subcadena (indexOf y lastIndexOf)

```javascript
let texto = "Hola Mundo, Hola JavaScript";

let posicion = texto.indexOf("Hola");
let ultimaPosicion = texto.lastIndexOf("Hola");

console.log("Primera aparición de 'Hola':", posicion); // 0
console.log("Última aparición de 'Hola':", ultimaPosicion); // 12
```

- Ejemplo 5: Verificar la Presencia de una Subcadena (includes)

```javascript
let texto = "Hola Mundo";

let contieneHola = texto.includes("Hola");
let contieneAdios = texto.includes("Adiós");

console.log("Contiene 'Hola':", contieneHola); // true
console.log("Contiene 'Adiós':", contieneAdios); // false
```

- Ejemplo 6: Extraer una Subcadena (substring, slice, substr)

```javascript
let texto = "Hola Mundo";

// substring(inicio, fin)
let subcadena = texto.substring(5, 10);
console.log("substring:", subcadena); // "Mundo"

// slice(inicio, fin)
let fragmento = texto.slice(5, 10);
console.log("slice:", fragmento); // "Mundo"

// substr(inicio, longitud)
let parte = texto.substr(5, 5);
console.log("substr:", parte); // "Mundo"
```

- Ejemplo 7: Reemplazar Subcadenas (replace)

```javascript
let texto = "Hola Mundo, Hola JavaScript";
let nuevoTexto = texto.replace("Hola", "Adiós");

console.log(nuevoTexto); // "Adiós Mundo, Hola JavaScript"

// Usando una expresión regular para reemplazar todas las ocurrencias
let reemplazoGlobal = texto.replace(/Hola/g, "Adiós");
console.log(reemplazoGlobal); // "Adiós Mundo, Adiós JavaScript"
```

- Ejemplo 8: Dividir una Cadena en un Array (split)

```javascript
let texto = "Hola, Mundo, JavaScript";
let palabras = texto.split(", ");

console.log(palabras); // ["Hola", "Mundo", "JavaScript"]
```

- Ejemplo 9: Eliminar Espacios en Blanco (trim)

```javascript
let texto = "    Hola Mundo    ";
let textoSinEspacios = texto.trim();

console.log("Texto sin espacios:", textoSinEspacios); // "Hola Mundo"
```

- Ejemplo 10: Repetir una Cadena (repeat)

```javascript
let texto = "Hola ";
let textoRepetido = texto.repeat(3);

console.log(textoRepetido); // "Hola Hola Hola "
```

- Ejemplo 11: Convertir un Número a Cadena

```javascript
let numero = 123;
let texto = numero.toString();

console.log(texto); // "123"
console.log(typeof texto); // "string"
```

- Ejemplo 12: Plantillas Literales

```javascript
let nombre = "Juan";
let edad = 30;

let saludo = `Hola, mi nombre es ${nombre} y tengo ${edad} años.`;
console.log(saludo); // "Hola, mi nombre es Juan y tengo 30 años."
```

- Ejemplo 13: Buscar Coincidencias con Expresiones Regulares (match)

```javascript
let texto = "Hola Mundo, Hola JavaScript";
let coincidencias = texto.match(/Hola/g);

console.log(coincidencias); // ["Hola", "Hola"]
```

- Ejemplo 14: Validar si una Cadena Empieza o Termina con un Substring (startsWith, endsWith)

```javascript
let texto = "Hola Mundo";

let empiezaConHola = texto.startsWith("Hola");
let terminaConMundo = texto.endsWith("Mundo");

console.log("Empieza con 'Hola':", empiezaConHola); // true
console.log("Termina con 'Mundo':", terminaConMundo); // true
```

### [Boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)

```javascript
// Ejemplo de uso de Boolean en una estructura de control
let esMayorDeEdad = true;

if (esMayorDeEdad) {
  console.log("Es mayor de edad."); // Es mayor de edad.
} else {
  console.log("No es mayor de edad.");
}

// Comparaciones
let a = 10;
let b = 20;

console.log(a > b);  // false
console.log(a < b);  // true
console.log(a == b); // false
```

### [Symbol](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol)

```javascript
// Ejemplo de uso de Symbol para propiedades únicas de objetos
let sym1 = Symbol('descripcion');
let sym2 = Symbol('descripcion');

let persona = {
  [sym1]: 'valor único 1',
  [sym2]: 'valor único 2'
};

console.log(persona[sym1]); // valor único 1
console.log(persona[sym2]); // valor único 2
console.log(sym1 === sym2); // false
```

### [BigInt](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt)

```javascript
// Ejemplo de operaciones con BigInt
let numeroGrande1 = 1234567890123456789012345678901234567890n;
let numeroGrande2 = 9876543210987654321098765432109876543210n;

let sumaGrande = numeroGrande1 + numeroGrande2;
let multiplicacionGrande = numeroGrande1 * numeroGrande2;

console.log("Suma de BigInt:", sumaGrande); // Suma de BigInt: 11111111101111111110111111111011111111100n
console.log("Multiplicación de BigInt:", multiplicacionGrande); // Multiplicación de BigInt: 1219326313565005315910684318259872021410n
```
