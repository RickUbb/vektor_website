# Vektor Website

Este repositorio contiene la documentación y el sitio web oficial para la plataforma Vektor, una plataforma de Agentes de IA. El sitio web está construido con [Docusaurus](https://docusaurus.io/), un moderno generador de sitios estáticos.

## Estructura del Proyecto

```
vektor_website/
├── blog/                   # Artículos de blog
├── docs/                   # Documentación de Vektor
│   └── vektor/             # Documentación específica de la plataforma
│       ├── api/            # Documentación de la API
│       ├── modules/        # Módulos en inglés
│       └── modulos/        # Módulos en español
├── src/                    # Código fuente del sitio web
│   ├── components/         # Componentes React
│   ├── css/                # Estilos CSS
│   └── pages/              # Páginas principales
├── static/                 # Archivos estáticos (imágenes, etc.)
│   └── img/
└── vektor_documentation/   # Documentación adicional por módulos
```

## Requisitos

- Node.js >= 18.0
- npm o yarn

## Instalación

1. Clona este repositorio:
   ```bash
   git clone https://github.com/Snayderstone/vektor_website
   cd vektor_website
   ```

2. Instala las dependencias:
   ```bash
   npm install
   ```

## Ejecución Local

Para ejecutar el sitio web en modo desarrollo:

```bash
# Verificar versión de Node.js (debe ser >=18.0)
node --version

# Iniciar el servidor de desarrollo
npx docusaurus start
```

El sitio estará disponible en [http://localhost:3000](http://localhost:3000).

## Comandos Disponibles

- `npm start` - Inicia el servidor de desarrollo.
- `npm run build` - Construye el sitio para producción en el directorio `/build`.
- `npm run serve` - Sirve el sitio construido localmente.
- `npm run deploy` - Publica el sitio (configuración adicional requerida).
