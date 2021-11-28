import React from "react";

import AuthService from "../app/service/authService";
import jwt from "jsonwebtoken";
import ApiService from "../app/apiservice";

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
    const coordenador = {
      id: claims.userid,
      nome: claims.nome,
    };

    ApiService.registrarToken(token);
    AuthService.logar(coordenador, token);
    this.setState({ isAutenticado: true, coordenadorAutenticado: coordenador });
  };

  encerrarSessao = () => {
    AuthService.removeCoordenadorAutenticado();
    this.setState({ isAutenticado: false, coordenadorAutenticado: null });
  };

  async componentDidMount() {
    const isAutenticado = AuthService.isCoordenadorAutenticado();
    console.log("está autenticado? ", isAutenticado);
    if (isAutenticado) {
      const coordenador = await AuthService.refreshSession();
      this.setState({
        isAutenticado: true,
        coordenadorAutenticado: coordenador,
      });
    }
  }

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
