# Resumen del Proyecto - LTI Talent Tracking System

## Descripción General

**LTI - Talent Tracking System** es una aplicación full-stack completa para la gestión de procesos de reclutamiento y selección de personal. El sistema permite administrar candidatos, posiciones laborales, flujos de entrevistas y todo el ciclo de vida de una aplicación de trabajo.

## Objetivos Principales

1. **Gestión de Candidatos**: Almacenar y gestionar información completa de candidatos incluyendo datos personales, educación, experiencia laboral y currículums.

2. **Gestión de Posiciones**: Crear y administrar posiciones laborales con descripciones detalladas, requisitos y flujos de entrevistas asociados.

3. **Procesos de Entrevista**: Definir flujos de entrevistas personalizables con múltiples pasos y tipos de entrevista.

4. **Seguimiento de Aplicaciones**: Rastrear el progreso de cada candidato a través del proceso de selección.

5. **Gestión de Empresas**: Administrar información de empresas y empleados involucrados en el proceso de selección.

## Arquitectura del Sistema

### Frontend
- **Tecnología**: React 18 con TypeScript
- **UI Framework**: React Bootstrap
- **Routing**: React Router DOM
- **Estado**: Componentes funcionales con hooks
- **Puerto**: 3000

### Backend
- **Tecnología**: Node.js con Express y TypeScript
- **ORM**: Prisma con PostgreSQL
- **Arquitectura**: Domain-Driven Design (DDD)
- **Documentación API**: Swagger/OpenAPI
- **Puerto**: 3010

### Base de Datos
- **Motor**: PostgreSQL
- **Gestión**: Docker Compose
- **Migraciones**: Prisma Migrate
- **Seed Data**: Datos de ejemplo incluidos

## Estructura del Proyecto

```
AI4Devs-frontend-sr-01/
├── frontend/          # Aplicación React
├── backend/           # API Express con TypeScript
├── memory-bank/       # Documentación del proyecto
├── docker-compose.yml # Configuración de PostgreSQL
└── README.md         # Documentación principal
```

## Funcionalidades Clave

### Gestión de Candidatos
- Crear y editar perfiles de candidatos
- Gestionar educación y experiencia laboral
- Subir y gestionar currículums
- Búsqueda y filtrado de candidatos

### Gestión de Posiciones
- Crear posiciones con descripciones detalladas
- Definir requisitos y responsabilidades
- Configurar flujos de entrevistas
- Control de visibilidad y estado

### Procesos de Entrevista
- Flujos personalizables de entrevistas
- Múltiples tipos de entrevista
- Seguimiento de progreso
- Evaluaciones y puntuaciones

### Aplicaciones
- Proceso de aplicación de candidatos
- Seguimiento del estado de la aplicación
- Notas y comentarios
- Historial completo

## Tecnologías y Dependencias

### Frontend
- React 18.3.1
- TypeScript 4.9.5
- React Bootstrap 2.10.2
- React Router DOM 6.23.1
- React DatePicker 6.9.0

### Backend
- Node.js con Express 4.19.2
- TypeScript 4.9.5
- Prisma 5.13.0
- Multer 1.4.5 (upload de archivos)
- Swagger 6.2.8 (documentación API)
- Jest 29.7.0 (testing)

### Base de Datos
- PostgreSQL
- Docker Compose
- Prisma Client

## Estado Actual del Proyecto

El proyecto está en desarrollo activo con:
- ✅ Backend API funcional con DDD
- ✅ Base de datos configurada con Prisma
- ✅ Frontend básico con React
- ✅ Documentación de API con Swagger
- ✅ Sistema de testing configurado
- ✅ Docker para desarrollo

## Próximos Pasos

1. Completar funcionalidades del frontend
2. Implementar autenticación y autorización
3. Mejorar la interfaz de usuario
4. Agregar reportes y analytics
5. Optimizar rendimiento y escalabilidad

## Convenciones del Proyecto

- **Idioma**: Español para documentación, inglés para código
- **Arquitectura**: Domain-Driven Design (DDD)
- **Testing**: Jest para backend, React Testing Library para frontend
- **Documentación**: Markdown con diagramas Mermaid
- **Versionado**: Git con commits descriptivos
