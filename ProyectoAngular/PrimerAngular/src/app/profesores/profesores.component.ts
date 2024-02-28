import { Component, OnInit } from '@angular/core';
import { Profesores } from '../models/profesores';
import { Respuestaprofesores } from '../models/respuestaprofesores';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-profesores',
  templateUrl: './profesores.component.html',
  styleUrls: ['./profesores.component.css']

})

export class ProfesoresComponent implements OnInit {
  title = 'primerangular';
  arregloDatos: Profesores[] = [];
  textoBoton = 'Guardar';

  selectedCursos: Profesores = new Profesores ();
  selectedCurso: Profesores = {
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
    const url = 'https://paginas-web-cr.com/ApiPHP/apis/BorrarProfesores.php';
    
    // Datos que deseas enviar en la solicitud POST
    const data = {
      id: this.modeloProfesores.id,
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
    const url = 'https://paginas-web-cr.com/ApiPHP/apis/InsertarProfesores.php';
    
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
    this.http.post(url, this.modeloProfesores, { headers }).subscribe(
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
    const url = 'https://paginas-web-cr.com/ApiPHP/apis/ActualizarProfesores.php';
    
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
    this.http.post(url, this.modeloProfesores, { headers }).subscribe(
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
    
    const url = "https://paginas-web-cr.com/ApiPHP/apis/ListaProfesores.php";

    // esto es un fetch o un AjAX en JQuery
    this.http.get<Respuestaprofesores>(url).subscribe(
      (response) => {
        this.arregloDatos = response.data; 
        console.log(response.data);
      },
      (error) =>{
        console.error('Error en la carga de datos', error);
      }
    )

  }

  modeloProfesores: Profesores = new Profesores();

  addAndEdit() {
    this.modeloProfesores.usuario = 'Yorjany';

    if ( this.modeloProfesores.id == "" ){
      this.enviarSolicitudPost();
    }
    else{
      this.enviarSolicitudPostEditar();
      this.limpiar();
    }
  }
  
  cargaredicion(item: Profesores){
    this.modeloProfesores = item;
    console.log(item);
    this.textoBoton = "Modificar";
  }

  limpiar () {
    this.modeloProfesores = new Profesores();
    this.textoBoton = "Guardar";
  }
  

  eliminar (item: Profesores) {
    this.modeloProfesores = item;
    this.enviarSolicitudPostEliminar();
  }

  ngOnInit() {
    this.obtenerDatos();
}



}