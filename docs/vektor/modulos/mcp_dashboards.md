---
title: MCP Dashboards (Vizro)
sidebar_position: 1
---

# MCP Dashboards con Vizro

Servidor MCP para crear dashboards y gráficos de Vizro, integrable con LLMs y compatible con SSE.

## Características

- Herramientas y plantillas para crear dashboards y gráficos de Vizro paso a paso
- Configuración validada y legible
- Vista previa en vivo del dashboard
- Soporte para datos locales o remotos

## Prerrequisitos

- [uv](https://docs.astral.sh/uv/getting-started/installation/) o [Docker](https://www.docker.com/get-started/)
- Cliente LLM compatible con MCP (Claude Desktop, Cursor, WindSurf, etc.)

## Instalación y Configuración

Consulta la documentación de tu cliente LLM para añadir la configuración del servidor MCP Dashboard. Ejemplo para Claude Desktop:

```json
{
  "mcpServers": {
    "dashboard": {
      "command": "npx",
      "args": ["-y", "supergateway", "--sse", "http://localhost:8082/sse"],
      "disabled": false,
      "autoApprove": []
    }
  }
}
```

> Para usar datos locales, monta tu directorio de datos en el contenedor Docker.

## Uso

- Usa plantillas de prompts para crear dashboards rápidamente
- Solicita dashboards o gráficos específicos mencionando Vizro y el tipo de datos
- Vista previa en vivo disponible si usas datos públicos

## Herramientas disponibles

- `get_vizro_chart_or_dashboard_plan`: Guía paso a paso para crear un gráfico o dashboard
- `get_model_json_schema`: Recupera el esquema JSON de cualquier modelo Vizro

## Seguridad y privacidad

- El servidor solo lee datos, nunca escribe ni modifica
- La herramienta `load_and_analyze_data` solo usa pandas para cargar datos

---

[Más sobre Vizro](https://huggingface.co/spaces/vizro/demo-visual-vocabulary) | [Docusaurus](https://docusaurus.io/docs/installation)
