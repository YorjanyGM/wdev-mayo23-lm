    //ListaUsuarios.php
    //"id"
    //"name"
    //"email"
   // "password"

let tablaresultado = document.querySelector('#tablaresultado');
var apibase = "https://paginas-web-cr.com/ApiPHP/apis/";
var apiconsultar = "ListaUsuarios.php";
var urlListar = apibase + apiconsultar;

$(document).ready(function () {
    cargardatos();
});

function cargardatos(){
$.ajax({
    type: "POST",
    url: urlListar,
    dataType: "json",
    success: function (response) {
        console.log (response)

        ajustardatostabla(response.data);
    },
    error: function ( xhr, textStatus, errorThrown){
        console.log("Error ", errorThrown);
    }  
});
    function ajustardatostabla(response) {
        for (const objetoindividual of response) {
            tablaresultado.innerHTML +=`
                <tr class="table-primary">
                <td scope="row">${objetoindividual.id}</td>
                <td>${objetoindividual.name}</td>
                <td>${objetoindividual.email}</td>
                <td>${objetoindividual.password}</td>
                <td>
                    <a name="Editar" id="Editar" class="btn btn-success" role="button" onclick="mostrarEditarModal('${objetoindividual.id}', '${objetoindividual.name}', '${objetoindividual.email}', '${objetoindividual.password}')">Editar</a>
                    <a name="Eliminar" id="Eliminar" class="btn btn-danger" role="button" onclick="mostrarModalEliminar('${objetoindividual.id}')">Eliminar</a>
                </td>
                </tr>
        `;
        }
    }
}