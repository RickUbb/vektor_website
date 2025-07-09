---
title: Ejemplos de Uso de la API 🧡
sidebar_position: 2
---

# Ejemplos de Uso de la API

## Login y chat básico

```python
import requests

login_data = {
    "username": "usuario@ejemplo.com",
    "password": "mi_contraseña"
}

response = requests.post(
    "http://127.0.0.1:8000/auth/login",
    data=login_data
)
token = response.json()["data"]["token"]

headers = {
    "Authorization": f"Bearer {token}",
    "Content-Type": "application/json"
}

chat_data = {
    "current_message": {
        "context_messages": []
    }
}

response = requests.post(
    "http://127.0.0.1:8000/chat/stream",
    stream=True
)
for line in response.iter_lines():
    if line:
        print(line)
```

## Gestión de usuario

```python
# Obtener perfil
profile = requests.get(
    "http://127.0.0.1:8000/users/me",
    headers=headers
).json()

# Actualizar preferencias
preferences = {
    "theme": "dark",
    "default_model": "deepseek"
}
requests.put(
    "http://127.0.0.1:8000/users/preferences",
    json=preferences
)
```

## SSE en JavaScript

```javascript
const eventSource = new EventSource('/chat/stream', {
    headers: {…}
});
eventSource.onmessage = function(event) {
    const data = JSON.parse(event.data);
    console.log('Contenido:', data.content);
};
```

---

[API completa en Swagger](http://127.0.0.1:8000/docs) | [Docusaurus](https://docusaurus.io/docs/installation)
