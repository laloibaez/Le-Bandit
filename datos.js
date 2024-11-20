const productos = [
    { 
        nombre: "Straw Melon Ice and Straw Mango Ice", 
        tamano: "24 cm",  
        color: "Verde", 
        peso: "350g", 
        categoria: "FLIP", 
        precio: "S/75.00",
        descripcion: "Una combinación única de melón de fresa y mango para un sabor tropical helado.",
        imagen: "imagenes/imagen1.webp"
    },
    { 
        nombre: "Quad Berry Ice", 
        tamano: "18 cm",  
        color: "Morado", 
        peso: "250g", 
        categoria: "5K", 
        precio: "S/55.00",
        descripcion: "Una combinación de cuatro deliciosas bayas en una explosión refrescante y helada.",
        imagen: "imagenes/imagen2.jpg"
    },
    { 
        nombre: "Mango Aloe Ice", 
        tamano: "15 cm",  
        color: "Naranja", 
        peso: "200g", 
        categoria: "5K", 
        precio: "S/55.00",
        descripcion: "Un sabor tropical y refrescante que combina mango y aloe vera con un toque de frescura.",
        imagen: "imagenes/imagen3.webp"
    },
    { 
        nombre: "Strawberry Ice", 
        tamano: "12 cm",  
        color: "Rojo", 
        peso: "180g", 
        categoria: "5K", 
        precio: "S/55.00",
        descripcion: "El clásico sabor a fresa con una explosión helada para una experiencia dulce y refrescante.",
        imagen: "imagenes/imagen4.png"
    },
    { 
        nombre: "Berry Colada Ice and Kiberry Ice", 
        tamano: "20 cm",  
        color: "Amarillo", 
        peso: "300g", 
        categoria: "FLIP", 
        precio: "S/75.00",
        descripcion: "La fusión tropical de bayas y piña en una colada helada con un toque de kiberry.",
        imagen: "imagenes/imagen5.jpg"
    },
    { 
        nombre: "Apple Kiwi Melon Ice", 
        tamano: "14 cm",  
        color: "Verde", 
        peso: "210g", 
        categoria: "5K", 
        precio: "S/55.00",
        descripcion: "Una mezcla exótica de manzana, kiwi y melón con una brisa de frescura helada.",
        imagen: "imagenes/imagen6.webp"
    },
    { 
        nombre: "Blueberry Raspberry", 
        tamano: "13 cm",  
        color: "Azul", 
        peso: "190g", 
        categoria: "5K", 
        precio: "S/55.00",
        descripcion: "Un delicioso mix de arándanos y frambuesas con un toque helado que te encantará.",
        imagen: "imagenes/imagen7.webp"
    },
    { 
        nombre: "Berry Blast Ice and Straw Melon Ice", 
        tamano: "19 cm",  
        color: "Celeste", 
        peso: "310g", 
        categoria: "FLIP", 
        precio: "S/75.00",
        descripcion: "Una explosión de bayas con melón de fresa en una deliciosa mezcla helada.",
        imagen: "imagenes/imagen8.jpg"
    },
    { 
        nombre: "Straw Mango Ice and Tropical Ice", 
        tamano: "21 cm",  
        color: "Rojo", 
        peso: "320g", 
        categoria: "FLIP", 
        precio: "S/75.00",
        descripcion: "Fusión tropical de mango y fresas con un toque de frescura helada.",
        imagen: "imagenes/imagen9.jpg"
    },
    { 
        nombre: "Passion Punch Ice and Razz Nana Ice", 
        tamano: "22 cm",  
        color: "Rosa", 
        peso: "330g", 
        categoria: "FLIP", 
        precio: "S/75.00",
        descripcion: "Una explosión de frutas tropicales con maracuyá y frambuesa en una mezcla helada.",
        imagen: "imagenes/imagen10.webp"
    },
    { 
        nombre: "Grape Punch Ice and Berry Blast Ice", 
        tamano: "23 cm",  
        color: "Violeta", 
        peso: "340g", 
        categoria: "FLIP", 
        precio: "S/75.00",
        descripcion: "Uva y bayas combinadas en un delicioso cóctel helado que te refrescará.",
        imagen: "imagenes/imagen11.webp"
    }
];

