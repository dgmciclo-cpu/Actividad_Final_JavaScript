# Buenas prácticas para el proyecto de la página web

Este documento describe mejoras a nivel de código y comentarios que puedes aplicar sin alterar la funcionalidad actual.

## 1. Mantener estructura clara y comentada

Agregar comentarios breves en HTML y CSS ayuda a entender rápidamente cada bloque.

Ejemplos HTML:
- ``
- ``
- ``
- ``

Ejemplos CSS:
- ``
- ``
- ``
- ``

## 2. Usar etiquetas semánticas siempre que sea posible

Aunque el proyecto ya funciona con `div`, las etiquetas semánticas mejoran accesibilidad y SEO.

Recomendaciones:
- Usar `<section>` en lugar de `div` cuando el bloque representa una sección del documento.
- Mantener `<nav>`, `<header>`, `<main>` y `<footer>`.
- Usar `<article>` para bloques independientes de contenido.

## 3. Mantener la etiqueta viewport en todas las páginas

La línea:
```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

es importante para que los móviles rendericen bien el diseño.

## 4. Mejora de accesibilidad

- Asegúrate de que todas las imágenes tengan un `alt` descriptivo.
- Usa texto claro en los enlaces.
- Si agregas más contenido, usa encabezados en orden lógico: `h1`, `h2`, `h3`, etc.

## 5. Responsive design con media queries

Aunque ya usas flexbox y grid, es recomendable añadir media queries para pantallas pequeñas.

Ejemplo:
```css
@media (max-width: 768px) {
  nav ul {
    flex-direction: column;
    gap: 12px;
  }

  .explorar {
    flex-direction: column;
  }

  .item {
    width: 100%;
  }
}
```

## 6. Evitar repetición y facilitar mantenimiento

Las páginas comparten casi el mismo contenido de cabecera y pie. Si llega a usarse un servidor web o plantillas, conviene extraer el `header` y `footer` comunes.

## 7. Añadir metadatos básicos

Para mejorar la página, puedes incluir en cada `<head>`:
- `<meta name="description" content="...">`
- `<meta charset="UTF-8">`
- `<meta name="viewport" content="width=device-width, initial-scale=1.0">`

## 8. Organización de archivos

El proyecto ya está bien organizado:
- `index.html`
- `pages/` para páginas secundarias
- `css/` para estilos
- `img/` para imágenes

Si agregas más contenido, mantener esta separación es una buena práctica.

## 9. Comentarios sugeridos en el código actual

En HTML, puedes añadir comentarios así:
```html

<div class="distr">
  
  <header>...</header>
  
  <nav>...</nav>
  
  <main>...</main>
  
  <footer>...</footer>
</div>
```

En CSS, puedes estructurar con secciones comentadas:
```css

* { ... }


.distr { ... }


nav { ... }
nav ul { ... }
nav a { ... }


main { ... }
.content { ... }


.explorar { ... }
.item { ... }


@media (max-width: 768px) {
  ...
}
```

## 10. Qué añadir en una futura revisión

- Comentarios en el HTML para cada sección.
- Metadatos SEO y de redes sociales.
- Media queries específicas.
- Etiquetas semánticas `section` si quieres mejorar accesibilidad.
- Un archivo `README.md` si el proyecto crece.

---

Con estas recomendaciones mantienes el proyecto limpio, fácil de leer y preparado para móviles sin cambiar la funcionalidad actual.
