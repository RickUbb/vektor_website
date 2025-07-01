---
title: Endpoints de la API Vektor
sidebar_position: 1
---

# 📋 Endpoints de la API Vektor

Vektor expone una API REST y SSE documentada con Swagger y ReDoc.

## Documentación interactiva

- [Swagger UI](http://127.0.0.1:8000/docs)
- [ReDoc](http://127.0.0.1:8000/redoc)
- [OpenAPI Schema](http://127.0.0.1:8000/openapi.json)

## Autenticación

- JWT para endpoints protegidos
- Ejemplo de login y uso de token:

```bash
curl -X POST "http://127.0.0.1:8000/auth/login" \
     -H "Content-Type: application/x-www-form-urlencoded" \
     -d "username=tu_email@ejemplo.com&password=tu_contraseña"

curl -X GET "http://127.0.0.1:8000/users/me" \
     -H "Authorization: Bearer TU_JWT_TOKEN_AQUI"
```

## Principales endpoints

- `/auth/*`: Login, registro, refresh, logout, reset password
- `/chat/*`: Chat streaming (SSE), historial, exportación
- `/users/*`: Perfil, preferencias, avatar, estadísticas
- `/sync/*`: Sincronización, backup, restore, dispositivos
- `/config/*`: Modelos, MCP servers, preferencias, sistema
- `/`: Bienvenida, health, versión, métricas

## Ejemplo de conexión SSE

```javascript
const eventSource = new EventSource('/chat/stream', {
    headers: {…}
});

eventSource.onmessage = function(event) {
    const data = JSON.parse(event.data);
    console.log('Contenido:', data.content);
};

eventSource.onerror = function(event) {
    console.error('Error SSE:', event);
};
```

## Códigos de estado HTTP

| Código | Estado | Descripción |
|--------|--------|-------------|
| 200    | OK     | Operación exitosa |
| 201    | Created| Recurso creado |
| 400    | Bad Request | Datos inválidos |
| 401    | Unauthorized| Token inválido |
| 403    | Forbidden | Sin permisos |
| 404    | Not Found | Recurso no encontrado |
| 422    | Validation Error | Error de validación |
| 500    | Internal Error | Error del servidor |

---

[Más sobre OpenAPI](https://swagger.io/specification/) | [Docusaurus](https://docusaurus.io/docs/installation)
