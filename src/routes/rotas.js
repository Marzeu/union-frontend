import React from "react";
import { Route, Switch, HashRouter } from 'react-router-dom';

import CadastroUsuario from "../pages/cadastroUsuario";
import Login from "../pages/login";

const Rotas = () => {
    return (
        <HashRouter>
            <Switch>
                <Route path="/login" component={Login} />
                <Route path="/cadastro-usuario" component={CadastroUsuario} />
            </Switch>
        </HashRouter>
    );
}

export default Rotas;