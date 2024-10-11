document.addEventListener("DOMContentLoaded", () => {
    // Selecciona todos los productos
    const productos = document.querySelectorAll(".tarjetaproducto");


    productos.forEach(producto => {
        const tallas = producto.querySelectorAll(".tallas .talla");
        const precios = producto.querySelectorAll(".precios span");
        const botonAgregar = producto.querySelector(".agregar-carrito");
    
        // Función para eliminar la clase 'active' de todas las tallas
        const eliminarActive = () => {
            tallas.forEach(talla => {
                talla.classList.remove('active');
            });
        };
    
        // Lógica general para las demás prendas
        tallas.forEach(talla => {
            talla.addEventListener("click", () => {
                eliminarActive();
                talla.classList.add('active');
    
                // Mostrar el precio correspondiente según la talla seleccionada para otras prendas
                const tallaTexto = talla.textContent.trim();
                precios.forEach(precio => precio.style.display = "none");
    
                if (["4", "6", "8"].includes(tallaTexto)) {
                    producto.querySelector(".precio1").style.display = "inline";
                } else if (["10", "12", "14", "16"].includes(tallaTexto)) {
                    producto.querySelector(".precio2").style.display = "inline";
                } else {
                    producto.querySelector(".precio3").style.display = "inline";
                }
            });
        });
    
        // Lógica específica para los jeans
        const esJeans = producto.classList.contains('jeans');
        if (esJeans) {
            tallas.forEach(talla => {
                talla.addEventListener("click", () => {
                    eliminarActive();
                    talla.classList.add('active');
    
                    // Mostrar el precio correspondiente según la talla seleccionada para los jeans
                    const tallaTexto = talla.textContent.trim();
                    precios.forEach(precio => precio.style.display = "none");
    
                    if (["4"].includes(tallaTexto)) {
                        producto.querySelector(".precio1").style.display = "inline";
                    } else if (["6", "8", "10", "12", "14", "16", "18"].includes(tallaTexto)) {
                        producto.querySelector(".precio2").style.display = "inline";
                    } else if (["28", "30", "32","34", "36"].includes(tallaTexto)) {
                        producto.querySelector(".precio3").style.display = "inline";
                    } else if (["38", "40", "42"].includes(tallaTexto)) {
                        producto.querySelector(".precio4").style.display = "inline";
                    }
                });
            });
        }

        // Lógica específica para las sabanas
        const ropadecasa = producto.classList.contains('sabanas');
        if (ropadecasa) {
            tallas.forEach(talla => {
                talla.addEventListener("click", () => {
                    eliminarActive();
                    talla.classList.add('active');
    
                    // Mostrar el precio correspondiente según la talla seleccionada para los jeans
                    const tallaTexto = talla.textContent.trim();
                    precios.forEach(precio => precio.style.display = "none");
    
                    if (["1M"].includes(tallaTexto)) {
                        producto.querySelector(".precio1").style.display = "inline";
                    } else if (["1.20"].includes(tallaTexto)) {
                        producto.querySelector(".precio2").style.display = "inline";
                    } else if (["1.40"].includes(tallaTexto)) {
                        producto.querySelector(".precio3").style.display = "inline";
                    } else if (["1.60"].includes(tallaTexto)) {
                        producto.querySelector(".precio4").style.display = "inline";
                    } else if (["2.00"].includes(tallaTexto)) {
                        producto.querySelector(".precio5").style.display = "inline";
                    } 
                });
            });
        }

        // Lógica específica para las del toldillo
        const toldillo = producto.classList.contains('toldillo');
        if (toldillo) {
            tallas.forEach(talla => {
                talla.addEventListener("click", () => {
                    eliminarActive();
                    talla.classList.add('active');
    
                    // Mostrar el precio correspondiente según la talla seleccionada para los jeans
                    const tallaTexto = talla.textContent.trim();
                    precios.forEach(precio => precio.style.display = "none");
    
                    if (["1M"].includes(tallaTexto)) {
                        producto.querySelector(".precio1").style.display = "inline";
                    } else if (["1.20-1.40"].includes(tallaTexto)) {
                        producto.querySelector(".precio2").style.display = "inline";
                    } else if (["1.60"].includes(tallaTexto)) {
                        producto.querySelector(".precio3").style.display = "inline";
                    } else if (["2.00"].includes(tallaTexto)) {
                        producto.querySelector(".precio4").style.display = "inline";
                    }
                });
            });
        }

         // Lógica específica para el protector de colchon 
         const protector = producto.classList.contains('protector');
         if (protector) {
             tallas.forEach(talla => {
                 talla.addEventListener("click", () => {
                     eliminarActive();
                     talla.classList.add('active');
     
                     // Mostrar el precio correspondiente según la talla seleccionada para los jeans
                     const tallaTexto = talla.textContent.trim();
                     precios.forEach(precio => precio.style.display = "none");
     
                     if (["1.40"].includes(tallaTexto)) {
                         producto.querySelector(".precio1").style.display = "inline";
                     } else if (["1.60"].includes(tallaTexto)) {
                         producto.querySelector(".precio2").style.display = "inline";
                     } else if (["2.00"].includes(tallaTexto)) {
                         producto.querySelector(".precio3").style.display = "inline";
                     }
                 });
             });
         }

         // Lógica específica para los acolchados
         const acolchados = producto.classList.contains('acolchados');
         if (acolchados) {
             tallas.forEach(talla => {
                 talla.addEventListener("click", () => {
                     eliminarActive();
                     talla.classList.add('active');
     
                     // Mostrar el precio correspondiente según la talla seleccionada para los jeans
                     const tallaTexto = talla.textContent.trim();
                     precios.forEach(precio => precio.style.display = "none");
     
                     if (["1.40"].includes(tallaTexto)) {
                         producto.querySelector(".precio1").style.display = "inline";
                     } else if (["1.60"].includes(tallaTexto)) {
                         producto.querySelector(".precio2").style.display = "inline";
                     } else if (["2.00"].includes(tallaTexto)) {
                         producto.querySelector(".precio3").style.display = "inline";
                     }
                 });
             });
         }
    });
    
    // carrito
    const abri = document.querySelector('#carrito');
    const containerCartproducts = document.querySelector('.tarjeta-productos-carrito');
    const cerar = document.querySelector('#cerrar-carrito');

    // Mostrar/ocultar carrito
    abri.addEventListener('click', () => {
        containerCartproducts.classList.remove('hidden-cart');
    });
    
    cerar.addEventListener('click', () => {
        containerCartproducts.classList.add('hidden-cart');
    });

    // Funcionalidad del carrito
    const cartInfo = document.querySelector('.cart-products');
    const rowProduct = document.querySelector('.cart-products-container');

    // Lista de productos
    const productsList = document.querySelectorAll('.tarjetaproducto');

    let allProducts = [];

    const valortotal = document.querySelector('.total-pagar');
    const countproducts = document.querySelector('#contador-productos');

    productsList.forEach(product => { 
        product.addEventListener('click', e => {
            if (e.target.classList.contains('agregar-carrito')) {
                const tallaSeleccionada = product.querySelector('.talla.active').textContent.trim();

                let precioSeleccionado;
                if (product.querySelector('.precio1').style.display === 'inline') {
                    precioSeleccionado = product.querySelector('.precio1').textContent;
                } else if (product.querySelector('.precio2').style.display === 'inline') {
                    precioSeleccionado = product.querySelector('.precio2').textContent;
                } else if (product.querySelector('.precio3').style.display === 'inline') {
                    precioSeleccionado = product.querySelector('.precio3').textContent;
                }

                // Crear el objeto con la información del producto
                const nombrecolegio = document.querySelector('.nombre-colegio span').textContent
                const infoProduct = {
                    imagen: product.querySelector('img').src,
                    title: product.querySelector('h6').textContent,
                    talla: tallaSeleccionada,
                    quantity: 1,
                    price: precioSeleccionado,
                    nombrecoleg:nombrecolegio,
                }

                // Buscar si el producto con la talla ya existe
                let productExists = allProducts.find(p => p.title === infoProduct.title && p.talla === infoProduct.talla);
                if (productExists) {
                    productExists.quantity += 1;
                } else {
                    allProducts = [...allProducts, infoProduct];
                }

                localStorage.setItem('carrito', JSON.stringify(allProducts));

                showhtml();
            }
        });
    });

    // lo de quitar el producto 
    // lo de quitar el producto 
rowProduct.addEventListener('click', e => {
    if (e.target.classList.contains('quitar-product')) {
        // Selecciona el producto en el carrito que se va a eliminar
        const productElement = e.target.closest('.cart-products');  // Busca el contenedor más cercano del producto
        
        // Extrae el título y la talla del producto a eliminar
        const title = productElement.querySelector('.titulo-carrito-producto').textContent.split('/')[0].trim();  // Separar título y nombre del colegio
        const talla = productElement.querySelector('.talla-carrito').textContent.trim();
        
        // Filtrar el array de productos, eliminando solo el que tenga el mismo título y la misma talla
        allProducts = allProducts.filter(product => product.title !== title || product.talla !== talla);

        // Actualizar el carrito en localStorage
        localStorage.setItem('carrito', JSON.stringify(allProducts));

        // Actualizar el HTML del carrito
        showhtml();
    }
});


    // Función para mostrar html 
    const showhtml = () => {
        // Limpiar el HTML anterior
        rowProduct.innerHTML = '';
    
        // Variables para el total del dinero a pagar y el total de productos en el carrito
        let total = 0;
        let totalofproducts = 0;
    
        // Iterar sobre todos los productos en el carrito
        // Limpieza y conversión del precio antes de calcular
allProducts.forEach(product => {
    const containerproduct = document.createElement('div');
    containerproduct.classList.add('cart-products');

    containerproduct.innerHTML = `
        <div class="cart-products">
            <a href="#blusamoderna">
                <img src="${product.imagen}" alt="${product.title}"> </a>
            <div class="descri-product">
                <a href="">
                    <h6 class="titulo-carrito-producto">${product.title}/${product.nombrecoleg}</h6>
                </a>
                <p class="talla-carrito">${product.talla}</p>
                <div class="cantidad-carrito">
                    <button class="cantidad-baja">
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px"
                            viewBox="0 -960 960 960" width="20px">
                            <path
                                d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z" />
                        </svg>
                    </button>
                        <span class="cantidad-valor">${product.quantity}</span>
                    <button class="cantidad-sube">+</button>
                </div>
                <span class="precio-producto-carrito">${product.price}</span>
            </div>
            <svg class="quitar-product" xmlns="http://www.w3.org/2000/svg" height="24px"
                viewBox="0 -960 960 960" width="20px">
                <path
                    d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z" />
            </svg>
        </div>`
        ;

    rowProduct.append(containerproduct);

    // Verifica el valor original del precio
    console.log("Precio original: ", product.price);

    // Eliminar el símbolo de dólar, los puntos de miles y reemplazar la coma decimal
    let priceFormatted = product.price.replace(/\$/g, '').replace(/\./g, '').replace(',', '.');

    // Mostrar un log para verificar que los precios están bien formateados
    console.log("Price Formatted: ", priceFormatted);

    // Convertir el precio a número flotante
    let productPrice = parseFloat(priceFormatted);

    // Verifica si el precio es un número válido
    if (!isNaN(productPrice)) {
        // Calcular el total
        total += productPrice * product.quantity;
    } else {
        console.log(`Error al convertir el precio: ${product.price}`);
    }

    // Sumar la cantidad de productos
    totalofproducts += product.quantity;
    countproducts.innerText = totalofproducts;
});

        // Mostrar el total actualizado correctamente
        valortotal.innerText = `$${total.toLocaleString('es-CO')}`;
        countproducts.innerText = totalofproducts;

        
            countproducts.innerText = totalofproducts;
        
        
    };
    

    // Manejo de cantidad de productos
    rowProduct.addEventListener('click', function(e) {
        if (e.target.classList.contains('cantidad-sube')) {
            const cantidadValor = e.target.previousElementSibling;
            const productTitle = e.target.closest('.cart-products').querySelector('.titulo-carrito-producto').textContent;
            const productTalla = e.target.closest('.cart-products').querySelector('.talla-carrito').textContent.trim();

            // Incrementar cantidad
            let product = allProducts.find(p => p.title === productTitle && p.talla === productTalla);
            product.quantity++;
            cantidadValor.textContent = product.quantity;

            // Recalcular total
            showhtml();
        }

        if (e.target.classList.contains('cantidad-baja')) {
            const cantidadValor = e.target.nextElementSibling;
            const productTitle = e.target.closest('.cart-products').querySelector('.titulo-carrito-producto').textContent;
            const productTalla = e.target.closest('.cart-products').querySelector('.talla-carrito').textContent.trim();

            // Decrementar cantidad si es mayor que 1
            let product = allProducts.find(p => p.title === productTitle && p.talla === productTalla)
            if (product.quantity > 1) {
                product.quantity--;
                cantidadValor.textContent = product.quantity;

                // Recalcular total
                showhtml();
            }
        }
    });  
});

