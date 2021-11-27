import React from "react";
import { Route, Switch, HashRouter } from "react-router-dom";

//import CadastroUsuario from "../../pages/cadastroUsuario";
import Home from "../../pages/home";
import Login from "../../pages/login";

const Rotas = () => {
  return (
    <HashRouter>
      <Switch>
        <Home path="/home" component={Home} />
        <Route path="/login" component={Login} />
        {/* <Route path="/cadastro-usuario" component={CadastroUsuario} /> */}
      </Switch>
    </HashRouter>
  );
};

export default Rotas;
