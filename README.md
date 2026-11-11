# Curso básico de JavaScript

Este repositorio contiene una serie de ejercicios y ejemplos prácticos para aprender los fundamentos de JavaScript. Cada archivo se centra en un concepto específico del lenguaje. También tiene un proyecto práctico de un sistema de restaurante.

## 📂 Estructura del Proyecto

## Parte 1: Fundamentos y Ejercicios

El proyecto está organizado de la siguiente manera:

### 1. `index.html`

Es el punto de entrada principal. Se utiliza para cargar y ejecutar los scripts en el navegador. Actualmente está configurado para cargar `scripts.js`.

> **Nota:** Para probar otros archivos (como `array.js` u `objects.js`), debes cambiar la ruta en la etiqueta `<script src="...">`.

### 2. `scripts.js` (Fundamentos)

Contiene las bases del lenguaje:

- **Tipos de datos:** Primitivos (number, string, boolean, null, undefined) y complejos (Array, Object).
- **Variables:** Uso de `var`, `let` y `const`.
- **Operadores:** Aritméticos, de asignación, comparación y lógicos.
- **Coerción de tipos:** Conversión automática y manual de datos.
- **Estructuras de control:** Condicionales (`if`, `else`, `switch`) y bucles (`for`).

### 3. `funciones.js` (Funciones Tradicionales)

Explora las diferentes formas de declarar y usar funciones:

- Parámetros y retorno de valores.
- Funciones como ciudadanos de primera clase.
- Funciones anónimas y funciones autoinvocadas (IIFE).
- Ámbito (Scope) de las variables.

### 4. `arrow.js` (Funciones Flecha)

Introducción a la sintaxis moderna de funciones:

- Declaración de _Arrow Functions_ (`=>`).
- Retornos implícitos y sintaxis simplificada.

### 5. `objects.js` (Objetos)

Trata sobre la estructura de datos clave-valor:

- Creación de objetos literales.
- Acceso a propiedades (notación de punto y corchetes).
- Métodos útiles como `Object.keys()` y `Object.values()`.

### 6. `array.js` (Arreglos y Métodos)

Se enfoca en la manipulación de listas de datos:

- Métodos básicos: `push()`, `pop()`, `slice()`.
- **Métodos de orden superior:**
  - `forEach()`: Para iterar elementos.
  - `map()`: Para transformar arrays.
  - `filter()`: Para crear nuevos arrays basados en condiciones.

## Parte 2: 🚀 Proyecto Final - Restaurant System

Ubicado en la carpeta `project/`, este sistema gestiona el flujo de un restaurante:

- **`products.js`**: Base de datos de productos con códigos y precios.
- **`index.js`**: Lógica de negocio (Gestión de pedidos, cálculo de totales y sistema de pagos).

## 🛠️ Especificaciones Técnicas (Restaurant)

### Variables de Estado

- **`user`**: Objeto que almacena la información del cliente (`name`, `age`, `debt`).
- **`order`**: Array que actúa como carrito de compras, almacenando los productos seleccionados.
- **`totalSales`**: Variable global que acumula el total de ingresos por ventas cobradas con éxito.

### Funciones y Métodos

- **`showMenu()`**: Genera una **tabla visual** en la consola (`console.table`) con el menú disponible.
- **`orderProduct(code)`**: Agrega productos al pedido. Incluye validaciones con `console.warn` para códigos vacíos y `console.error` para productos inexistentes.
- **`viewOrder()`**: Retorna el pedido actual o un mensaje de advertencia si el carrito está vacío.
- **`calculateTotal()`**: Realiza el cálculo interno de la suma de precios mediante `.reduce()`.
- **`showTotal()`**: Muestra en consola el costo total acumulado del pedido.
- **`finalizeOrder()`**: Valida que el pedido no esté vacío, transfiere el total a la deuda del usuario y limpia el carrito (la deuda).
- **`payOrder(amount)`**: Sistema de cobro robusto que:
  - Valida que el monto sea un número positivo.
  - Comprueba si el usuario tiene deuda pendiente antes de procesar.
  - Calcula el cambio con precisión decimal (`toFixed(2)`).
  - Registra la venta en `totalSales` y resetea la deuda.

## 🚀 Cómo usar este repositorio

1. Clona el repositorio o descarga los archivos.
2. **Fundamentos**: Ejecuta los archivos con Node.js o cárgalos en el `index.html` de la raíz.
3. **Proyecto Restaurant**:
   - Abre `project/index.html` en tu navegador.
   - Interactúa con el sistema desde la **Consola** Abriendo las **Herramientas de Desarrollador** (F12 o clic derecho > Inspeccionar).

   - Ve a la pestaña **Console** para ver los resultados de cada ejercicio.

---

_Material de aprendizaje de JavaScript Moderno._
