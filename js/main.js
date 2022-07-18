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
while(comprobacion != "SALIR" || comprobacion != "salir" || comprobacion != "Salir");
console.log(arrayProductos);

for (let producto of arrayProductos){
    let contenedor = document.createElement("div");

    contenedor.innerHTML = 
    `<h3> Nombre: $¨producto.nombre)</h3>
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


class producto {
    constructor(nombre, precio, detalle, cantidad) {
      this.nombre = nombre;
      this.precio = parseInt(precio);
      this.detalle = detalle;
      this.cantidad = cantidad;
      this.disponible = true;
    }

    sumarIva() {
      return this.precio * 1.21;
    }
    vender() {
      this.disponible = false;
    }

    precioSugerido() {
      return this.precio * 1.21 * 1.25;
    }
  }

  let arrayProductos = [];

  do {
    // Comprobación puede ser una constante porque una ves que el prompt retorna no cambia el valor
    const comprobacion = prompt("Ingresa el nombre del producto o SALIR para finalizar");

    // Lo pongo en una linea para no ocupar mucho espacio
    if (comprobacion === "SALIR" || comprobacion === "salir" || comprobacion === "Salir") { break; }

    // Sacamos el else porque al final es un poco inutil, si entra en el if se corta el ciclo así que la unica manera
    // de que pueda llegar a las instrucciones que estan abajo es que el codigo no entre al if, por consecuente no muera el ciclo
    nombreP = comprobacion;
    let precioP = prompt("Ingresa el precio del producto");
    let detalleP = prompt("Ingresa el detalle del producto");
    let cantidadP = prompt("Ingresa la cantidad del producto");
    arrayProductos.push(new producto(nombreP, precioP, detalleP, cantidadP));
  } while (true)

  for (let producto of arrayProductos) {
    let contenedor = document.createElement("div");

    contenedor.innerHTML = `<h3> Nombre: ${producto.nombre}</h3>
    <p> Precio € : ${producto.precio}</p>
    <p> Cantidad: ${producto.cantidad}</p>
    <p> Detalle: ${producto.detalle}</p>`;
    document.body.appendChild(contenedor);
  }

  console.log(arrayProductos);


//segunda entrega login - Registro con JSON y localStorage

myFunction();
function myFunction(){
    console.log("my function")
}



let mi_funcion = function(){
    console.log("mi función");
}

mi_funcion();

let otra_funcion = () => console.log("otra función");

otra_funcion();

//----

let main = function(){
    captura_boton();
}

let captura_boton= function(){
    document.querySelector(".myButton input").setAttribute("onclick","dataRead()");
}

let dataRead = function(){
    console.log("Intentaremos leer los datos del formulario");
console.log(
    document.querySelector("#nombre").value, 
    document.querySelector("#apellido").value, 
    document.querySelector("#email").value, 
    document.querySelector("#pass").value, 
);

let myObject = {
   nombre: document.querySelector("#nombre").value, 
    apellido:document.querySelector("#apellido").value, 
   email:document.querySelector("#email").value, 
   pass: document.querySelector("#pass").value, 
}



console.log(myObject);
console.log(JSON.stringify(myObject));
save_localStorage(myObject);
}

let save_localStorage = function(myObj){
    localStorage.setItem("miInfo", JSON.stringify(myObj));
}

let read_localStorage = function(){
    let miInfo = localStorage.getItem("miInfo");
    console.log(miInfo);
    let myObject = JSON.parse(miInfo);
    console.log(myObject);
    document.querySelector("#nombre").value = myObject.nombre; 
    document.querySelector("#apellido").value = myObject.apellido; 
    document.querySelector("#email").value = myObject.email; 
    document.querySelector("#pass").value = myObject.pass; 
}

let reset = function(){
    document.querySelector("#nombre").value = "";
    document.querySelector("#apellido").value = "";
    document.querySelector("#email").value = "";
    document.querySelector("#pass").value = "";

}


main();



document.getElementById('sweetalert').addEventListener('click', function(){

    swal({
        title: 'Añadido al carrito',
        text: "El artículo se ha añadido a tu carrito",
        type: 'success',
        confirmButtonColor: '#3085d6',
        confirmButtonText: 'OK!'
      })
  
    });

*/

//Envío formulario con Fetch 


const d = document;

function contactForm(){
    const $form = d.querySelector(".contact-form"),
    $inputs = d.querySelectorAll(".contact-form [required");
}

//console.log($inputs)

$inputs.forEach((input)=> {

    const $span = d.createElement("span");
    $span.id = input.name;
    $span.textContent = input.title;
    $span.classList.add("contact-form-error", "none");
    input.insertAdjacentElement("afterend", $span);
    
});


d.addEventListener("keyup", (e) =>{
    if(e.target.matches(".contact-form [required]")){
        let $input = e.target, 
        pattern = $input.pattern || $input.dataset.pattern;
    }
})

d.addEventListener("submit", (e) =>{
    alert("Enviando Formulario");


const $loader = d.querySelector(".contact-form-loader"),
$response = d.querySelector(".contact-form-response");

$loader.classList.remove("none");

setTimeout(() =>{
    $loader.classList.add("none");
    $response.classList.remove("none");
    $form.reset();

    setTimeout(() => $response.classList.add("none"), 3000);
}, 3000);
});

d.addEventListener("DOMContentLoaded", contactForm)