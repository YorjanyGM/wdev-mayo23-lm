var formularioEstudiante = document.getElementById('formularioEstudiante');

var apibase = "https://paginas-web-cr.com/ApiPHP/apis/";
var apicrear = "InsertarEstudiantes.php";
const myModalInsertar = new bootstrap.Modal(document.getElementById('myModalInsertar'));

$("#btnEnviar").click(function (e) {     
    myModalInsertar.show();
    e.preventDefault();
    
    var datosEnviar = {
        "cedula" : $('#cedula').val(),
        "correoelectronico" : $('#correoelectronico').val(),
        "telefono" : $('#telefono').val(),
        "telefonocelular" : $('#telefonocelular').val(),
        "fechanacimiento" : $('#fechanacimiento').val(),
        "sexo" : $('#sexo').val(),
        "direccion" : $('#direccion').val(),
        "nombre" : $('#nombre').val(),
        "apellidopaterno" : $('#apellidopaterno').val(),
        "apellidomaterno" : $('#apellidomaterno').val(),
        "nacionalidad" : $('#nacionalidad').val(),
        "idCarreras" : $('#idCarreras').val(),
        "usuario" : $('#usuario').val(),
    }
   
apiurl = apibase + apicrear ;
enviardatos(datosEnviar);

function enviardatos(datosEnviar) {
    $.ajax({
    type: "POST",
    url: apiurl,
    data: JSON.stringify(datosEnviar),
    dataType: "json",
    success: function (response) {
        completeInsert();
        console.log(response);
    },
    error: function ( xhr, textStatus, errorThrown){
            console.log("Error ", errorThrown);
        }            
});
}
    
});

function completeInsert(){
window.location = 'listarestudiantes.html';
}