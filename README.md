# ⚡ SteamStorm - Plataforma de Reseñas y Gestión de Videojuegos

![Estado](https://img.shields.io/badge/Estado-Finalizado-success?style=for-the-badge&logo=github)
![Node](https://img.shields.io/badge/Node.js-v20+-green?style=for-the-badge&logo=nodedotjs)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-Cloud-blue?style=for-the-badge&logo=postgresql)
![License](https://img.shields.io/badge/Licencia-MIT-orange?style=for-the-badge)

> **Proyecto académico para el curso de Diseño y Desarrollo de Software.**
> Universidad Católica de Temuco - 2025.

## 📄 Descripción y Contexto

**SteamStorm** es una aplicación web **Full Stack** diseñada para solucionar la fragmentación en la búsqueda de información de videojuegos. Nuestro objetivo es ofrecer a los usuarios —tanto principiantes como experimentados— una plataforma centralizada donde puedan consultar datos en tiempo real, leer reseñas honestas de la comunidad y gestionar sus propios intereses.

La plataforma implementa una arquitectura híbrida resiliente que garantiza la disponibilidad de los datos incluso si las APIs externas fallan.

---

## 🚀 Características Principales

* **🔐 Autenticación Segura:** Sistema de Registro e Inicio de Sesión con encriptación y roles (Usuario vs Administrador).
* **🎮 Catálogo Híbrido:** Integración con **Steam Web API** + Sistema de Respaldo Local (Fallback) para evitar caídas por bloqueo de IP.
* **⭐ Comunidad:** Sistema de Reseñas, Puntuaciones y "Likes" para interactuar con otros usuarios.
* **❤️ Lista de Deseados (Wishlist):** Base de datos personalizada donde cada usuario guarda sus juegos favoritos.
* **🛡️ Panel de Administración:** Herramientas de moderación para eliminar comentarios inapropiados.

---

## 🏗️ Arquitectura y Stack Tecnológico

El proyecto utiliza una arquitectura **Cliente-Servidor Desacoplada** para maximizar la escalabilidad y el mantenimiento.

### Frontend (Cliente)
* **Tecnologías:** HTML5, CSS3 (Grid/Flexbox), JavaScript (Vanilla ES6+).
* **Alojamiento:** Servidor Linux (UCT) vía SFTP.
* **Diseño:** Interfaz oscura inspirada en plataformas gaming, totalmente *responsive*.

### Backend (Servidor)
* **Tecnologías:** Node.js, Express.js.
* **Seguridad:** * `bcryptjs` para hashing de contraseñas.
    * `jsonwebtoken` (JWT) para manejo de sesiones stateless.
    * `cors` para seguridad entre dominios.
* **Alojamiento:** Render (PaaS) con despliegue continuo (CI/CD) desde GitHub.

### Base de Datos
* **Motor:** PostgreSQL.
* **Estructura:** Relacional. Tablas interconectadas (`Users`, `Reviews`, `Likes`, `Wishlist`) para garantizar la integridad referencial de los datos.

---

## 💡 Justificación de Decisiones Técnicas

1.  **Node.js (I/O No Bloqueante):** Elegido por su capacidad para manejar múltiples conexiones simultáneas a la API externa de Steam sin bloquear el hilo principal, asegurando una experiencia fluida.
2.  **PostgreSQL vs NoSQL:** Se optó por SQL debido a la naturaleza relacional de los datos (un usuario *tiene* reseñas, una reseña *pertenece* a un juego). Esto asegura consistencia ACID y evita datos huérfanos.
3.  **Patrón de Resiliencia (Fallback):** Dado que la API pública de Steam bloquea IPs de servidores compartidos, implementamos un sistema inteligente que conmuta a un **Dataset Local** si la API falla, garantizando un **Uptime del 99.9%**.

---

## ⚙️ Configuración y Ejecución Local

Sigue estos pasos para levantar el proyecto en tu entorno de desarrollo:

### 1. Clonar el Repositorio
git clone [https://github.com/Nylarion/SteamStorm-Project.git]
cd SteamStorm

### 2. Configurar el Backend
Navega a la carpeta del servidor e instala las dependencias:
cd Backend
npm install

### 3. Variables de Entorno (.env)
Crea un archivo llamado .env dentro de la carpeta Backend/ y configura las siguientes claves (este archivo no se sube a GitHub por seguridad):
# Puerto del servidor
PORT=3000

# Clave secreta para firmar los tokens JWT (Inventa una segura)
JWT_SECRET=tu_clave_secreta

# Conexión a PostgreSQL (Usa la URL Externa de Render o tu DB local)
DATABASE_URL=postgres://usuario:password@host:port/database

# API Key de Steam (Opcional, mejora la estabilidad)
STEAM_API_KEY=tu_api_key_de_steam

### 4. Iniciar el servidor.
node server.js
Deberías ver: 🚀 Servidor Full Stack listo en puerto 3000.

### 5. Ejecutar el Frontend
No requiere instalación. Puedes abrir el archivo Guest/inicio_guest.html directamente en tu navegador o usar Live Server en VS Code.

SteamStorm/
├── Backend/            # Servidor Node.js y Lógica de Negocio
│   ├── server.js       # Punto de entrada y rutas
│   ├── auth.js         # Rutas de autenticación
│   ├── db.js           # Conexión a PostgreSQL
│   └── middleware.js   # Protección de rutas (Admin)
├── CSS/                # Estilos globales y específicos
├── Scripts/            # Lógica del cliente (JS)
│   ├── steamgames.js   # Carga de juegos (Lógica Híbrida)
│   ├── datos_backup.js # Base de datos local de respaldo
│   └── ...
├── User/               # Páginas privadas (Perfil, Wishlist)
├── Guest/              # Páginas públicas
└── Images/             # Recursos gráficos

👥 Equipo de Desarrollo
Luis Cerda Desarrollador Full Stack lcerda2023@alu.uct.cl
Braulio Palma Desarrollador Backend bpalma2025@alu.uct.cl
Carlos Sepúlveda Tester/Coordinador csepulveda2025@alu.uct.cl



```bash
git clone [https://github.com/brauliodeus/SteamStorm.git](https://github.com/brauliodeus/SteamStorm.git)
cd SteamStorm
