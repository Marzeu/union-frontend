import React from "react";

import AuthService from "../app/service/authService";
import ApiService from "../app/apiservice";
import jwt from "jsonwebtoken";

export const AuthContext = React.createContext();
export const AuthConsumer = AuthContext.Consumer;

const AuthProvider = AuthContext.Provider;

class ProvedorAutenticacao extends React.Component {
  state = {
    coordenadorAutenticado: null,
    isAutenticado: false,
  };

  iniciarSessao = (tokenDTO) => {
    const token = tokenDTO.token;
    const claims = jwt.decode(token);
    console.log(claims);
    ApiService.registrarToken(token);
    AuthService.logar(tokenDTO);
    this.setState({ isAutenticado: true, coordenadorAutenticado: tokenDTO });
  };

  encerrarSessao = () => {
    AuthService.removeCoordenadorAutenticado();
    this.setState({ isAutenticado: false, coordenadorAutenticado: null });
  };

  render() {
    const contexto = {
      coordenadorAutenticado: this.state.coordenadorAutenticado,
      isAutenticado: this.state.isAutenticado,
      iniciarSessao: this.iniciarSessao,
      encerrarSessao: this.encerrarSessao,
    };

    return <AuthProvider value={contexto}>{this.props.children}</AuthProvider>;
  }
}

export default ProvedorAutenticacao;
