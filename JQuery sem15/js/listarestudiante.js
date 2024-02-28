var apibase = "https://paginas-web-cr.com/ApiPHP/apis/";
var apiconsultar = "ListaEstudiantes.php";
let tablaresultado = document.querySelector('#tablaEstudiantes');
let apiEliminar="BorrarEstudiantes.php";
let apiactualizar="ActualizarEstudiantes.php";
 const myModalEliminar = new bootstrap.Modal(document.getElementById('modalEliminarEstudiante'));
// const myModalEditar = new bootstrap.Modal(document.getElementById('myModalEditar'));
// const modalSuccessEditar = new bootstrap.Modal(document.getElementById('modalSuccessEditar'));


 $(document).ready(function () {
     cargardatos();
 });
    var url = apibase + apiconsultar;
        function cargardatos() {
            $.ajax({
            type: "POST",
            url: "https://paginas-web-cr.com/ApiPHP/apis/ListaEstudiantes.php",
            dataType: "json",
            success: function (response) {
                ajustardatostabla(response.data);
                console.log(response);
            },
            error: function ( xhr, textStatus, errorThrown){
                    console.log("Error ", errorThrown);
                }            
        });
        }

        function ajustardatostabla(response){
            for (const objetoindividual of response) {
                tablaEstudiantes.innerHTML +=`
                    <tr class="table-primary">
                    <td scope="row">${objetoindividual.id}</td>
                    <td>${objetoindividual.cedula}</td>
                    <td>${objetoindividual.correoelectronico}</td>
                    <td>${objetoindividual.telefonocelular}</td>
                    <td>${objetoindividual.fechanacimiento}</td>
                    <td>${objetoindividual.sexo}</td>
                    <td>${objetoindividual.direccion}</td>
                    <td>${objetoindividual.nombre}</td>
                    <td>${objetoindividual.apellidopaterno}</td>
                    <td>${objetoindividual.apellidomaterno}</td>
                    <td>${objetoindividual.nacionalidad}</td>
                    <td>${objetoindividual.idCarreras}</td>
                    <td>${objetoindividual.usuario}</td>
                    <td>
                        <a name="Editar" id="Editar" class="btn btn-success" role="button" onclick="mostrarEditarModal('${objetoindividual.id}', '${objetoindividual.cedula}', '${objetoindividual.correoelectronico}', '${objetoindividual.telefonocelular}','${objetoindividual.fechanacimiento}','${objetoindividual.sexo}','${objetoindividual.direccion}','${objetoindividual.nombre}','${objetoindividual.apellidopaterno}','${objetoindividual.apellidomaterno}','${objetoindividual.nacionalidad}','${objetoindividual.idCarreras}','${objetoindividual.usuario}')">Editar</a>
                        <a name="Eliminar" id="Eliminar" class="btn btn-danger" role="button" onclick=""mostrarModalEliminar('${objetoindividual.id}')">Eliminar</a>"
                    </td>
                    </tr>
            `;
        }
    }
//Eliminar dato
function mostrarModalEliminar(id){
    eliminandoDato(id);
    myModalEliminar.show();
     
}

function eliminandoDato(id){
    var datosEnviar = {
        "id":id
    }
    
    apiurl = apibase + apiEliminar; 
    $.ajax({
        type: "POST",
        url: apiurl,
        data: JSON.stringify(datosEnviar),
        dataType: "JSON",
        success: function (response) {
            completeDelete();
        },
        error: function ( xhr, textStatus, errorThrown){
            console.log("Error ", errorThrown);
        }
    });

    function completeDelete(){
        myModalEliminar.hide();
        tablaresultado.innerHTML = ``;
        cargardatos();        
    }
}

//Editar dato
var urlActualizar = apibase + apiactualizar;
function mostrarEditarModal(id, nombre, descripcion, tiempo, usuario){
        $("#id").val(id);
        $("#nombre").val(nombre);
        $("#descripcion").val(descripcion);
        $("#tiempo").val(tiempo);
        $("#usuario").val(usuario);
    myModalEditar.show();
}

$("#btnEditar").click(function (e) { 
    e.preventDefault();
    var datosEditar = {
        "id":$("#id").val(),
        "nombre":$("#nombre").val(),
        "descripcion":$("#descripcion").val(),
        "tiempo":$("#tiempo").val(),
        "usuario":$("#usuario").val(),
    }
    
    $.ajax({
        type: "POST",
        url: urlActualizar,
        data: JSON.stringify(datosEditar),
        dataType: "json",
        success: function (response) {
            success();
            console.log(response);
        },
        error: function( xhr, textStatus, errorThrown){
            console.log(error, errorThrown )
        }
    });
});

function success(){    
    modalSuccessEditar.show();
    tablaresultado.innerHTML = ``;
    cargardatos();
    myModalEditar.hide();
}