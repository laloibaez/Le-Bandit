document.addEventListener("DOMContentLoaded", function() {

    const botonContacto = document.getElementById("contacto");
    const divFinal = document.getElementById("final");

    window.addEventListener("scroll", function() {

        const desplazamientoY = window.scrollY;
        const alturaVentana = window.innerHeight;
        const alturaBoton = botonContacto.offsetHeight;
        const distanciaFinal = divFinal.offsetTop;

        if (desplazamientoY + alturaVentana - alturaBoton >= distanciaFinal) {
            botonContacto.style.position = "fixed";
            botonContacto.style.bottom = (alturaVentana - (distanciaFinal - desplazamientoY)) + "px";
        } else {
            botonContacto.style.position = "fixed";
            botonContacto.style.bottom = "3%";
        }
    });
});

$(document).ready(function () {
    const multipleItemCarousel = document.querySelector("#testimonialCarousel");
    const cardWidth = $(".carousel-item").outerWidth(true); // Incluye margen
    const totalItems = $(".carousel-item").length;
    let scrollPosition = 0;

    // Clonar todos los elementos para crear un bucle infinito
    $(".carousel-item").each(function () {
        $(this).clone().appendTo(".carousel-inner");
    });

    // Inicializar el carrusel de Bootstrap
    const carousel = new bootstrap.Carousel(multipleItemCarousel, {
        interval: false,
    });

    // Manejo del evento para pantallas grandes
    if (window.matchMedia("(min-width:576px)").matches) {
        $(".carousel-control-next").on("click", function () {
            if (scrollPosition < (totalItems * cardWidth)) {
                console.log("next");
                scrollPosition += cardWidth * 1; // Mueve 3 elementos a la vez
                $(".carousel-inner").animate({ scrollLeft: scrollPosition }, 800);
            } else {
                // Desplazarse de nuevo al inicio sin que parezca un regreso
                console.log("Ciclo infinito: desplazando al inicio");
                scrollPosition = 0; // Resetea a la posición inicial
                $(".carousel-inner").animate({ scrollLeft: scrollPosition }, 0); // Sin animación
                $(".carousel-inner").animate({ scrollLeft: scrollPosition }, 800); // Luego inicia la animación
            }
        });

        $(".carousel-control-prev").on("click", function () {
            if (scrollPosition > 0) {
                console.log("previous");
                scrollPosition -= cardWidth * 3; // Mueve 3 elementos a la vez
                $(".carousel-inner").animate({ scrollLeft: scrollPosition }, 800);
            }
        });

    } else {
        // Lógica para dispositivos móviles
        $(".carousel-control-next").on("click", function () {
            const nextIndex = Math.ceil(scrollPosition / cardWidth) + 1; // Calcula el siguiente índice
            if (nextIndex < totalItems) {
                console.log("next mobile");
                scrollPosition += cardWidth; // Mueve 1 elemento a la vez
                $(".carousel-inner").animate({ scrollLeft: scrollPosition }, 800);
            }
        });

        $(".carousel-control-prev").on("click", function () {
            const prevIndex = Math.floor(scrollPosition / cardWidth) - 1; // Calcula el índice anterior
            if (prevIndex >= 0) {
                console.log("previous mobile");
                scrollPosition -= cardWidth; // Mueve 1 elemento a la vez
                $(".carousel-inner").animate({ scrollLeft: scrollPosition }, 800);
            }
        });
    }
});
