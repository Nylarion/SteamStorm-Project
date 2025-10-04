# SteamStorm - Requirements

## Proyecto
SteamStorm es un sistema que utiliza la Steam Web API para generar un ranking de videojuegos gratuitos, permitiendo que los usuarios consulten, filtren, comparen juegos y reciban recomendaciones personalizadas mediante un asistente IA.

## Alcance
- Visualizar ranking de juegos gratuitos por popularidad, reseñas o jugadores concurrentes.
- Filtrar y buscar juegos según categorías y género.
- Ver detalles de cada juego (descripción, puntuación global, reseñas, precio).
- Guardar juegos favoritos en una lista personalizada.
- Generar recomendaciones personalizadas con IA.
- Administración de criterios de ranking y gestión de usuarios por parte del administrador.

## Actores
- Usuario visitante
- Usuario registrado
- Administrador
- AsistenteIA
- Steam Web API (externo)

## Casos de uso
| Caso de uso | Actor principal | Descripción |
|-------------|----------------|-------------|
| Registrar usuario | Usuario | Crear cuenta para acceder a funcionalidades avanzadas. |
| Iniciar sesión | Usuario | Permitir autenticación y acceso al perfil. |
| Buscar videojuegos | Usuario | Buscar juegos por nombre, categoría o género. |
| Comprar videojuegos | Usuario | Añadir juegos gratuitos a su cuenta. |
| Dejar reseña | Usuario | Escribir comentarios y puntuar juegos. |
| Ver perfil | Usuario | Mostrar información y favoritos del usuario. |
| Gestionar lista de deseos | Usuario | Añadir/eliminar juegos favoritos. |
| Recibir recomendaciones | Usuario | IA sugiere juegos basados en historial y preferencias. |
| Reportar problema | Usuario | Enviar incidencias al administrador. |
| Gestionar usuarios | Administrador | Crear, editar o eliminar usuarios. |
| Gestionar videojuegos | Administrador | Añadir, editar o eliminar juegos. |
| Gestionar reseñas | Administrador | Validar o eliminar reseñas. |
| Generar reportes | Administrador | Estadísticas de uso y popularidad de juegos. |
| Configurar sistema | Administrador | Ajustar criterios de ranking y filtros. |
| Proveer asistencia | AsistenteIA | Sugerir juegos, responder preguntas y ofrecer soporte. |

