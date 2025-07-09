---
title: MCP Weather
sidebar_position: 3
---

# Servidor MCP del Clima

Servidor Model Context Protocol (MCP) que proporciona información meteorológica usando la API de Open-Meteo.

## Características

- Obtén información meteorológica actual para una ciudad especificada.

## Instalación y Configuración

Agrega la siguiente entrada al objeto `mcpServers` en tu archivo `cline_mcp_settings.json`:

```json
{
  "mcpServers": {
    "weather": {
      "command": "npx",
      "args": [
        "-y",
        "supergateway",
        "--sse",
        "http://localhost:8081/sse"
      ],
      "disabled": false,
      "autoApprove": []
    }
  }
}
```

Este servidor no requiere clave de API. Utiliza la API de Open-Meteo, gratuita y de código abierto.

## Uso

Herramienta principal: `get_weather`

**Parámetros:**
- `city` (cadena, requerido): Nombre de la ciudad.

**Ejemplo:**

```xml
<use_mcp_tool>
<server_name>weather</server_name>
<tool_name>get_weather</tool_name>
<arguments>
{
  "city": "Quito"
}
</arguments>
</use_mcp_tool>
```

## Ejecución local

```bash
python server.py --host 0.0.0.0 --port 8081
# o
uv run server.py --host 0.0.0.0 --port 8081
```

- Documentación Swagger: [http://localhost:8081/docs](http://localhost:8081/docs)

---

[Open-Meteo](https://open-meteo.com/) | [Docusaurus](https://docusaurus.io/docs/installation)
