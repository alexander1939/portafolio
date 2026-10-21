# Portafolio · tavolab.io

Sitio estático servido con Nginx en Docker (sin build, sin dependencias).

## Estructura
```
index.html                 Solo el contenido (HTML): nav, hero, proyectos, stack, experiencia, contacto
css/styles.css             Todos los estilos
js/data/tecnologias.js     Datos: colores/área de cada tecnología, la cinta y los iconos SVG
js/data/arquitecturas.js   Datos: diagrama de arquitectura de cada proyecto
js/iconos.js               icon(): pinta el icono de una tecnología
js/marquee.js              Cinta animada de tecnologías
js/proyectos.js            Diagramas de arquitectura en las tarjetas
js/filtros.js              Filtros por área/tecnología y barras del panel de GitHub
js/ui.js                   Menú móvil y botones "Copiar"
```
Los scripts se cargan en ese orden al final de `index.html` (los datos primero).

Para **agregar un proyecto**: añade su `<article class="card" data-id="...">` en `index.html` y su diagrama en `js/data/arquitecturas.js` con la misma clave.




