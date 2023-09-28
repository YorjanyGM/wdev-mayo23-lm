var apibase = "https://paginas-web-cr.com/ApiPHP/apis/";
var apiconsultar = "ListaEstudiantes.php";
let tablaresultado = document.querySelector('#tablaEstudiantes');
let apiEliminar="BorrarEstudiantes.php";
let apiactualizar="ActualizarEstudiantes.php";
 const myModalEliminar = new bootstrap.Modal(document.getElementById('modalEliminarEstudiante'));
 const myModalEditar = new bootstrap.Modal(document.getElementById('myModalEditar'));
 const modalSuccessEditar = new bootstrap.Modal(document.getElementById('modalSuccessEditar'));


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
                    <td>${objetoindividual.telefono}</td>
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
                        <a name="Editar" id="Editar" class="btn btn-success" role="button" onclick="mostrarEditarModal('${objetoindividual.id}', '${objetoindividual.cedula}', '${objetoindividual.correoelectronico}', '${objetoindividual.telefono}','${objetoindividual.telefonocelular}','${objetoindividual.fechanacimiento}','${objetoindividual.sexo}','${objetoindividual.direccion}','${objetoindividual.nombre}','${objetoindividual.apellidopaterno}','${objetoindividual.apellidomaterno}','${objetoindividual.nacionalidad}','${objetoindividual.idCarreras}','${objetoindividual.usuario}')">Editar</a>
                        <a name="Eliminar" id="Eliminar" class="btn btn-danger" role="button" onclick="mostrarModalEliminar('${objetoindividual.id}')">Eliminar</a>"
                    </td>
                    </tr>
            `;
        }
    }
//<<<<<<<<<-----------------------------ELIMINAR DATO-------------------------------------------------------------------------->>>>>>>>
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
        tablaresultado.innerHTML = ``;
        cargardatos();        
    }
}

//<<<<<<<<<-----------------------------Editar datos-------------------------------------------------------------------------->>>>>>>>
var urlActualizar = apibase + apiactualizar;
function mostrarEditarModal(id, cedula, correoelectronico, telefono, telefonocelular, fechanacimiento, sexo, direccion, nombre, apellidopaterno, apellidomaterno, nacionalidad, idCarreras, usuario){
        $("#id").val(id);
        $("#cedula").val(cedula);
        $("#correoelectronico").val(correoelectronico);
        $("#telefono").val(telefono);
        $("#telefonocelular").val(telefonocelular);
        $("#fechanacimiento").val(fechanacimiento);
        $("#sexo").val(sexo);
        $("#direccion").val(direccion);
        $("#nombre").val(nombre);
        $("#apellidopaterno").val(apellidopaterno);
        $("#apellidomaterno").val(apellidomaterno);
        $("#nacionalidad").val(nacionalidad);
        $("#idCarreras").val(idCarreras);
        $("#usuario").val(usuario);
    myModalEditar.show();
}

$("#btnEnviar").click(function (e) { 
    e.preventDefault();
    var datosEditar = {
        "id":$("#id").val(),
        "cedula":$("#cedula").val(),
        "correoelectronico":$("#correoelectronico").val(),
        "telefono":$("#telefono").val(),
        "telefonocelular":$("#telefonocelular").val(),
        "fechanacimiento":$("#fechanacimiento").val(),
        "sexo":$("#sexo").val(),
        "direccion":$("#direccion").val(),
        "nombre":$("#nombre").val(),
        "apellidopaterno":$("#apellidopaterno").val(),
        "apellidomaterno":$("#apellidomaterno").val(),
        "nacionalidad":$("#nacionalidad").val(),
        "idCarreras":$("#idCarreras").val(),
        "usuario":$("#usuario").val()
    }
    
    $.ajax({
        type: "POST",
        url: urlActualizar,
        data: JSON.stringify(datosEditar),
        dataType: "json",
        success: function (response) {
            console.log(response);
            success();
        },
        error: function(xhr, textStatus, errorThrown){
            console.log(error, errorThrown);
        }
    });
 });

function success(){    
    modalSuccessEditar.show();
    tablaresultado.innerHTML = ``;
    cargardatos();
    myModalEditar.hide();
}