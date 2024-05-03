function sumarProductos(precio,cantidad){
    
    let totalGastado = precio*cantidad;
    return totalGastado
}
let precio=5000;
alert("El precio de cada remera es :$ "+precio)
let cantidad= prompt("ingresa la cantidad deseada del producto");
let totalCompra=sumarProductos(precio,cantidad);
console.log("El total gastado es : $" +totalCompra)
//pensando en el usuario para que sepa jajaj
Swal.fire("El total gastado es : $" +totalCompra);