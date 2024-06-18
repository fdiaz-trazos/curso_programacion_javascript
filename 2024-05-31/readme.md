# Introducción a la programación web 02

## JavaScript, qué es y para qué sirve

### Qué es?

<details>

JavaScript (abreviado comúnmente JS) es un lenguaje de programación interpretado, dialecto del estándar **ECMAScript**. Se define como orientado a objetos,​ basado en prototipos, imperativo, débilmente tipado y dinámico.

Se utiliza principalmente del lado del cliente, implementado como parte de un navegador web permitiendo mejoras en la interfaz de usuario y páginas web dinámicas y JavaScript del lado del servidor (Server-side JavaScript o SSJS). Su uso en aplicaciones externas a la web, por ejemplo en documentos PDF, aplicaciones de escritorio (mayoritariamente widgets) es también significativo.

<small><a href="https://es.wikipedia.org/wiki/JavaScript" target="_blank">Fuente Wikipedia</a></small>

</details>

### Caracteristicas

<details>

- **Lenguaje de Alto Nivel**: JavaScript es un lenguaje de programación de alto nivel, lo que significa que está más cerca del lenguaje humano y lejos del lenguaje máquina. Esto lo hace más fácil de aprender y usar.

- **Interpretado**: JavaScript no necesita ser compilado antes de ser ejecutado. Los navegadores web tienen motores JavaScript integrados (como V8 en Google Chrome) que interpretan y ejecutan el código JavaScript directamente.

- **Lenguaje Dinámico**: JavaScript es un lenguaje dinámico, lo que significa que los tipos de las variables se determinan en tiempo de ejecución y no en tiempo de compilación.

- **Basado en Prototipos**: A diferencia de otros lenguajes orientados a objetos que utilizan clases, JavaScript utiliza prototipos para herencia.

- **Multiparadigma**: JavaScript soporta varios estilos de programación, incluyendo la programación imperativa, funcional y orientada a objetos.

</details>

### Para qué sirve?

<details>
<summary><strong>Desarrollo Web del Lado del Cliente</strong></summary>

- Interactividad
- Manipulación del DOM
- Validación de Formularios
- Autenticacion de usuarios (del lado del cliente)

</details>

<details>
<summary><strong>Desarrollo Web del Lado del Servidor</strong></summary>

