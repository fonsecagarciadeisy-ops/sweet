# Sweet Love 🌸 — Restaurante internacional

## Brief del proyecto
- **Propósito:** sitio web tipo restaurante/tienda virtual para explorar comida internacional, platos saludables, carnes, hamburguesas, entradas, postres y bebidas; agregar productos al carrito y crear un resumen de pedido.
- **Audiencia:** jóvenes y público general que usa celulares, tabletas y computadores.
- **Contenido:** inicio, destinos gastronómicos, categorías, menú, buscador, filtros por país/categoría, tarjetas de producto, carrito, formulario, confirmación y footer.
- **Estética:** femenina, juvenil y alegre; rosa `#E94F91`, rosa pastel `#F9C6DC`, lila `#B99AE8`, amarillo `#FFD76A`, blanco rosado `#FFF3F8`.
- **Tipografía:** DM Sans y Pacifico decorativa.
- **Tecnologías:** HTML semántico, CSS responsive y JavaScript puro. Sin frameworks.

## Catálogo
El catálogo contiene 30 productos de Colombia, México, Estados Unidos, Grecia/Santorini, Polonia, Rusia e inspiración internacional. Cada tarjeta incluye fotografía enlazada, texto alternativo descriptivo, país, categoría, descripción de ingredientes, acompañamiento sugerido y precio ilustrativo en COP. Revisa `catalogo_productos.csv` para el inventario completo.

**Nota sobre fotografías:** son fotografías reales enlazadas desde Unsplash. Necesitan conexión a internet y pueden cambiar o dejar de estar disponibles. La imagen es ilustrativa del tipo de plato; no debe afirmarse que es la fotografía exacta de la preparación del restaurante. Para una entrega comercial, reemplaza por fotos propias o con licencia apropiada.

## Funcionalidades
- Filtro por categoría y por país.
- Búsqueda por plato, país, categoría, ingredientes o acompañamiento.
- Carrito: agregar, incrementar, disminuir y quitar productos.
- Contador de unidades y cálculo de subtotal/total en pesos colombianos.
- Formulario con validación básica de nombre, celular de 10 dígitos y dirección.
- Resumen visual de pedido, menú móvil, mensajes toast y cierre con Escape.

El formulario genera una confirmación local: no envía datos a un servidor, no guarda pedidos y no procesa pagos. El carrito permanece en memoria mientras la página está abierta.

## Prompting solicitado por la rúbrica
### Priming
Actúa como desarrollador frontend senior experto en HTML semántico, CSS y JavaScript puro. Construye Sweet Love, restaurante web internacional para público general. Incluye platos típicos de Colombia, México, Estados Unidos, Grecia/Santorini, Polonia y Rusia; comidas saludables, ensaladas, carnes, hamburguesas, entradas, postres y bebidas. Cada producto debe tener foto real ilustrativa, nombre, país, descripción, precio COP y acompañamiento. Añade búsqueda, filtros, carrito funcional y formulario validado. Identidad femenina rosa/lila/amarillo. Archivos separados, accesibilidad, responsive y sin frameworks.

### Meta-prompting
Antes de generar código, solicitar una plantilla de prompt que cubra identidad visual, audiencia, secciones, navegación, catálogo, fotografías, interacciones, carrito, validación y responsive. Completarla con los datos anteriores.

### Zero-shot
Diseña una tienda web Sweet Love para restaurante internacional. Sin ejemplos, propone arquitectura, jerarquía, paleta HEX, tipografía, categorías, catálogo, navegación y funciones.

### One-shot
Ejemplo: una tarjeta de producto tiene fotografía, nombre, descripción, precio y botón. En móvil se acomoda en una columna y en escritorio en cuadrícula. Aplica ese patrón a los productos de Sweet Love.

### Few-shot
Convenciones: tarjetas blancas con esquinas suaves y sombra discreta; botones rosa con hover y focus; secciones con título y descripción; filtros consistentes; imágenes con texto alternativo; tarjetas adaptables a pantalla.

### Planificación previa (Chain of Thought)
Pide un plan resumido y verificable: necesidades del usuario, arquitectura, colores y tipografía, interacciones, adaptación responsive y criterios de prueba. No se solicita razonamiento privado; se solicita una síntesis de decisiones técnicas.

## Criterios responsive
- 360 px: productos en una columna y categorías/países apilados.
- 768 px: cuadrículas intermedias.
- 1200 px o más: cuatro columnas de productos y hero en dos columnas.

## Lista de validación y evidencias
Las capturas deben tomarse en el navegador real. Esta carpeta contiene la guía de evidencias, pero no incluye capturas ficticias. Consulta `EVIDENCIAS_Y_PRUEBAS.md`.

## Reflexión final
Completar después de ejecutar las pruebas reales:
1. Técnica más útil y justificación.
2. Diferencias observadas entre One-shot y Few-shot.
3. Datos que ayudó a descubrir Meta-prompting.
4. Cambios realizados por revisión humana.
5. Errores reales encontrados y cómo se comprobaron.
6. Qué se mejoraría en otra iteración.


### Pedidos por WhatsApp
Al completar nombre y dirección y pulsar **Enviar pedido por WhatsApp**, la página abre el chat con el número **+57 305 288 3408** y prepara el mensaje con productos, cantidades, total y datos de entrega. El cliente solo debe pulsar **Enviar** dentro de WhatsApp. No se realiza pago en la página.


### Revisión de fotografías del catálogo
Se revisaron las imágenes de las ensaladas y platos saludables para que correspondan al nombre: ensalada griega, ensalada Olivier, bowl de pollo con quinoa, salmón con vegetales y ensalada César con pollo.
