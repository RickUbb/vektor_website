---
title: Endpoints de la API Vektor  
sidebar_position: 1  
---
:::info
# 📋 Endpoints de la API Vektor
:::
Accede de forma interactiva a la documentación y prueba cada ruta en tu navegador:

- Swagger UI 
- ReDoc

---
:::info
## 📑 Tabla de contenidos
:::
1. 🔐 Autenticación  
2. 💬 Chat  
3. 👤 Usuarios  
4. 🔄 Sincronización  
5. ⚙️ Configuración  
6. 📊 Sistema y Monitoreo  

---
:::info
## 🔐 Autenticación
:::
### POST /auth/login — Obtener token JWT  
**Descripción:** Autentica al usuario con sus credenciales y devuelve un token Bearer.  
**Request:**  
```bash
curl -X POST "http://127.0.0.1:8000/auth/login" \
     -H "Content-Type: application/x-www-form-urlencoded" \
     -d "username=tu_email@ejemplo.com&password=tu_contraseña"
```  
**Response (200):**  
```json
{
  "access_token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9…",
  "token_type": "bearer",
  "expires_in": 3600
}
```  
**Probar en Swagger:** `/docs#/auth/login`

---

### POST /auth/register — Crear nueva cuenta  
**Descripción:** Registra un usuario nuevo.  
**Request (JSON):**  
```json
POST /auth/register
{
  "email": "usuario@dominio.com",
  "username": "nombre_usuario",
  "password": "ContraseñaSegura123"
}
```  
**Response (201):**  
```json
{
  "id": "uuid-usuario",
  "email": "usuario@dominio.com",
  "username": "nombre_usuario",
  "created_at": "2025-07-09T12:34:56Z"
}
```  
**Probar en Swagger:** `/docs#/auth/register`

---

### POST /auth/refresh — Renovar token  
**Descripción:** Genera un nuevo access token a partir del refresh token.  
**Request (JSON):**  
```json
POST /auth/refresh
{
  "refresh_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9…"
}
```  
**Response (200):**  
```json
{
  "access_token": "nuevo_access_token",
  "token_type": "bearer",
  "expires_in": 3600
}
```  
**Probar en Swagger:** `/docs#/auth/refresh`

---

### POST /auth/logout — Cerrar sesión  
**Descripción:** Invalida el refresh token actual.  
**Request (JSON):**  
```json
POST /auth/logout
{
  "refresh_token": "token_a_invalidar"
}
```  
**Response (200):**  
```json
{ "detail": "Logout successful" }
```  
**Probar en Swagger:** `/docs#/auth/logout`

---
:::info
## 💬 Chat
:::
### POST /chat/stream — SSE chat streaming  
**Descripción:** Inicia una conversación en tiempo real; responde mediante Server-Sent Events (SSE).  
**Request (JSON):**  
```json
POST /chat/stream
{
  "model": "gpt-4-stream",
  "messages": [
    { "role": "user", "content": "Hola, ¿cómo estás?" }
  ]
}
```  
**Uso en JavaScript:**  
```javascript
const es = new EventSource('/chat/stream', { withCredentials: true });
es.onmessage = evt => console.log(JSON.parse(evt.data));
es.onerror   = err => console.error('Error SSE', err);
```  
**Probar en Swagger:** `/docs#/chat/stream`

---

### GET /chat/history — Listar conversaciones  
**Descripción:** Recupera el listado de todas las conversaciones previas del usuario.  
**Response (200):**  
```json
[
  { "id": "conv1", "created_at": "2025-07-08T10:00:00Z" },
  { "id": "conv2", "created_at": "2025-07-09T14:20:00Z" }
]
```  
**Probar en Swagger:** `/docs#/chat/history`

---

### GET `/chat/history/{conversation_id}` — Obtener conversación  
**Descripción:** Recupera los mensajes de una conversación específica.  
**Parámetros:**  
- `conversation_id` (string)  
**Response (200):**  
```json
{
  "id": "conv1",
  "messages": [
    { "role": "user",      "content": "¡Hola!" },
    { "role": "assistant", "content": "¡Hola, ¿en qué puedo ayudarte?" }
  ]
}
```  
**Probar en Swagger:** `/docs#/chat/history/{conversation_id}`

---

### DELETE `/chat/history/{conversation_id}` — Eliminar conversación  
**Descripción:** Borra permanentemente la conversación indicada.  
**Parámetros:**  
- `conversation_id` (string)  
**Response (204):** _Sin contenido._  
**Probar en Swagger:** `/docs#/chat/history/{conversation_id}`

---

### GET /chat/models — Modelos disponibles  
**Descripción:** Lista los modelos de IA configurados en MCP.  
**Response (200):**  
```json
[
  { "name": "gpt-4-stream",   "description": "GPT-4 con streaming SSE" },
  { "name": "gpt-3.5-turbo",   "description": "Turbo sin streaming" }
]
```  
**Probar en Swagger:** `/docs#/chat/models`

