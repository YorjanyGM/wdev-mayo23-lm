let formulario = document.querySelector('#formulario');

var apibase = "https://paginas-web-cr.com/ApiPHP/apis/";
var apicrear = "InsertarUsuarios.php";

const myModalInsertar = new bootstrap.Modal(document.getElementById('myModalInsertar'));

var urlcrear = apibase + apicrear;

$("#btnEnviar").click(function (e) { 
    e.preventDefault();
    myModalInsertar.show();

    var datosEnviar = {
        "name":$("#name").val(),
        "password":$("#password").val(),
        "email":$("#email").val()
    }

    $.ajax({
        type: "POST",
        url: urlcrear,
        data: JSON.stringify(datosEnviar),
        dataType: "json",
        success: function (response) {
            completeInsert();
        },
        error: function (xhr, textStatus, errorThrown){
        console.log("Error: ", errorThrown);
        }
    });
});
function completeInsert() {
    window.location = 'listarusuarios.html';
}
    