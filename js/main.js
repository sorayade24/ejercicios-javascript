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