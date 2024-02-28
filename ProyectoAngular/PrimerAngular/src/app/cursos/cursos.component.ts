import { Component, OnInit } from '@angular/core';
import { Cursos } from '../models/cursos';
import { Respuestacursos } from '../models/respuestacursos';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']

})

export class CursosComponent implements OnInit {
  title = 'primerangular';
  arregloDatos: Cursos[] = [];
  textoBoton = 'Guardar';

  selectedCursos: Cursos = new Cursos ();
  selectedCurso: Cursos = {
    id:'',
    nombre:'',
    descripcion:'',
    tiempo:'',
    usuario:''
  }
  constructor(private http: HttpClient ) {}

  enviarSolicitudPostEliminar() {
    const url = 'https://paginas-web-cr.com/ApiPHP/apis/BorrarCursos.php';
    
    // Datos que deseas enviar en la solicitud POST
    const data = {
      id: this.modeloCurso.id,
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
    const url = 'https://paginas-web-cr.com/ApiPHP/apis/InsertarCursos.php';
    
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
    this.http.post(url, this.modeloCurso, { headers }).subscribe(
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
    const url = 'https://paginas-web-cr.com/ApiPHP/apis/ActualizarCursos.php';
    
    // Datos que deseas enviar en la solicitud POST
    const data = {
      id: 'valor1',
      nombre: 'valor2',
      descripcion: 'valor2',
      tiempo: 'valor2'
      // parametro1: 'valor1',
      // parametro2: 'valor2'
      // Agrega más datos según tus necesidades
    };

    // Configura las cabeceras para la solicitud POST
    const headers = new HttpHeaders({
      'Content-Type': 'application/json' // Ajusta el tipo de contenido según el requerimiento de la API
    });

    // Realiza la solicitud POST
    this.http.post(url, this.modeloCurso, { headers }).subscribe(
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
    
    const url = "https://paginas-web-cr.com/ApiPHP/apis/ListaCurso.php";

    // esto es un fetch o un AjAX en JQuery
    this.http.get<Respuestacursos>(url).subscribe(
      (response) => {
        this.arregloDatos = response.data; 
        console.log(response.data);
      },
      (error) =>{
        console.error('Error en la carga de datos', error);
      }
    )

  }

  modeloCurso: Cursos = new Cursos();

  addAndEdit() {
    this.modeloCurso.usuario = 'Yorjany';

    if ( this.modeloCurso.id == "" ){
      this.enviarSolicitudPost();
    }
    else{
      this.enviarSolicitudPostEditar();
      this.limpiar();
    }
  }
  
  cargaredicion(item: Cursos){
    this.modeloCurso = item;
    console.log(item);
    this.textoBoton = "Modificar";
  }

  limpiar () {
    this.modeloCurso = new Cursos();
    this.textoBoton = "Guardar";
  }
  

  eliminar (item: Cursos) {
    this.modeloCurso = item;
    this.enviarSolicitudPostEliminar();
  }

  ngOnInit() {
    this.obtenerDatos();
}



}
