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
    "ingresa una opción \n 1- Cuaderno \n 2- Bases de madera \n 3- Láminas \n 4- Libros craft \n 5- Acuarelas"
);
if(producto2 == "SALIR") alert("Gracias, que tengas un buen día");

}