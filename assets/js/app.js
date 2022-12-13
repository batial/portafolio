

document.addEventListener('DOMContentLoaded',()=>{
    // Selecciones para Barra de navegación hamburguesa
    const burger = document.getElementById("menu-hamburguesa");
    const ul = document.querySelector("nav ul");
    const nav = document.querySelector("nav");

    burger.addEventListener("click", () => {
        ul.classList.toggle("show");
        console.log('hola');
    });
    
    // Cerrar el menú de hambuguesa cuando se hace click en un enlace
    // Seleccionar enlaces de navegación
    const navLink = document.querySelectorAll(".nav-link");

    navLink.forEach((link) =>
    link.addEventListener("click", () => {
        ul.classList.remove("show");
    })
    );

    
})

