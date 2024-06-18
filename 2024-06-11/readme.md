# Estructuras lógicas - Operadores y Condicionales

- Operadores
- Estructura lógica - Switch
- Comparación entre `if`, `else if`, `else` y `switch`
- Buenas practicas

## Operadores

- Operadores aritméticos
- Operadores de comparación
- Operadores lógicos
- Operadores asociativos
- Operadores de concatenación

### Operadores aritméticos

Se usan para realizar operaciones matemáticas.

- Suma: `+`
- Resta: `-`
- Multiplicación: `*`
- División: `/`
- Módulo: `%`
- Exponenciación: `**`

```javascript
let a = 10;
let b = 3;
let suma = a + b; // 13
let resta = a - b; // 7
```

### Operadores de comparación

Comparan dos valores y devuelven un valor booleano.

- Igualdad: `==`
- Igualdad estricta: `===`
- Desigualdad: `!=`
- Desigualdad estricta: `!==`
- Mayor que: `>`
- Menor que: `<`
- Mayor o igual que: `>=`
- Menor o igual que: `<=`

```javascript
let x = 5;
let y = "5";
console.log(x == y); // true
console.log(x === y); // false
```

### Operadores lógicos

Se usan para combinar valores booleanos.

- AND lógico: `&&`
- OR lógico: `||`
- NOT lógico: `!`

```javascript
let verdadero = true;
let falso = false;
console.log(verdadero && falso); // false
console.log(verdadero || falso); // true
```

### Operadores asociativos

Determinan el orden en que se evalúan las expresiones.

- Izquierda a derecha: `*`, `/`, `%`, `+`, `-`
- Derecha a izquierda: `=`, `+=`, `-=`, `*=`, `/=`, `%=`

```javascript
let resultado = 10 + 20 * 3; // 70 (no 90)
let x = 10;
x += 5; // 15 (equivalente a x = x + 5)
```

### Operadores de concatenación

Se usa para unir cadenas de texto.

```javascript
let nombre = "Juan";
let apellido = "Pérez";
let nombreCompleto = nombre + " " + apellido; // "Juan Pérez"
```

## Estructura lógica - Switch

    Se utiliza para realizar diferentes acciones basadas en diferentes condiciones. Es especialmente útil cuando se comparan múltiples valores de la misma variable.

Esta estructura lógica de control introduce 4 nuevas palabras reservadas del lenguaje como son: `switch`, `case`, `break` y `default`

1. Sintaxis Básica

```javascript
switch (expresión) {
    case valor1:
        // Código a ejecutar si la expresión es igual a valor1
        break;
    case valor2:
        // Código a ejecutar si la expresión es igual a valor2
        break;
    default:
        // Código a ejecutar si la expresión no coincide con ningún valor
}
```

2. Desglose de Componentes

- `expresión`: La expresión que se evalúa una vez y se compara con los valores en cada caso.
- `case` valor: Un bloque de código que se ejecuta si la expresión coincide con el valor.
- `break`: Se utiliza para detener la ejecución de más comprobaciones. Si se omite, se ejecutarán los casos siguientes sin importar sus valores.
- `default`: Un bloque de código que se ejecuta si la expresión no coincide con ningún valor. Es opcional.

```javascript
let dia = 4;
switch (dia) {
    case 1:
        console.log("Lunes");
        break;
    case 2:
        console.log("Martes");
        break;
    case 3:
        console.log("Miércoles");
        break;
    case 4:
        console.log("Jueves");
        break;
    case 5:
        console.log("Viernes");
        break;
    case 6:
        console.log("Sábado");
        break;
    case 7:
        console.log("Domingo");
        break;
    default:
        console.log("Día no válido");
}
```

## Comparacion entre condicionales

- `if`: Se usa para evaluar una condición y ejecutar un bloque de código si la condición es verdadera.
- `else if`: Se usa después de un if para evaluar una nueva condición si la primera es falsa.
- `else`: Se usa al final de una estructura if para ejecutar un bloque de código si todas las condiciones anteriores son falsas.
- `switch`: Se usa para seleccionar entre múltiples bloques de código basados en el valor de una expresión.

## Buenas practicas

- **Claridad en las condiciones**: Asegúrate de que las condiciones sean claras y comprensibles.
- **Evitar redundancias**: Usa estructuras else if en lugar de múltiples if independientes si están relacionadas.
- **Utilizar switch para múltiples condiciones**: Si estás evaluando la misma variable o expresión con múltiples valores posibles, considera usar switch.
- **Comentar el código**: Agrega comentarios para explicar la lógica y el propósito de las condiciones.

## **AMPLIACION DE CLASE** 2024-06-12

### Sobre el operador de modulo `%`

- El operador `%` en JavaScript es el operador de módulo o residuo. Este operador se utiliza para obtener el resto de una división entre dos números. Aquí tienes una explicación de cómo funciona:

#### Sintaxis

```javascript
let resultado = a % b;
```

- `a` es el dividendo.
- `b` es el divisor.
- resultado es el residuo de la división de `a` entre `b`.

#### Ejemplos de uso

- Números positivos:

  ```javascript
  console.log(10 % 3); // Salida: 1
  ```

  Aquí, *10* dividido por *3* da un cociente de *3* y un residuo de *1*.
  </br></br>
- Números negativos:

  ```javascript
  console.log(-10 % 3); // Salida: -1
  ```

  Cuando el dividendo es negativo, el residuo toma el signo del dividendo. Aquí, *-10* dividido por *3* da un cociente de *-4* y un residuo de *-1*.
  </br></br>
- Divisores negativos:

  ```javascript
  console.log(10 % -3); // Salida: 1
  ```

  En este caso, el residuo sigue siendo *1*, ya que el operador de módulo en JavaScript conserva el signo del dividendo.
  </br></br>
- Ambos negativos:

  ```javascript
  console.log(-10 % -3); // Salida: -1
  ```

  Aquí, tanto el dividendo como el divisor son negativos, y el residuo es *-1*.

#### Usos comunes

- Determinar si un número es par o impar:

  ```javascript
  let numero = 4;
  if (numero % 2 === 0) {
      console.log(`${numero} es par`);
  } else {
      console.log(`${numero} es impar`);
  }
  ```

- Ciclos repetitivos con contadores:

  ```javascript
  for (let i = 0; i < 10; i++) {
      if (i % 3 === 0) {
          console.log(`${i} es múltiplo de 3`);
      }
  }
  ```

- Operaciones circulares en arrays:

  ```javascript
  let arr = [1, 2, 3, 4, 5];
  let index = 7 % arr.length; // arr.length es 5, así que index será 2
  console.log(arr[index]); // Salida: 3
  ```

En resumen, el operador `%` en JavaScript devuelve el residuo de una división y es útil en diversas situaciones que implican ciclos, verificaciones de paridad y operaciones que necesitan trabajar con restos de divisiones.
