import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap';

//Importando componentes
import Dashboard from './componentPlantilla/dashboard';
import ListarCurso from './componentsCurso/index';
import CrearCrurso from './componentsCurso/crearcurso';
import Menu from './componentPlantilla/menu'
import { Route, BrowserRouter as Router } from 'react-router-dom';
import ListarProfesores from './componentsProfesor';
import ListarEstudiantes from './componentsEstudiante';
import ListarGrupo from './componentsGrupo';

function App() {
  return (
    <div className="container">
      <Menu></Menu>
      <Router>
        <Route exact path= "/palabraamigableconelusuario" component= {Dashboard}></Route>
        <Route path = "/listadecursos" component= {ListarCurso}></Route>
        <Route path = "/listadeestudiantes" component= {ListarEstudiantes}></Route>
        <Route path = "/listadeprofesores" component= {ListarProfesores}></Route>
        <Route path = "/listadegrupos" component= {ListarGrupo}></Route>
        <Route path = "/CrearCurso" component= {CrearCrurso}></Route>
      </Router>
    </div>
    // <div classNameName="App">
    //   <header classNameName="App-header">
    //     <img src={logo} classNameName="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       classNameName="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    );
}
export default App;
