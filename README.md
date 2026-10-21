# Portafolio · tavolab.io

Sitio estático (un solo `index.html`) servido con Nginx en Docker.

## Probar local
```bash
docker build -t portafolio .
docker run --rm -p 8080:80 portafolio
# abre http://localhost:8080
```

## Desplegar en Dokploy
Build type: **Dockerfile** · Puerto del contenedor: **80** · Dominio: `tavolab.io` con HTTPS (Let's Encrypt).

## Actualizar
Edita `index.html`, haz commit y push a `main`. Con auto-deploy activado, Dokploy lo vuelve a publicar solo.
