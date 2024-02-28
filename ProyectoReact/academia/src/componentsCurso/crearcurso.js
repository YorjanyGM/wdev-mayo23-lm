import React from 'react';

class CrearCrurso extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            id: "",
            nombre: "",
            descripcion: "",
            tiempo: "",
            usuario: "",
            url: "https://paginas-web-cr.com/ApiPHP/apis/",
            listar: "ListaCurso.php",
            datos:[],
            datosCargados:false
        }
    }

    cambiovalorinput = (e) => {
        const state = this.state;
        state[e.target.name] = e.target.value;
        this.setState({state});
    }

    limpiardatos = (e) => {

    }

    const enviardatos = () => {
        setDatos(event.target.value);
    } 

    enviardatos() {
        setUpdate()
        }

    render() { 

        const {
            id,
            nombre,
            descripcion,
            tiempo,
            usuario,
            url,
            listar,
            datos,
            datosCargados
        } = this.state;

        return ( 
        <div class="container">
        <form id="formulario" onSubmit={this.enviardatos}>
            <div class="mb-3">
            <label for="" class="form-label">Nombre</label>
            <input required type="text" onChange={this.cambiovalorinput} value={nombre}
                class="form-control" name="nombre" id="nombre" aria-describedby="helpId" placeholder="Ingrese el nombre">
            </input>
            <small id="helpId" class="form-text text-muted">Nombre</small>
            </div>
            <div class="mb-3">
            <label for="" class="form-label">Descripción</label>
            <input required type="text" onChange={this.cambiovalorinput} value={descripcion}
                class="form-control" name="descripcion" id="descripcion" aria-describedby="helpId" placeholder="Ingrese la descripción">
            </input>
            <small id="helpId" class="form-text text-muted">Descripción</small>
            </div>
            <div class="mb-3">
            <label for="" class="form-label">Tiempo</label>
            <input required type="text" onChange={this.cambiovalorinput} value={tiempo}
                class="form-control" name="tiempo" id="tiempo" aria-describedby="helpId" placeholder="Ingrese el tiempo">
            </input>
            <small id="helpId" class="form-text text-muted">Tiempo</small>
            </div>
            <button type="reset" class="btn btn-danger">Reset</button>
            ||
            <button type="submit" class="btn btn-primary">Enviar</button>
        </form>
        </div>
        );
    }
}
export default CrearCrurso;