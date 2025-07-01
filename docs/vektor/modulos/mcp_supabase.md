---
title: MCP Supabase
sidebar_position: 2
---

# Supabase MCP Server

Servidor Model Context Protocol (MCP) para consultar y operar tablas de Supabase vía SSE y REST API documentada.

## Características

- **/rows**: Endpoint RESTful para consultar filas de cualquier tabla Supabase (Swagger y ReDoc incluidos)
- **/sse** y **/messages/**: Protocolo MCP vía Server-Sent Events (SSE)
- **Herramienta MCP**: `get_table_rows` para obtener filas de una tabla desde AI assistants
- **Docker-ready**

## Prerrequisitos

- Docker o Python 3.12+
- Cuenta y proyecto en Supabase
- Variables de entorno: `SUPABASE_URL` y `SUPABASE_SERVICE_KEY`

:::caution
Si tu columna `Fecha` en Supabase está en formato `MM-DD-YYYY`, la herramienta `get_monthly_fuel_sales` ya está adaptada. Si cambias el formato a `YYYY-MM-DD`, deberás ajustar la función.
:::

## Instalación y Ejecución

### Docker

```bash
docker build -t mcp/supabase .
docker run --rm -e SUPABASE_URL -e SUPABASE_SERVICE_KEY -p 8083:8083 mcp/supabase --api
```

### Local (desarrollo)

```bash
pip install -r requirements.txt
export SUPABASE_URL=...  # tu URL
export SUPABASE_SERVICE_KEY=...  # tu key
python server.py --api
```

## Endpoints REST y Documentación

- [Swagger](http://localhost:8083/docs)
- [ReDoc](http://localhost:8083/redoc)
- Ejemplo: [http://localhost:8083/rows?table=users](http://localhost:8083/rows?table=users)

### Ejemplo de consulta REST

```http
GET /rows?table=users&limit=5
```
Respuesta:
```json
[
  {"id": 1, "name": "John", ...},
  ...
]
```

## Protocolo MCP vía SSE

- Endpoint SSE: `http://localhost:8083/sse`
- Mensajería MCP: `http://localhost:8083/messages/`

### Herramientas MCP disponibles

```python
@mcp.tool()
async def get_table_rows(table: str, limit: int = 10) -> str:
    """Obtener filas de una tabla Supabase, devuelve JSON para AI."""
```

```python
@mcp.tool()
async def get_monthly_fuel_sales(year: int, month: int) -> str:
    """Obtener resumen de ventas de combustibles por mes específico.
    Nota: Usa el formato MM-DD-YYYY para comparar fechas si tu columna Fecha está así en Supabase.
    """
```

## Variables de entorno

| Variable | Descripción |
|----------|-------------|
| `SUPABASE_URL` | URL de tu proyecto Supabase |
| `SUPABASE_SERVICE_KEY` | Service role key de Supabase |

## Estructura del proyecto

```
server.py           # Servidor principal (FastAPI + SSE)
Dockerfile          # Imagen lista para producción
requirements.txt    # Dependencias
README.md           # Documentación
```

---

[Más sobre Supabase](https://supabase.com/docs) | [Docusaurus](https://docusaurus.io/docs/installation)
