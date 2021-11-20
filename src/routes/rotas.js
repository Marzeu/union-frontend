import React from "react";
import { Route, Routes, HashRouter } from 'react-router-dom';
import CadastroUsuario from "../pages/cadastroUsuario";
import Login from "../pages/login";

const Rotas = () => {
    return (
        <HashRouter>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/cadastro-usuario" element={<CadastroUsuario />} />
            </Routes>
        </HashRouter>
    )
}

export default Rotas;