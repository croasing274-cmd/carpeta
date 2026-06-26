const productos = [
    { id: 1, nombre: "Laptop", categoria: "Electrónica", precio: 1200, stock: 5 },
    { id: 2, nombre: "Mouse", categoria: "Electrónica", precio: 25, stock: 30 },
    { id: 3, nombre: "Camisa", categoria: "Ropa", precio: 45, stock: 10 },
    { id: 4, nombre: "Monitor", categoria: "Electrónica", precio: 300, stock: 0 },
    { id: 5, nombre: "Pantalón", categoria: "Ropa", precio: 60, stock: 8 }
];

function mostrarTabla(lista) {
    const tabla = document.getElementById("tablaProductos");
    tabla.innerHTML = `
        <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Categoría</th>
            <th>Precio</th>
            <th>Stock</th>
        </tr>
    `;
    lista.forEach(producto => {
        tabla.innerHTML += `
            <tr>
                <td>${producto.id}</td>
                <td>${producto.nombre}</td>
                <td>${producto.categoria}</td>
                <td>$${producto.precio}</td>
                <td>${producto.stock}</td>
            </tr>
        `;
    });
}
mostrarTabla(productos);
document.getElementById("Filtrar").addEventListener("click", () => {

    let filtrados = productos.filter(producto =>
        producto.categoria === "Electrónica" && producto.precio < 500
    );
    mostrarTabla(filtrados);
});
document.getElementById("Filtrartodo").addEventListener("click", () => {
    mostrarTabla(productos);
});
document.getElementById("Descuento").addEventListener("click", () => {

    let descuento = productos.map(producto => ({...producto,precio: (producto.precio * 0.90).toFixed(2)
    }));

    mostrarTabla(descuento);
});
document.getElementById("CeroStock").addEventListener("click", () => {

    let producto = productos.find(producto => producto.stock === 0);

    mostrarTabla([producto]);
});
document.getElementById("Agregar").addEventListener("click", () => {
    const producto = {
        id: Number(document.getElementById("id").value),
        nombre: document.getElementById("nombre").value,
        categoria: document.getElementById("categoria").value,
        precio: Number(document.getElementById("precio").value),
        stock: Number(document.getElementById("stock").value)
    };
    productos.push(producto);
    mostrarTabla(productos);
    document.getElementById("id").value = "";
    document.getElementById("nombre").value = "";
    document.getElementById("categoria").value = "";
    document.getElementById("precio").value = "";
    document.getElementById("stock").value = "";
});