- [NodeJS](https://nodejs.org/)
- [Deno](https://deno.com/)
- [Bun](https://bun.sh/)

</details>

<details>
<summary><strong>Desarrollo de Aplicaciones Móviles</strong></summary>

- [React Native](https://reactnative.dev/)

</details>

<details>
<summary><strong>Desarrollo de Juegos</strong></summary>

- [Phaser](https://phaser.io/)

- [Three.js](https://threejs.org/)

    [Rob Payot recrea de la gamecube "The Legend of Zelda: The Wind Waker" con Three.js](https://wind-waker-js.vercel.app/)

</details>

<details>
<summary><strong>Internet de las Cosas (IoT)</strong></summary>

- [Johnny-Five](https://johnny-five.io/)

</details>

## JavaScript vs ECMAScript vs Vanilla JS

- **JavaScript**:

        lenguaje de programación utilizado principalmente para crear contenido dinámico en sitios web

- **ECMAScript**:

        especificación del lenguaje de programación estándar mantenida por Ecma International.

- **VanillaJS**:

        término coloquial que se refiere al uso de JavaScript puro, sin bibliotecas ni frameworks adicionales.

## Contexto historico sobre la creacion del standard ECMAscript

- [ECMA-262](https://ecma-international.org/publications-and-standards/standards/ecma-262/)

### Orígenes y Desarrollo de JavaScript

- 1995: Creación de JavaScript

        Brendan Eich: En mayo de 1995, Brendan Eich, un programador de Netscape Communications Corporation, creó un lenguaje de scripting en solo 10 días. Originalmente se llamó Mocha, luego LiveScript, y finalmente JavaScript debido a una estrategia de marketing que aprovechó la popularidad de Java en ese momento.

        Netscape Navigator: JavaScript se integró en el navegador Netscape Navigator 2.0. Su propósito era permitir a los desarrolladores web crear páginas más dinámicas e interactivas.

- 1996: Adopción por Microsoft

        JScript: En respuesta al éxito de JavaScript, Microsoft desarrolló su propia versión llamada JScript, que fue incluida en Internet Explorer 3.0 en 1996. Aunque JScript y JavaScript eran muy similares, las diferencias entre los dos causaron problemas de compatibilidad entre navegadores.

## Establecimiento del Estándar ECMAScript (Versiones de ESx)

- 1997: Estandarización Inicial

      ECMA-262: Para resolver los problemas de compatibilidad y establecer un estándar común, Netscape presentó JavaScript a Ecma International. En 1997, Ecma International publicó la primera edición de la especificación ECMA-262, que definió el estándar ECMAScript.

      Primer Estándar: Esta primera edición se basó en JavaScript 1.1 y estableció las bases para futuras versiones.

- 1998-1999: Evolución Temprana

      Segunda Edición (1998): La segunda edición de ECMAScript no introdujo cambios técnicos significativos pero alineó el estándar con la norma ISO/IEC 16262.

      Tercera Edición (1999): La tercera edición añadió características importantes como expresiones regulares, mejores cadenas de caracteres, manejo de excepciones y una mayor definición del modelo de objetos.

- 2000s: Confusión y Fragmentación

      Cuarta Edición Cancelada: A principios de los 2000, se planeó una cuarta edición ambiciosa con muchas características nuevas. Sin embargo, debido a desacuerdos entre los principales actores (principalmente Microsoft y otras partes interesadas), la cuarta edición fue abandonada en 2008.

      JavaScript 2.0: Mientras tanto, Netscape y Mozilla continuaron desarrollando su propia versión extendida de JavaScript, llamada JavaScript 2.0, basada en las ideas de la cuarta edición.

- 2009: ECMAScript 5 (ES5)

      Quinta Edición: En diciembre de 2009, se publicó la quinta edición del estándar ECMAScript, conocida como ES5. Esta versión añadió características como el "strict mode" (modo estricto), métodos para arrays, JSON nativo, y más, que mejoraron la usabilidad y el rendimiento del lenguaje.

- 2015: ECMAScript 6 (ES6/ES2015)

      Revolución del Lenguaje: La sexta edición, conocida como ES6 o ECMAScript 2015, fue una actualización masiva que introdujo características modernas como let y const, clases, módulos, funciones flecha, promesas, y más.

      Publicación Anual: Después de ES6, se decidió que habría actualizaciones anuales menores, en lugar de grandes saltos, para mantener el lenguaje evolutivo y manejable.

- 2016 en adelante: ES2016 y más

        Actualizaciones Incrementales: Cada año, nuevas ediciones han sido lanzadas (ES2016, ES2017, etc.), cada una introduciendo pequeñas pero importantes mejoras y características como async/await en ES2017.

_**Actualmente la version estable del estandar es la (ES14/ES2023), Ecma Intenational continua brindando soporte a [TC39](https://tc39.es/), nombre con el que se conoce al grupo encargado de evaluar las propuestas de actualizacion del estandar ECMA-262**_

_**Al ser un estandar que debe estar disponible de manera publica para todos tiene un usuario con repositorios en [GitHub](https://github.com/tc39) donde se van publicando las propuestas de nuevas funcionalidades que se solicitan ingresar al estandar**_

## Frameworks: Qué son y los más demandados en empresas

Estructuras predefinidas que proporcionan un entorno de trabajo coherente y reutilizable para desarrollar aplicaciones. Estos facilitan la creación de software al proporcionar componentes y herramientas que permiten resolver problemas comunes de desarrollo de manera más eficiente y con menos esfuerzo.

Los frameworks de JavaScript se dividen generalmente en dos categorías principales: frameworks para el desarrollo del lado del cliente (front-end) y frameworks para el desarrollo del lado del servidor (back-end).

### Frameworks de JavaScript más demandados en empresas

1. Front-end Frameworks:

      **React**: Creado por Facebook, es una biblioteca (a menudo considerada un framework por su ecosistema) para construir interfaces de usuario. Su enfoque en componentes reutilizables y su rendimiento eficiente lo han hecho muy popular.

      **Angular**: Desarrollado por Google, es un framework completo para aplicaciones de una sola página (SPA). Ofrece un conjunto completo de herramientas y características, como inyección de dependencias, dos-way data binding y una robusta estructura de proyecto.

      **Vue.js**: Es un framework progresivo para construir interfaces de usuario. Vue se destaca por su facilidad de integración y su capacidad para manejar proyectos desde pequeñas partes de una página hasta aplicaciones completas.

2. Back-end Frameworks:

      **Express.js**: Un framework minimalista y flexible para aplicaciones web y APIs. Es conocido por su simplicidad y su potente conjunto de características para manejar solicitudes HTTP.

      **NestJS**: Un framework progresivo para construir aplicaciones Node.js escalables y eficientes. Está inspirado en Angular y usa TypeScript, lo que lo hace adecuado para proyectos grandes y complejos.

      **Meteor.js**: Un framework de tiempo real para aplicaciones web y móviles. Permite compartir el mismo código entre el cliente y el servidor, facilitando el desarrollo rápido y la sincronización en tiempo real.

3. Full-Stack Frameworks:

      **Next.js**: Basado en React, es un framework para aplicaciones web con renderizado del lado del servidor (SSR) y generación estática de sitios. Es conocido por su facilidad para crear aplicaciones optimizadas para SEO y su excelente rendimiento.

      **Nuxt.js**: Similar a Next.js pero basado en Vue.js. Proporciona características para el desarrollo de aplicaciones universales, renderizado del lado del servidor y generación estática de sitios.

## Anecdota sobre la creacion de JavaScript

- [Brendan Eich](https://en.wikipedia.org/wiki/Brendan_Eich) creo JavaScript en 10 dias! para incluirlo en [Netscape Navigator 2.0](https://en.wikipedia.org/wiki/Netscape_Navigator_2) un browser en 1995.

![Thanks Javascript](assets/meme_javascript.avif)

- por que se da esto?

```javascript
0.5+0.1==0.6
true
0.1+0.2==0.3 // 0.1+0.2 es 0.30000000000000004, lo que es distinto de 0.3
false
```

- por que se da este otro caso?

```javascript
[]+[]
""
[]+{}
"[object Object]"
{}+[]
0
```
