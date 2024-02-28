import { Component, OnInit } from '@angular/core';
import { Estudiantes } from '../models/estudiantes';
import { Respuestaestudiantes } from '../models/respuestaestudiantes';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-estudiantes',
  templateUrl: './estudiantes.component.html',
  styleUrls: ['./estudiantes.component.css']

})

export class EstudiantesComponent implements OnInit {
  title = 'primerangular';
  arregloDatos: Estudiantes[] = [];
  textoBoton = 'Guardar';

  selectedCursos: Estudiantes = new Estudiantes ();
  selectedCurso: Estudiantes = {
    id: '',
    cedula: '',
    correoelectronico: '',
    telefono: '',
    telefonocelular: '',
    fechanacimiento: '',
    sexo: '',
    direccion: '',
    nombre: '',
    apellidopaterno: '',
    apellidomaterno: '',
    nacionalidad: '',
    idCarreras: '',
    usuario: ''
  }
  constructor(private http: HttpClient ) {}

  enviarSolicitudPostEliminar() {
    const url = 'https://paginas-web-cr.com/ApiPHP/apis/BorrarEstudiantes.php';
    
    // Datos que deseas enviar en la solicitud POST
    const data = {
      id: this.modeloEstudiantes.id,
      // Agrega más datos según tus necesidades
    };

    // Configura las cabeceras para la solicitud POST
    const headers = new HttpHeaders({
      'Content-Type': 'application/json' // Ajusta el tipo de contenido según el requerimiento de la API
    });

    // Realiza la solicitud POST
    this.http.post(url, data, { headers }).subscribe(
      (response) => {
        // Maneja la respuesta de la API
        console.log('Respuesta de la API:', response);
        this.obtenerDatos();
      },
      (error) => {
        // Maneja los errores de la solicitud
        console.error('Error:', error);
      }
    );
  }

  enviarSolicitudPost() {
    const url = 'https://paginas-web-cr.com/ApiPHP/apis/InsertarEstudiantes.php';
    
    // Datos que deseas enviar en la solicitud POST
    const data = {
      parametro1: 'valor1',
      parametro2: 'valor2'
      // Agrega más datos según tus necesidades
    };

    // Configura las cabeceras para la solicitud POST
    const headers = new HttpHeaders({
      'Content-Type': 'application/json' // Ajusta el tipo de contenido según el requerimiento de la API
    });

    // Realiza la solicitud POST
    this.http.post(url, this.modeloEstudiantes, { headers }).subscribe(
      (response) => {
        // Maneja la respuesta de la API
        console.log('Respuesta de la API:', response);
        this.obtenerDatos();
      },
      (error) => {
        // Maneja los errores de la solicitud
        console.error('Error:', error);
      }
    );
  }

  enviarSolicitudPostEditar() {
    const url = 'https://paginas-web-cr.com/ApiPHP/apis/ActualizarEstudiantes.php';
    
    // Datos que deseas enviar en la solicitud POST
    const data = {
    id: 'Valor1',
    cedula: 'Valor2',
    correoelectronico: 'Valor2',
    telefono: 'Valor2',
    telefonocelular: 'Valor2',
    fechanacimiento: 'Valor2',
    sexo: 'Valor2',
    direccion: 'Valor2',
    nombre: 'Valor2',
    apellidopaterno: 'Valor2',
    apellidomaterno: 'Valor2',
    nacionalidad: 'Valor2',
    idCarreras: 'Valor2',
    usuario: 'Valor2'
      // parametro1: 'valor1',
      // parametro2: 'valor2'
      // Agrega más datos según tus necesidades
    };

    // Configura las cabeceras para la solicitud POST
    const headers = new HttpHeaders({
      'Content-Type': 'application/json' // Ajusta el tipo de contenido según el requerimiento de la API
    });

    // Realiza la solicitud POST
    this.http.post(url, this.modeloEstudiantes, { headers }).subscribe(
      (response) => {
        // Maneja la respuesta de la API
        console.log('Respuesta de la API:', response);
        this.obtenerDatos();
      },
      (error) => {
        // Maneja los errores de la solicitud
        console.error('Error:', error);
      }
    );
  }

  obtenerDatos()
  {
    
    const url = "https://paginas-web-cr.com/ApiPHP/apis/ListaEstudiantes.php";

    // esto es un fetch o un AjAX en JQuery
    this.http.get<Respuestaestudiantes>(url).subscribe(
      (response) => {
        this.arregloDatos = response.data; 
        console.log(response.data);
      },
      (error) =>{
        console.error('Error en la carga de datos', error);
      }
    )

  }

  modeloEstudiantes: Estudiantes = new Estudiantes();

  addAndEdit() {
    this.modeloEstudiantes.usuario = 'Yorjany';

    if ( this.modeloEstudiantes.id == "" ){
      this.enviarSolicitudPost();
    }
    else{
      this.enviarSolicitudPostEditar();
      this.limpiar();
    }
  }
  
  cargaredicion(item: Estudiantes){
    this.modeloEstudiantes = item;
    console.log(item);
    this.textoBoton = "Modificar";
  }

  limpiar () {
    this.modeloEstudiantes = new Estudiantes();
    this.textoBoton = "Guardar";
  }
  

  eliminar (item: Estudiantes) {
    this.modeloEstudiantes = item;
    this.enviarSolicitudPostEliminar();
  }

  ngOnInit() {
    this.obtenerDatos();
}



}