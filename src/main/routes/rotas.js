import React from "react";
import { Route, Switch, HashRouter } from "react-router-dom";

//import CadastroUsuario from "../../pages/cadastroUsuario";
import Home from "../../pages/home";
import Login from "../../pages/login";
import ConsultaFuncionarios from "../../pages/funcionarios/consulta-funcionarios";

const Rotas = () => {
  return (
    <HashRouter>
      <Switch>
        <Home path="/home" component={Home} />
        <Route path="/login" component={Login} />
        {/* <Route path="/cadastro-usuario" component={CadastroUsuario} /> */}
        <Route path="/consulta-funcionarios" component={ConsultaFuncionarios} />
      </Switch>
    </HashRouter>
  );
};

export default Rotas;