document.addEventListener("DOMContentLoaded", function() {
    const productosElements = document.querySelectorAll(".producto");

    productosElements.forEach(function(element) {
        // Obtener el valor del atributo 'data-index'
        const dataIndex = element.getAttribute("data-index");

        // Si el 'data-index' es algo como 'nombreproducto1', asignamos el nombre del producto 1
        if (dataIndex) {
            const productoIndex = parseInt(dataIndex.replace("nombreproducto", "")) - 1;
            if (productoIndex >= 0 && productoIndex < productos.length) {
                element.textContent = productos[productoIndex].nombre;
            }
        }
    });
});
document.addEventListener("DOMContentLoaded", function() {
    const productosElements = document.querySelectorAll(".relleno");

    productosElements.forEach(function(element) {
        // Obtener el valor del atributo 'data-index'
        const dataIndex = element.getAttribute("data-index");

        // Si el 'data-index' es algo como 'relleno1', asignamos el nombre del producto 1
        if (dataIndex) {
            const productoIndex = parseInt(dataIndex.replace("relleno", "")) - 1;
            if (productoIndex >= 0 && productoIndex < productos.length) {
                element.textContent = productos[productoIndex].descripcion;
            }
        }
    });
});
document.addEventListener("DOMContentLoaded", function() {
    const productosElements = document.querySelectorAll(".info");

    productosElements.forEach(function(element) {
        // Obtener el valor del atributo 'data-index'
        const dataIndex = element.getAttribute("data-index");

        // Si el 'data-index' es algo como 'relleno1', asignamos el nombre del producto 1
        if (dataIndex) {
            const productoIndex = parseInt(dataIndex.replace("relleno", "")) - 1;
            if (productoIndex >= 0 && productoIndex < productos.length) {
                element.textContent = productos[productoIndex].descripcion;
            }
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const productosElements = document.querySelectorAll(".btn.btn-primary");

    productosElements.forEach(function (element) {
        // Obtener el valor del atributo 'data-index'
        const dataIndex = element.getAttribute("data-index");

        // Verificar que el 'data-index' sigue el formato 'boton1', 'boton2', etc.
        if (dataIndex && dataIndex.startsWith("boton")) {
            // Extraer el índice numérico del 'data-index' (por ejemplo, 'boton1' -> 0, 'boton2' -> 1)
            const productoIndex = parseInt(dataIndex.replace("boton", "")) - 1;

            // Verificar que el índice esté dentro del rango válido
            if (productoIndex >= 0 && productoIndex < productos.length) {
                // Asignar un event listener al botón para actualizar el contenido del h4
                element.addEventListener("click", function () {
                    // Obtener el elemento con id="nomProduc" y actualizar su contenido
                    const nomProduc = document.getElementById("nomProduc");
                    if (nomProduc) {
                        nomProduc.textContent = productos[productoIndex].nombre;
                    }
                });
            }
        }
    });
});
// Función para actualizar la imagen
function actualizarImagen(imagenUrl) {
    const imagen = document.getElementById("productoImagen");
    if (imagen) {
        imagen.src = imagenUrl;
    }
}

// Obtener todos los botones con la clase 'btn btn-primary'
const productosElements = document.querySelectorAll(".btn.btn-primary");

productosElements.forEach(function (element) {
    // Obtener el valor del atributo 'data-index'
    const dataIndex = element.getAttribute("data-index");

    // Verificar que el 'data-index' sigue el formato 'boton1', 'boton2', etc.
    if (dataIndex && dataIndex.startsWith("boton")) {
        // Extraer el índice numérico del 'data-index' (por ejemplo, 'boton1' -> 1, 'boton2' -> 2)
        const productoIndex = parseInt(dataIndex.replace("boton", "")) - 1;

        // Verificar que el índice esté dentro del rango válido
        if (productoIndex >= 0 && productoIndex < productos.length) {
            // Asignar un event listener al botón para actualizar el contenido de los elementos con los ids correspondientes
            element.addEventListener("click", function () {
                // Actualizar los valores de los span correspondientes
                const tamano = document.getElementById("tamano");
                const color = document.getElementById("color");
                const peso = document.getElementById("peso");
                const categoria = document.getElementById("categoria");
                const precio = document.getElementById("precio");

                // Verificar que los elementos existan y actualizar su contenido
                if (tamano) tamano.textContent = productos[productoIndex].tamano;
                if (color) color.textContent = productos[productoIndex].color;
                if (peso) peso.textContent = productos[productoIndex].peso;
                if (categoria) categoria.textContent = productos[productoIndex].categoria;
                if (precio) precio.textContent = productos[productoIndex].precio;

                // Actualizar la imagen del producto
                actualizarImagen(productos[productoIndex].imagen);
            });
        }
    }
});