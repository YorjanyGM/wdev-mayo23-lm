import React from 'react';

class ListarCurso extends React.Component {
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
        //setstate ---- PalabraClave para cargar datos en la tabla
        return ( 
            <div className="container">
                <h1> Listar Curso </h1>
                <div className="table-responsive">
                    <table className="table table-success">
                        <thead>
                            <tr>
                                <th scope="col">ID</th>
                                <th scope="col">Nombre</th>
                                <th scope="col">Descripcion</th>
                                <th scope="col">Tiempo</th>
                                <th scope="col">Usuario</th>
                            </tr>
                        </thead>
                        <tbody>

                        {datos.map(
                            (datosExtraidos)=>(
                                <tr className="table-success">
                                <td scope="row">{datosExtraidos.id}</td>
                                <td>{datosExtraidos.nombre}</td>
                                <td>{datosExtraidos.descripcion}</td>
                                <td>{datosExtraidos.tiempo}</td>
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
export default ListarCurso;