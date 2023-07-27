var formulario = document.getElementById('formulario'); //en el ElementbyID se toma el ID del formulario del HTML "div id=formulario"
const ModalSucces = new bootstrap.Modal(document.getElementById('ModalSuccess')); 
//la línea de arriba es la que se copia del comando modal (bs5-modal-default) en el HTML "crearcurso.html" (está al final en un script) -->
//<--y se le pone el ID del primer div del modal, abajo de "if you want"

formulario.addEventListener('submit', function(e) //addEventListener() es para jalar la información del type del botón Enviar ("submit")-->
//<--y se le agrega la "function(e)" para evitar que se recargue el alerta del modal
{
    e.preventDefault(); //para evitar que la página se recargue automáticamente al ejercer un función de algún botón con MODAL
    //también es para evitar que se cierre el Modal.show
    alert('creando');
    ModalSucces.show(); //es la alerta del Modal diferente al "Alert" normal.


});

