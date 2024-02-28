import { Component, OnInit } from '@angular/core';
import { Grupos } from '../models/grupos';
import { Respuestagrupos } from '../models/respuestagrupos';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-grupos',
  templateUrl: './grupos.component.html',
  styleUrls: ['./grupos.component.css']

})

export class GruposComponent implements OnInit {
  title = 'primerangular';
  arregloDatos: Grupos[] = [];
  textoBoton = 'Guardar';

  selectedGrupos: Grupos = new Grupos ();
  selectedGrupo: Grupos = {
    id:'',
    nombre:''
  }
  constructor(private http: HttpClient ) {}

  enviarSolicitudPostEliminar() {
    const url = 'https://paginas-web-cr.com/ApiPHP/apis/BorrarGrupo.php';
    
    // Datos que deseas enviar en la solicitud POST
    const data = {
      id: this.modeloGrupos.id,
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
    const url = 'https://paginas-web-cr.com/ApiPHP/apis/InsertarGrupo.php';
    
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
    this.http.post(url, this.modeloGrupos, { headers }).subscribe(
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
    const url = 'https://paginas-web-cr.com/ApiPHP/apis/ActualizarGrupo.php';
    
    // Datos que deseas enviar en la solicitud POST
    const data = {
      id: 'valor1',
      nombre: 'valor2',
      // parametro1: 'valor1',
      // parametro2: 'valor2'
      // Agrega más datos según tus necesidades
    };

    // Configura las cabeceras para la solicitud POST
    const headers = new HttpHeaders({
      'Content-Type': 'application/json' // Ajusta el tipo de contenido según el requerimiento de la API
    });

    // Realiza la solicitud POST
    this.http.post(url, this.modeloGrupos, { headers }).subscribe(
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
    
    const url = "https://paginas-web-cr.com/ApiPHP/apis/ListaGrupo.php";

    // esto es un fetch o un AjAX en JQuery
    this.http.get<Respuestagrupos>(url).subscribe(
      (response) => {
        this.arregloDatos = response.data; 
        console.log(response.data);
      },
      (error) =>{
        console.error('Error en la carga de datos', error);
      }
    )

  }

  modeloGrupos: Grupos = new Grupos();

  addAndEdit() {

    if ( this.modeloGrupos.id == "" ){
      this.enviarSolicitudPost();
    }
    else{
      this.enviarSolicitudPostEditar();
      this.limpiar();
    }
  }
  
  cargaredicion(item: Grupos){
    this.modeloGrupos = item;
    console.log(item);
    this.textoBoton = "Modificar";
  }

  limpiar () {
    this.modeloGrupos = new Grupos();
    this.textoBoton = "Guardar";
  }
  

  eliminar (item: Grupos) {
    this.modeloGrupos = item;
    this.enviarSolicitudPostEliminar();
  }

  ngOnInit() {
    this.obtenerDatos();
}



}
