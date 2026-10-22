# Imagen para compartir (og:image)

`tools/og.html` es la fuente de `assets/og.png` (1200x630). Para regenerarla, abre el HTML en
Chromium a 1200x630 y guarda una captura en `assets/og.png`, por ejemplo:

```bash
chromium --headless=new --hide-scrollbars --window-size=1200,630 --virtual-time-budget=4000 \
  --screenshot=assets/og.png tools/og.html
```

La carpeta `tools/` no se copia a la imagen de Docker.
