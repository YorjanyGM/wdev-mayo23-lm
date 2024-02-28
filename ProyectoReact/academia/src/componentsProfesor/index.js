import React from 'react';

class ListarProfesores extends React.Component {
    constructor(props) {
        super(props);  

        this.state = {
            id: "",
            cedula: "",
            nombre: "",
            apellidopaterno: "",
            apellidomaterno: "",
            nacionalidad: "",
            correoelectronico: "",
            telefono: "",
            telefonocelular: "",
            fechanacimiento: "",
            sexo: "",
            direccion: "",
            idCarreras: "",
            usuario: "",
            url: "https://paginas-web-cr.com/ApiPHP/apis/",
            listar: "ListaProfesores.php",
            datos:[],
            datosCargados:false

        }
    }
    cargardatos (){
        console.log("cargando");
        var urllista = this.state.url + this.state.listar;
        const { url } = this.state;
        console.log(url);
        fetch (urllista)
        .then(respuesta => respuesta.json())
        .then((datosrespuesta) => {
            // pintartabla(datosrespuesta.data)
            console.log(datosrespuesta.data)
            this.setState ({datos: datosrespuesta.data, datosCargados:true})
        })
        .catch(console.log);
    }

    componentDidMount(){
        this.cargardatos();
    }

    render() {
        const {
            datos,
            datosCargados
        } = this.state;
        //setstate ---- PalabraClave para cargar datos en la tabla
        return ( 
            <div className="container">
                <h1> Listar Curso </h1>
                <div className="table-responsive">
                    <table className="table table-success">
                        <thead>
                            <tr>
                            <th scope="col">ID</th>
                                <th scope="col">Cedula</th>
                                <th scope="col">Nombre</th>
                                <th scope="col">Apellido Materno</th>
                                <th scope="col">Apellido Paterno</th>
                                <th scope="col">Nacionalidad</th>
                                <th scope="col">Correo</th>
                                <th scope="col">Telefono</th>
                                <th scope="col">Telefono Celular</th>
                                <th scope="col">Fecha de Nacimiento</th>
                                <th scope="col">Sexo</th>
                                <th scope="col">Dirección</th>
                                <th scope="col">idCarreras</th>
                                <th scope="col">Usuario</th>
                            </tr>
                        </thead>
                        <tbody>

                        {datos.map(
                            (datosExtraidos)=>(
                                <tr className="table-success">
                                <td scope="row">{datosExtraidos.id}</td>
                                <td>{datosExtraidos.cedula}</td>
                                <td>{datosExtraidos.nombre}</td>
                                <td>{datosExtraidos.apellidopaterno}</td>
                                <td>{datosExtraidos.apellidomaterno}</td>
                                <td>{datosExtraidos.nacionalidad}</td>
                                <td>{datosExtraidos.correoelectronico}</td>
                                <td>{datosExtraidos.telefono}</td>
                                <td>{datosExtraidos.telefonocelular}</td>
                                <td>{datosExtraidos.fechanacimiento}</td>
                                <td>{datosExtraidos.sexo}</td>
                                <td>{datosExtraidos.direccion}</td>
                                <td>{datosExtraidos.idCarreras}</td>
                                <td>{datosExtraidos.usuario}</td>
                            </tr>
                            )
                        )
                        }
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}
export default ListarProfesores;