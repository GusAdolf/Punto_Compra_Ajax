

let productos = [];

//document.querySelector('opciones').addEventListener('click',traerDatosDulces);

let opciones=document.getElementById("opciones");
//let oll = document.getElementById("separacion_info");
opciones.addEventListener('change', (event) => {
    console.log('categoria', event.target.value);
});


function motrar_productos() {

    var xmlhttp = new XMLHttpRequest();

    xmlhttp.onreadystatechange = function() {

        
             if (xmlhttp.readyState == XMLHttpRequest.DONE) {   // XMLHttpRequest.DONE == 4
                if (xmlhttp.status == 200) {
                    document.getElementById("productos").innerHTML = xmlhttp.responseText;
                }
                else if (xmlhttp.status == 400) {
                   alert('There was an error 400');
                }
                else {
                    alert('something else other than 200 was returned');
                }
             }

    };

    xmlhttp.open("GET", archivo_texto(), true);
    xmlhttp.send();

    function archivo_texto(){

        if(document.getElementById("opciones").value=="0"){
            return "blanco.txt"
        }
        else if(document.getElementById("opciones").value=="1"){
            return "comida.txt"
        }else if(document.getElementById("opciones").value=="2"){
            return "bebidas.txt"
        }else if(document.getElementById("opciones").value=="3"){
            return "dulces.txt"
        }

    }
    
}
// Agregar productos a la cesta
function agregar(nombre, precio) {
    // Crear un objeto
    producto = {
                nombre: nombre,
        precio
    };
    // Agregar producto a lista
    productos.push(producto);
    // Crear la tabla

    let  html='<table class=" shwadow table">'
    html += "<thead>"

    html +=' <tr>     <th scope="col">Producto</th>   <th scope="col">Precio</th>   </tr> <br><br>'              
    for (var i = 0; i < productos.length; i++) {

       
        html+="<tr>"       
        html += "<tr>"
        html += "<td>" + productos[i].nombre + "</td>"
        html += "<td>" + productos[i].precio + "</td>"
        html+=" </tr>"
        html+="</thead"
        html += "</tr><br>"
    }
    html += "</thead";
    html += "</table";

    // Mostrar la tabla en html
    var mi_contenedor = document.getElementById("datos");
    mi_contenedor.innerHTML = html;
}




 window.onload= motrar_productos;
    
    

    

   