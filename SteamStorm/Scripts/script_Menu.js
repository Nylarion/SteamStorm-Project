// ====== VARIABLES (Buscamos los elementos en el HTML) ======
const menu = document.getElementById('menu');
const menuToggle = document.getElementById('menu-toggle');
const perfil = document.getElementById('perfil');
const inicio = document.getElementById('main');
const nosotros = document.getElementById('nosotros');
const soporte = document.getElementById('soporte');
const privacidad = document.getElementById('privacidad');
const cerrarsesion = document.getElementById('cerrarsesion');

// ====== EVENTOS CON PROTECCIÓN (Solo se activan si el elemento existe) ======

// 1. Botón Hamburguesa del Menú
if (menu && menuToggle) {
    menuToggle.addEventListener('click', () => {
        menu.classList.toggle('active');
    });
}

// 2. Botón Perfil
if (perfil) {
    perfil.addEventListener('click', () => console.log('Clic en Perfil'));
}

// 3. Botón Inicio
if (inicio) {
    inicio.addEventListener('click', () => console.log('Clic en Inicio'));
}

// 4. Botón Privacidad
if (privacidad) {
    privacidad.addEventListener('click', () => console.log('Clic en Privacidad'));
}

// 5. Botón Nosotros
if (nosotros) {
    nosotros.addEventListener('click', () => console.log('Clic en Nosotros'));
}

// 6. Botón Soporte
if (soporte) {
    soporte.addEventListener('click', () => console.log('Clic en Soporte'));
}

// 7. LOGOUT (Cerrar Sesión)
if (cerrarsesion) {
    cerrarsesion.addEventListener('click', (e) => {
        e.preventDefault();
        // Borramos credenciales y rol
        localStorage.removeItem('token');
        localStorage.removeItem('username');
        localStorage.removeItem('role'); // Importante borrar el rol también
        
        alert("¡Hasta luego!");
        window.location.href = "../Guest/inicio_guest.html";
    });
}

// ====== 8. LÓGICA DE ADMINISTRADOR (NUEVO) ======
document.addEventListener("DOMContentLoaded", () => {
    // Leemos el rol guardado en el login
    const role = localStorage.getItem('role');
    const menuList = document.querySelector('#menu ul');

    // Si es admin y el menú existe, agregamos el botón especial
    if (role === 'admin' && menuList) {
        const adminLi = document.createElement('li');
        
        // Estilo rojo para destacar
        adminLi.innerHTML = `<a href="#" style="color: #ff4d4d; font-weight:bold;"> | 🛡️ Panel Admin</a>`;
        adminLi.style.cursor = "pointer";
        
        // Acción al hacer clic
        adminLi.addEventListener('click', () => {
            alert("👑 Modo administrador activo!\n\nAquí iría tu panel para gestionar usuarios y eliminar juegos.");
            // window.location.href = 'panel_admin.html'; // Futura página
        });
        
        // Lo insertamos al principio de la lista
        menuList.prepend(adminLi);
    }
});