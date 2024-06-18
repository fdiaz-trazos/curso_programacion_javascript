# Estructuras lógicas - Boolean y operaciones logicas

- Tipo Boolean y valores booleanos
- Operaciones Lógicas
- Condicionales o bloques lógicos `if`, `else if` y `else`

## Tipo Boolean y valores booleanos

El tipo `Boolean` o booleano es un tipo de datos que solo puede tener dos valores: `true` o `false`. Se utiliza para representar condiciones lógicas.

```javascript
// Ejemplo de valores booleanoes
let esMayorDeEdad = true;
let tienePermiso = false;
```

El objeto `Boolean` puede usarse para convertir cualquier argumento al tipo booleano, esto teniendo en cuenta la coercion de tipos implicita o explicita del lenguaje

```javascript
let num = 0;
let boolNum = Boolean(num); // boolNum será false
```

## Operaciones Lógicas

JavaScript proporciona varios operadores para trabajar con valores booleanos:

- Operador NOT `!`
- Operador AND `&&`
- Operador OR `||`

### Operador NOT `!`

Este operador niega el valor booleano de una expresión.

```javascript
let esMayorDeEdad = true;
let esMenorDeEdad = !esMayorDeEdad; // esMenorDeEdad será false
```

### Operador AND `&&`

Este operador devuelve true si ambas expresiones son verdaderas, de lo contrario, devuelve false.

```javascript
let esMayorDeEdad = true;
let tienePermiso = false;
let puedeEntrar = esMayorDeEdad && tienePermiso; // será false
```

### Operador OR `||`

Este operador devuelve true si al menos una de las expresiones es verdadera.

```javascript
let esMayorDeEdad = true;
let tienePermiso = false;
let puedeEntrar = esMayorDeEdad || tienePermiso; // será true

```

## Condicionales o bloques lógicos `if`, `else if` y `else`

Son fundamentales en programación sin importar el lunguaje que se utilice.

Te permiten controlar el flujo de tu programa basado en condiciones específicas.

En JavaScript, utilizamos principalmente tres tipos de bloques lógicos:

- if
- else if
- else

### if

El bloque if te permite ejecutar un bloque de código si una condición es verdadera.

```javascript
if (condición) {
    // Código a ejecutar si la condición es verdadera
}
```

### else if

El bloque else if te permite evaluar múltiples condiciones.

Si la condición de un if anterior es falsa, se evaluará la siguiente condición en un bloque else if.

```javascript
if (condición1) {
    // Código a ejecutar si la condición1 es verdadera
} else if (condición2) {
    // Código a ejecutar si la condición2 es verdadera
} else {
    // Código a ejecutar si ninguna de las condiciones anteriores es verdadera
}
```

### else

El bloque else te permite ejecutar un bloque de código si ninguna de las condiciones anteriores es verdadera.

```javascript
if (condición) {
    // Código a ejecutar si la condición es verdadera
} else {
    // Código a ejecutar si la condición es falsa
}
```

Veamos algunos ejemplos de cómo podemos utilizar el tipo booleano y las operaciones lógicas en JavaScript:

```javascript
// Ejemplo de uso de tipo booleano y bloque if
let esDiaSoleado = true;
if (esDiaSoleado) {
    console.log("Es un buen día para salir.");
} else {
    console.log("Mejor quedarse en casa.");
}
```

```javascript
// Ejemplo de uso de operador de AND
let edad = 20;
let tieneCarnet = true;
if (edad >= 18 && tieneCarnet) {
    console.log("Puede conducir.");
} else {
    console.log("No puede conducir.");
}
```

```javascript
// Ejemplo de uso de operador de OR
let esLunes = false;
let esViernes = true;
if (esLunes || esViernes) {
    console.log("¡Es el inicio o fin de semana!");
} else {
    console.log("Es un día laborable.");
}
```
