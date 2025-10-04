# Plan de implementación - SteamStorm

## Stack tecnológico
- Backend: Node.js + Express
- Base de datos: PostgreSQL
- Frontend: React
- Autenticación: JWT + bcrypt
- IA: Algoritmos de recomendación simples
- Integración externa: Steam Web API

## Tareas principales
| Tarea | Responsable | Estimación |
|-------|------------|------------|
| Configurar repo y estructura de carpetas | Líder | 2h |
| Crear modelos de datos (Usuario, Juego, Reseña, Ranking, Carrito) | Dev Lead | 4h |
| Implementar integración con Steam API | Dev | 6h |
| Crear endpoints: /ranking, /juegos/{id}, /buscar | Dev | 6h |
| Autenticación y perfiles de usuario | Dev | 4h |
| Funcionalidad de favoritos | Dev | 4h |
| Implementar IA de recomendaciones | Dev | 6h |
| Backend testing y criterios de aceptación | QA | 4h |
| Frontend: ranking, filtros y recomendaciones | Frontend | 10h |
| Documentación y slides | Analista/Presentador | 3h |

## Mapping casos de uso → Clases
| Caso de uso | Clases involucradas |
|-------------|------------------|
| Registrar usuario | Usuario |
| Iniciar sesión | Usuario |
| Buscar videojuegos | Juego, SteamAPI |
| Comprar videojuegos | Usuario, Juego, Carrito |
| Dejar reseña | Usuario, Reseña, Juego |
| Ver perfil | Usuario, Juego, Reseña, Carrito |
| Gestionar lista de deseos | Usuario, Juego |
| Recibir recomendaciones | Usuario, AsistenteIA, Juego |
| Reportar problema | Usuario, Administrador |
| Gestionar usuarios | Administrador, Usuario |
| Gestionar videojuegos | Administrador, Juego |
| Gestionar reseñas | Administrador, Reseña |
| Generar reportes | Administrador, Ranking |
| Configurar sistema | Administrador |
| Proveer asistencia | AsistenteIA, Juego, Usuario |

## Cronograma
- Sprint 1: Repo + modelos + endpoints básicos + Steam API
- Sprint 2: Autenticación, favoritos, IA, frontend básico
- Sprint 3: UI final, pruebas, documentación y slides

## Criterios de aceptación
- Ranking correctamente ordenado
- Usuario registrado puede guardar favoritos
- Detalle de juego completo
- Recomendaciones IA coherentes con historial
- Manejo correcto de errores de API