---
:::info
## 👤 Usuarios
:::
### GET /users/me — Perfil actual  
**Descripción:** Devuelve los datos del usuario autenticado.  
**Response (200):**  
```json
{
  "id": "uuid-usuario",
  "email": "usuario@dominio.com",
  "username": "nombre_usuario",
  "avatar_url": null
}
```  
**Probar en Swagger:** `/docs#/users/get_users_me`

---

### PUT /users/me — Actualizar perfil  
**Descripción:** Modifica email, nombre o avatar.  
**Request (JSON):**  
```json
{
  "email": "nuevo@dominio.com",
  "username": "nuevo_nombre",
  "avatar_url": "https://..."
}
```  
**Response (200):**  
```json
{ "detail": "Perfil actualizado" }
```  
**Probar en Swagger:** `/docs#/users/update_users_me`

---

### DELETE /users/me — Eliminar cuenta  
**Descripción:** Elimina la cuenta y todos sus datos.  
**Response (204):** _Sin contenido._  
**Probar en Swagger:** `/docs#/users/delete_users_me`

---

### POST /users/change-password — Cambiar contraseña  
**Descripción:** Actualiza la contraseña del usuario autenticado.  
**Request (JSON):**  
```json
{
  "current_password": "Vieja123",
  "new_password":     "Nueva456"
}
```  
**Response (200):**  
```json
{ "detail": "Contraseña cambiada" }
```  
**Probar en Swagger:** `/docs#/users/post_users_change_password`

---

### GET /users/preferences — Obtener preferencias  
**Descripción:** Recupera opciones del usuario (tema, notificaciones…).  
**Response (200):**  
```json
{ "theme": "dark", "notifications": true }
```  
**Probar en Swagger:** `/docs#/users/get_users_preferences`

---

### PUT /users/preferences — Actualizar preferencias  
**Descripción:** Modifica opciones (tema, notificaciones…).  
**Request (JSON):**  
```json
{ "theme": "light", "notifications": false }
```  
**Response (200):**  
```json
{ "detail": "Preferencias actualizadas" }
```  
**Probar en Swagger:** `/docs#/users/put_users_preferences`

---
:::info
## 🔄 Sincronización
:::
### GET /sync/sessions — Sesiones sincronizadas  
**Descripción:** Lista las sesiones activas en otros dispositivos.  
**Response (200):**  
```json
[
  { "device_id": "disp1", "last_sync": "2025-07-09T08:00:00Z" },
  { "device_id": "disp2", "last_sync": "2025-07-09T09:30:00Z" }
]
```

---

### POST /sync/backup — Crear respaldo  
**Descripción:** Inicia un backup de datos y conversaciones.  
**Response (202):**  
```json
{ "task_id": "backup-123", "status": "in_progress" }
```

---

### POST /sync/restore — Restaurar respaldo  
**Descripción:** Restaura datos desde el último backup exitoso.  
**Request (JSON opcional):**  
```json
{ "backup_id": "backup-123" }
```  
**Response (200):**  
```json
{ "detail": "Restauración completada" }
```

---

### GET /sync/devices — Dispositivos registrados  
**Descripción:** Lista dispositivos vinculados a la cuenta.  
**Response (200):**  
```json
[
  { "id": "disp1", "name": "Laptop personal" },
  { "id": "disp2", "name": "Teléfono" }
]
```

---
:::info
## ⚙️ Configuración
:::
### GET /config/models — Configuración de modelos  
**Descripción:** Devuelve `model_configs.json` con LLM disponibles.  
**Response (200):**  
```json
[
  { "name": "gpt-4-stream", "path": "models/gpt4.json" },
  …
]
```

---

### GET /config/mcp-servers — Servidores MCP  
**Descripción:** Devuelve `mcp_servers.json` con endpoints y prioridades.  
**Response (200):**  
```json
[
  { "url": "https://mcp1.vektor.ai", "weight": 1 },
  …
]
```

---

### GET /config/adapters — Adaptadores  
**Descripción:** Lista archivos JSON en `app/*.json` para servicios externos.  
**Response (200):**  
```json
[
  { "name": "slack", "path": "app/slack.json" },  
  …  
]
```

---

### POST /config/adapters — Añadir/actualizar adaptador  
**Descripción:** Envía un JSON con la definición de un nuevo adaptador o actualiza uno existente.  
**Request (JSON):**  
```json
{ "name": "nuevo_servicio", "settings": { … } }
```  
**Response (201):**  
```json
{ "detail": "Adaptador guardado" }
```

---
:::info
## 📊 Sistema y Monitoreo
:::
### GET /health — Verificación de salud  
**Descripción:** Retorna estado general:  
```json
{ "status": "ok" }
```

---

### GET /api/status — Panel de métricas  
**Descripción:** Dashboard en JSON con métricas de uso y carga.

---