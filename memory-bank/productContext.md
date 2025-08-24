# Contexto del Producto - LTI Talent Tracking System

## ¿Por qué existe este proyecto?

El sistema LTI nace de la necesidad de modernizar y digitalizar los procesos de reclutamiento y selección de personal. Las empresas actuales enfrentan múltiples desafíos en la gestión de talento:

### Problemas que resuelve

1. **Fragmentación de información**: Los datos de candidatos, posiciones y entrevistas suelen estar dispersos en múltiples herramientas (emails, hojas de cálculo, documentos).

2. **Falta de seguimiento**: Es difícil rastrear el progreso de cada candidato a través del proceso de selección, lo que puede resultar en pérdida de candidatos valiosos.

3. **Procesos manuales**: Muchas tareas de reclutamiento se realizan manualmente, consumiendo tiempo valioso de los reclutadores.

4. **Falta de estandarización**: Cada empresa o reclutador maneja los procesos de manera diferente, dificultando la escalabilidad.

5. **Pérdida de información histórica**: No se mantiene un historial completo de las decisiones y evaluaciones realizadas.

## Experiencia de Usuario Objetivo

### Para Reclutadores
- **Interfaz intuitiva**: Formularios simples y claros para capturar información de candidatos
- **Vista de pipeline**: Dashboard que muestra el estado de todas las aplicaciones
- **Gestión de entrevistas**: Calendario y herramientas para programar y evaluar entrevistas
- **Búsqueda eficiente**: Filtros y búsquedas rápidas para encontrar candidatos específicos

### Para Candidatos
- **Proceso de aplicación simple**: Formularios claros y fáciles de completar
- **Transparencia**: Información clara sobre el estado de su aplicación
- **Subida de documentos**: Interfaz intuitiva para subir currículums y documentos

### Para Administradores
- **Gestión de posiciones**: Crear y configurar posiciones con flujos de entrevistas personalizados
- **Reportes**: Análisis del rendimiento del proceso de reclutamiento
- **Configuración del sistema**: Personalizar flujos, tipos de entrevista y criterios

## Flujos de Trabajo Principales

### 1. Creación de Posición
1. El administrador crea una nueva posición
2. Define la descripción, requisitos y responsabilidades
3. Configura el flujo de entrevistas asociado
4. Publica la posición (opcional)

### 2. Aplicación de Candidato
1. El candidato completa el formulario de aplicación
2. Sube su currículum y documentos
3. El sistema crea automáticamente un registro de candidato
4. Se inicia el proceso de seguimiento

### 3. Proceso de Entrevista
1. El reclutador revisa la aplicación
2. Programa entrevistas según el flujo definido
3. Los entrevistadores evalúan al candidato
4. Se registran los resultados y notas
5. El candidato avanza o es rechazado según los criterios

### 4. Seguimiento y Decisiones
1. El sistema mantiene un historial completo
2. Los reclutadores pueden agregar notas y comentarios
3. Se generan reportes de rendimiento
4. Se toman decisiones basadas en datos

## Métricas de Éxito

### Para el Negocio
- **Tiempo de contratación**: Reducción del tiempo desde la aplicación hasta la contratación
- **Calidad de contrataciones**: Mejora en la retención de empleados contratados
- **Eficiencia del reclutador**: Más candidatos procesados por reclutador
- **Costo por contratación**: Reducción de costos asociados al proceso

### Para los Usuarios
- **Satisfacción del reclutador**: Menos tiempo en tareas administrativas
- **Experiencia del candidato**: Proceso más transparente y profesional
- **Tasa de abandono**: Menos candidatos que abandonan el proceso

## Diferenciadores Clave

1. **Arquitectura DDD**: Diseño basado en el dominio del negocio, no en la tecnología
2. **Flujos personalizables**: Cada empresa puede definir sus propios procesos
3. **Trazabilidad completa**: Historial detallado de todas las decisiones
4. **Integración fácil**: API REST bien documentada para integraciones
5. **Escalabilidad**: Diseñado para crecer con las necesidades de la empresa

## Roadmap del Producto

### Fase 1 (Actual)
- ✅ Gestión básica de candidatos
- ✅ Gestión de posiciones
- ✅ Flujos de entrevista simples
- ✅ API REST funcional

### Fase 2 (Próxima)
- 🔄 Interfaz de usuario mejorada
- 🔄 Sistema de autenticación
- 🔄 Notificaciones por email
- 🔄 Reportes básicos

### Fase 3 (Futura)
- 📋 Integración con ATS externos
- 📋 IA para matching de candidatos
- 📋 Analytics avanzados
- 📋 Aplicación móvil

## Stakeholders Principales

1. **Reclutadores**: Usuarios principales del sistema
2. **Entrevistadores**: Personal técnico y de RRHH
3. **Candidatos**: Usuarios externos que aplican a posiciones
4. **Administradores**: Configuran y mantienen el sistema
5. **Directores de RRHH**: Usan reportes para tomar decisiones estratégicas

## Restricciones y Consideraciones

### Técnicas
- Debe funcionar en navegadores modernos
- API debe ser compatible con sistemas externos
- Base de datos debe manejar grandes volúmenes de datos
- Sistema debe ser escalable horizontalmente

### Legales
- Cumplimiento con leyes de protección de datos (GDPR, etc.)
- Almacenamiento seguro de información personal
- Políticas de retención de datos
- Consentimiento informado de candidatos

### Operacionales
- Migración de datos existentes
- Capacitación de usuarios
- Soporte técnico
- Mantenimiento y actualizaciones
