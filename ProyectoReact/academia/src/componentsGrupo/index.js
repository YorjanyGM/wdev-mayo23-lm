import React from 'react';

class ListarGrupo extends React.Component {
    constructor(props) {
        super(props);  

        this.state = {
            id: "",
            nombre: "",
            url: "https://paginas-web-cr.com/ApiPHP/apis/",
            listar: "ListaGrupo.php",
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
                                <th scope="col">Nombre</th>
                            </tr>
                        </thead>
                        <tbody>

                        {datos.map(
                            (datosExtraidos)=>(
                                <tr className="table-success">
                                <td scope="row">{datosExtraidos.id}</td>
                                <td>{datosExtraidos.nombre}</td>
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
export default ListarGrupo;