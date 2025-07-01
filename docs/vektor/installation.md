---
title: Instalación y Configuración
sidebar_position: 2
---

# Instalación y Configuración

Sigue estos pasos para instalar y configurar Vektor y sus módulos MCP.

## Prerrequisitos

- **Flutter SDK** ^3.7.2
- **Python** >=3.12
- **PostgreSQL**
- (Opcional) Docker, uv, Node.js

## Instalación rápida

```bash
# Clona el repositorio
 git clone https://github.com/Xingsandesu/Vektor.git && cd Vektor

# Configura variables de entorno
 mv backend/.env.example backend/.env && mv .env.example .env

# Edita las variables de entorno
 vim .env
 vim backend/.env

# Inicia PostgreSQL (opcional con Docker)
 docker-compose -f docker-compose.yml -f docker-compose.override.yml up -d postgres

# Inicializa el backend
 uv run backend/scripts/startup.py --user --email <email> --username <name> --password <password>

# Inicia el backend
 docker compose up -d
```

## Configuración avanzada

- Edita `lib/core/config/app_config.dart` para endpoints y temas en el frontend.
- Edita `.env` y `backend/app/core/config.py` para la base de datos y servidores MCP en el backend.

Consulta la [documentación oficial de Docusaurus](https://docusaurus.io/docs/installation) para personalizar la documentación.

---

¿Tienes problemas? Consulta la sección de [FAQ](faq.md) o abre un issue en el repositorio.
