/*
//condicional con if, ejercicio a)

 let articulo = prompt("ingresa el artículo");

if (articulo == ""){
    alert("No has ingresado ningún artículo")

} else{
    alert ("Has ingresado el artículo " + articulo)
}


//algortimo utilizando un ciclo, ejercicio b)

let producto = prompt(
    "ingresa una opción \n 1- Cuaderno \n 2- Bases de madera \n 3- Láminas \n 4- Libros craft \n 5- Acuarelas"
);

while(producto != "salir"){
switch(producto){
    case "1":
    alert("Has seleccionado el producto Cuaderno");
    break;
    case "2":
    alert("Has selecionado el producto Bases de madera");
    break
    case "3":
    alert("Has seleccionado el producto Láminas");
    break
    case "4":
    alert("Has seleccionado el producto Libros Craft");
    break
    case "5":
    alert("Has seleccionado el producto Acuarelas");
    break
}

producto = prompt(
    "ingresa una opción \n 1- Cuaderno \n 2- Bases de madera \n 3- Láminas \n 4- Libros craft \n 5- Acuarelas"
);
if(producto == "salir") alert("Gracias, que tengas un buen día");

} 

//simulador interactivo precio con IVA 21%, ejercicio c)

const IVA = 0.21;
let precioUno = 20;
let precioDos = 10;
let precioTres = 50;
let precioCuatro= 35;
let precioCinco= 75;
let resultadouno = precioUno * IVA + precioUno ;
let resultadodos = precioDos * IVA + precioDos;
let resultadotres = precioTres * IVA + precioTres;
let resultadocuatro= precioCuatro * IVA + precioCuatro;
let resultadocinco= precioCinco * IVA + precioCinco;
let producto2 = prompt(
    "Ingresa una opción. Para salir ingresa SALIR \n 1- Cuaderno \n 2- Bases de madera \n 3- Láminas \n 4- Libros craft \n 5- Acuarelas"
);
while(producto2 != "SALIR"){
switch(producto2){
    case "1":
    alert("Has seleccionado el producto Cuaderno y su precio es " + resultadouno + "€");
    break;
    case "2":
    alert("Has selecionado el producto Bases de madera y su precio es " + resultadodos + "€");
    break
    case "3":
    alert("Has seleccionado el producto Láminas y su precio es " + resultadotres + "€");
    break
    case "4":
    alert("Has seleccionado el producto Libros Craft y su precio es " + resultadocuatro + "€");
    break
    case "5":
    alert("Has seleccionado el producto Acuarelas y su precio es " + resultadocinco + "€");
    break
    default:
        alert("opción no válida");
}

producto2 = prompt(
    "ingresa una opción. Para salir ingresa SALIR \n 1- Cuaderno \n 2- Bases de madera \n 3- Láminas \n 4- Libros craft \n 5- Acuarelas"
);
if(producto2 == "SALIR") alert("Gracias, que tengas un buen día");

}


//arrays - productos con mismo precio + IVA - imprimir en consola

const precioBase = 20;
const IVA = 0.21;
let resultado = precioBase * IVA + precioBase;

const productos =  [{id: 1, producto: "Láminas"}, 
{id: 2, producto: "Blocs de dibujo"},
{id: 3, producto: "Acuarelas"}];

for (const producto of productos){
    console.log("El id del producto es " + producto.id);
    console.log("El producto " + producto.producto + " tiene un precio de " + resultado + "€ IVA incl.");
}


//Primera entrega proyecto final

function saludar(){
alert("Bienvenid@ a nuestra tienda online de Papeleria Creativa");
}

const IVA = 0.21;
let precio=20;
let precio2=40;
let resultado = precio * IVA + precio ;
let resultado2 = precio2 * IVA + precio2 ;



const productoColor = [{id: 1, color: "azul"}, 
{id: 2, color: "blanco"},
{id: 3, color: "rojo"},
{id: 4, color: "amarillo"}, 
{id: 5, color: "marrón"}];

saludar();

let producto2 = prompt(
    "Ingresa una opción. Para salir ingresa SALIR \n 1- Cuaderno \n 2- Bases de madera \n 3- Láminas \n 4- Libros craft \n 5- Acuarelas"
);


while(producto2 != "SALIR"){
switch(producto2){
    case "1":
    alert("Has seleccionado el producto Cuaderno y su precio es " + resultado + "€" + "en color " + productoColor[1].color);
    break;
    case "2":
    alert("Has selecionado el producto Bases de madera y su precio es " + resultado + "€"+ " en color " + productoColor[4].color + " y " + resultado2 + "€" + " en color " + productoColor[3].color);
    break
    case "3":
    alert("Has seleccionado el producto Láminas y su precio es " + resultado + "€" + " en color " + productoColor[2].color);
    break
    case "4":
    alert("Has seleccionado el producto Libros Craft y su precio es " + resultado + "€" + " en color " + productoColor[3].color);
    break
    case "5":
    alert("Has seleccionado el producto Acuarelas y su precio es " + resultado + "€" + " en color " + productoColor[3].color);
    break
    default:
        alert("opción no válida");
}

producto2 = prompt(
    "ingresa una opción. Para salir ingresa SALIR \n 1- Cuaderno \n 2- Bases de madera \n 3- Láminas \n 4- Libros craft \n 5- Acuarelas"
);
if(producto2 == "SALIR") alert("Gracias, que tengas un buen día.");

}

*/

class producto {
    constructor(nombre, precio, detalle, cantidad){
this.nombre = nombre;
this.precio = parseInt(precio);
this.detalle = detalle;
this.cantidad = cantidad;
this.disponible = true;
}

sumarIva(){
    return this.precio * 1.21;
}
vender(){
    this.disponible = false;
}

precioSugerido(){
    return this.precio *1.21 * 1.25;
}

}

let arrayProductos = [];

do{
    let comprobacion = prompt ("Ingresa el nombre del producto o SALIR para finalizar");   
    if (comprobacion === "SALIR" || comprobacion === "salir" || comprobacion === "Salir"){
        break;
    }else{
        nombreP = comprobacion;
        let precioP = prompt("Ingresa el precio del producto");
        let detalleP = prompt ("Ingresa el detalle del producto");
        let cantidadP = prompt("Ingresa la cantidad del producto");
        arrayProductos.push(new producto(nombreP, precioP, detalleP, cantidadP));
    }
}
while(comprobacion != "SALIR" || comprobacion != "salir" || comprobacion != "Salir")
console.log(arrayProductos);

for (let producto of arrayProductos){
    let contenedor = document.createElement("div");

    contenedor.innerHTML = 
    `<h3> Nombre: $(producto.nombre)</h3>
    <p> Precio € : $(producto.precio)</p>
    <p> Cantidad: $(producto.cantidad)</p>
    <p> Detalle: $(producto.detalle)</p>`;
    document.body.appendChild(contenedor);
}

let sinStock = arrayProductos.filter(producto => producto.cantidad == 0 || producto.disponible == false);
console.log (sinStock);
document.write("<h3> Lista de Productos sin Stock (cantidad = 0 o disponible = false): </h3>");
for(let producto of sinStock){

document.write("<h3>Lista de Productos con poco Stock (menos de 3 unidades): </h3>");
let contenedor = document.createElement("div");

contenedor.innerHTML = `<h3> Nombre: $(producto.nombre)</h3>
<p> Precio € : $(producto.precio)</p>
<p> Cantidad: $(producto.cantidad)</p>
<p> Detalle: $(producto.detalle)</p>`;
document.body.appendChild(contenedor);
}