// colores de los productos de la lenceria de casa
document.querySelectorAll(".ropadecasa-producto").forEach(producto => {
    const imagenMostrada = producto.querySelector("img"); // Selecciona la imagen mostrada en cualquier producto
    const colores = producto.querySelectorAll(".colores-casa span");

    colores.forEach(color => {
        color.addEventListener('click', () => {
            const tipoProducto = color.getAttribute("data-cortina"); // Usamos "data-cortina" para identificar si es cortina o sabana
            const colorId = color.classList[0]; // El color es la primera clase, ej: rosado, gris-oscuro

            // Busca la imagen correspondiente según el color y tipo de producto (cortina o sabana)
            const imagenCorrespondiente = producto.querySelector(`.imagenes-casa .${colorId}.${tipoProducto}`);

            if(imagenCorrespondiente) {
                const nuevaSrc = imagenCorrespondiente.getAttribute("src");
                imagenMostrada.setAttribute("src", nuevaSrc);
            }
        });
    });
});

const tiposAlgodon = document.querySelectorAll('.sabanas-algodon .descri-tipo img');

// Añade un evento de clic a cada imagen
tiposAlgodon.forEach(tipo => {
    tipo.addEventListener('click', () => {
        // Obtiene la fuente de la imagen
        const imagen = tipo.src; // Fuente de la imagen

        // Cambia la imagen en la sección sabana-infantil
        const imagenSabana = document.getElementById('imagen-sabana');
        imagenSabana.src = imagen; // Actualiza la imagen
    });
});

// Selecciona todas las imágenes de la sección de tipos
const tipos = document.querySelectorAll('.descri-tipo');

// Añade un evento de clic a cada imagen
tipos.forEach(tipo => {
    tipo.addEventListener('click', () => {
        // Obtiene la imagen y el nombre del estampado
        const imagen = tipo.querySelector('img').src; // Fuente de la imagen
        const nombreEstampado = tipo.querySelector('h3').innerText; // Nombre del estampado
        

        // Cambia la imagen en la sección sabana-infantil
        const imagenSabana = document.getElementById('imagen-sabana');
        imagenSabana.src = imagen;

        // Cambia el nombre del estampado en la descripción
        const nombreElemento = document.getElementById('nombre-estampado');
        nombreElemento.innerHTML = `Estampado de <span>${nombreEstampado}</span>`;
    });
});



 


