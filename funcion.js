const menus = [{nombre: "Inicio", url:"index.html"},
    {nombre: "Contacto", url:"contacto.html"},
    {nombre:"Carrito de compra", url:"carrito.html"},
]

const productos = [
    {nombre:"Almohadon", precio:"10000", img:"img/almohadon.jpeg", id:"1", stock:20},
    {nombre:"Bolso", precio:"30000", img:"img/bolso.jpeg", id:"2", stock:10},
    {nombre:"Ladrillos", precio:"5000", img:"img/ladrillos.jpeg", id:"3", stock:24},
    {nombre:"Mat premium", precio:"30000", img:"img/matpremium.jpeg", id:"4", stock:30},
    {nombre:"Mat simple", precio:"25000", img:"img/matsimple.jpeg", id:"5", stock:28},
    {nombre:"Pelota", precio:"15000", img:"img/pelota.jpeg", id:"6", stock:50},
]

cargarelmenu()
cargarproductos()

function cargarelmenu(){
    let enlances = document.getElementById('ulmenu')
    for (const menu of menus){
        let lista = document.createElement("li")
        lista.innerHTML = `<a href="${menu.url}">${menu.nombre}</a>`
        enlances.appendChild(lista)
    }
}

function cargarproductos(){
    let ventas = document.getElementById('boxprductos')
        for (const producto of productos){
            let contenedor = document.createElement("div")
            contenedor.innerHTML = `<div id="boxproducto">
                <h3>${producto.nombre}</h3>
                <img src=${producto.img} alt="">
                <p>Precio: ${producto.precio}</p>
                <p>Stock: ${producto.stock}</p>
                <button onclick = "verdetalle('${producto.id}')">Detalles</button>
            </div>`
            ventas.appendChild(contenedor);
        }
}

function verdetalle(idproducto) {
    const buscarProducto = productos.find(producto => producto.id === idproducto); 
    const enJSON = JSON.stringify(buscarProducto)
    localStorage.setItem("detalleproducto", enJSON) 
    window.location.href = "detalle.html"
}
