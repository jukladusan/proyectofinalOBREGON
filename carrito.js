const menus = [{nombre: "Inicio", url:"index.html"},
    {nombre: "Contacto", url:"contacto.html"},
    {nombre:"Carrito de compra", url:"carrito.html"},
]

let productocarritos = JSON.parse(localStorage.getItem("carrito")) || [];

cargarelmenu()
cargarcarrito();
calculartotal()

function cargarelmenu(){
    let enlances = document.getElementById('ulmenu')
    for (const menu of menus){
        let lista = document.createElement("li")
        lista.innerHTML = `<a href="${menu.url}">${menu.nombre}</a>`
        enlances.appendChild(lista)
    }
}

function cargarcarrito() {
    let enlaces = document.getElementById('tablacar');
    for (const productocarrito of productocarritos) {
        let lista = document.createElement("tr");
        lista.id = `${productocarrito.id}`;
        lista.innerHTML = `<td><img src="${productocarrito.img}" width="50"></td>
                           <td>${productocarrito.cantidad}</td> 
                           <td>${productocarrito.nombre}</td>
                           <td>${productocarrito.precio}</td>
                           <td>${productocarrito.cantidad * productocarrito.precio}</td>
                           <td><button id="btneliminar" onclick="eliminarproducto('${productocarrito.id}')">X</button></td>`; 
        enlaces.appendChild(lista);
    }
}

function eliminarproducto(id) {
    let nodo = document.getElementById(id);
    nodo.remove();
    productocarritos = productocarritos.filter(producto => producto.id !== id);
    const enJSON = JSON.stringify(productocarritos);
    localStorage.setItem("carrito", enJSON)
    calculartotal()
}

function calculartotal() {
    let total = 0
    for (const productocarrito of productocarritos) {
        total = total + productocarrito.precio * productocarrito.cantidad
    }
    let totalcarrito = document.getElementById('totalcar');
    totalcarrito.textContent = "Total: " + total
}

function finalizarcompra() {
    for (const productocarrito of productocarritos) {
            eliminarproducto(productocarrito.id)
        }
}
